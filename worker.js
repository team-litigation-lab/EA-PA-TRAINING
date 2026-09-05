export default {
  async fetch(request, env, ctx) {
    const apiKey = env.ANTHROPIC_API_KEY;
    // use it in your API call, e.g.:
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      headers: {
        "x-api-key": apiKey,
        "content-type": "application/json",
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ /* your request body */ })
    });
    return response;
  }
};
