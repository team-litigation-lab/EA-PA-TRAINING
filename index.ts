export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API route — your KV test logic
    if (url.pathname === "/api/kv") {
      await env.KV.put("KEY", "VALUE");
      const value = await env.KV.get("KEY");
      const allKeys = await env.KV.list();
      await env.KV.delete("KEY");
      return new Response(JSON.stringify({ value, allKeys }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // Everything else — serve static assets (your website)
    return env.ASSETS.fetch(request);
  }
};
