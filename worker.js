export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/claude" && request.method === "POST") {
      if (!env.ANTHROPIC_API_KEY) {
        return new Response(
          JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured on this Worker." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
      try {
        const body = await request.text();
        const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01"
          },
          body
        });
        const responseText = await anthropicResponse.text();
        return new Response(responseText, {
          status: anthropicResponse.status,
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(
          JSON.stringify({ error: "Proxy request to Anthropic failed.", detail: String(e) }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Shared, cross-trainee storage backing the Admin Dashboard.
    // Real persistence via Cloudflare KV — required because the app runs
    // as a standalone site with no other server-side database.
    if (url.pathname === "/api/storage/set" && request.method === "POST") {
      if (!env.LSH_KV) {
        return new Response(JSON.stringify({ error: "LSH_KV namespace is not bound on this Worker." }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
      try {
        const { key, value } = await request.json();
        if (!key) return new Response(JSON.stringify({ error: "Missing key" }), { status: 400, headers: { "Content-Type": "application/json" } });
        await env.LSH_KV.put(key, value);
        return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: "KV write failed.", detail: String(e) }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }

    if (url.pathname === "/api/storage/get" && request.method === "POST") {
      if (!env.LSH_KV) {
        return new Response(JSON.stringify({ error: "LSH_KV namespace is not bound on this Worker." }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
      try {
        const { key } = await request.json();
        if (!key) return new Response(JSON.stringify({ error: "Missing key" }), { status: 400, headers: { "Content-Type": "application/json" } });
        const value = await env.LSH_KV.get(key);
        return new Response(JSON.stringify({ value }), { headers: { "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: "KV read failed.", detail: String(e) }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }

    if (url.pathname === "/api/storage/list" && request.method === "POST") {
      if (!env.LSH_KV) {
        return new Response(JSON.stringify({ error: "LSH_KV namespace is not bound on this Worker." }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
      try {
        const { prefix } = await request.json();
        const listResult = await env.LSH_KV.list({ prefix: prefix || "" });
        const keys = listResult.keys.map(k => k.name);
        return new Response(JSON.stringify({ keys }), { headers: { "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: "KV list failed.", detail: String(e) }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }

    // Every other request: serve the static site as before.
    return env.ASSETS.fetch(request);
  }
};
