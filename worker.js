export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/claude" && request.method === "POST") {
      if (!env.ANTHROPIC_API_KEY) {
        return new Response(
          JSON.stringify({ error: "ANTHROPIC_API_KEY is missing." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      try {
        // Read the body exactly once
        const payload = await request.json();
        
        // Override the token limit to prevent truncation
        payload.max_tokens = 4096;

        const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01"
          },
          body: JSON.stringify(payload)
        });

        const responseData = await anthropicResponse.text();
        return new Response(responseData, {
          status: anthropicResponse.status,
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(
          JSON.stringify({ error: "Worker processing failed.", detail: e.message }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
