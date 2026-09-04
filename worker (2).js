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

    // Every other request: serve the static site as before.
    return env.ASSETS.fetch(request);
  }
};
