export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ===== PROGRESS API =====

    // GET /api/progress?userId=USER_ID — get all progress for a user
    // GET /api/progress?userId=USER_ID&courseId=COURSE_ID — get progress for a specific course
    if (url.pathname === "/api/progress" && request.method === "GET") {
      const userId = url.searchParams.get("userId");
      if (!userId) {
        return json({ error: "userId is required" }, 400);
      }
      const courseId = url.searchParams.get("courseId");
      const key = courseId ? `progress:${userId}:${courseId}` : `progress:${userId}`;
      const data = await env.KV.get(key);
      return json(data ? JSON.parse(data) : { userId, progress: [] });
    }

    // POST /api/progress — save a progress entry
    // Body: { userId, courseId, lessonId, type, value, score, total, metadata }
    // type can be: "course_progress" | "quiz_score" | "lesson_complete" | "user_step"
    if (url.pathname === "/api/progress" && request.method === "POST") {
      const body = await request.json();
      const { userId, courseId, lessonId, type, value, score, total, metadata } = body;
      if (!userId || !type) {
        return json({ error: "userId and type are required" }, 400);
      }

      const key = `progress:${userId}:${courseId || "all"}`;
      const existing = await env.KV.get(key);
      const record = existing ? JSON.parse(existing) : { userId, courseId: courseId || "all", progress: [] };

      const entry = {
        type,
        lessonId: lessonId || null,
        value: value !== undefined ? value : null,
        score: score !== undefined ? score : null,
        total: total !== undefined ? total : null,
        metadata: metadata || {},
        timestamp: new Date().toISOString()
      };

      record.progress.push(entry);
      record.lastUpdated = new Date().toISOString();
      await env.KV.put(key, JSON.stringify(record));
      return json({ success: true, entry });
    }

    // GET /api/progress/summary?userId=USER_ID — get a summary across all courses
    if (url.pathname === "/api/progress/summary" && request.method === "GET") {
      const userId = url.searchParams.get("userId");
      if (!userId) {
        return json({ error: "userId is required" }, 400);
      }
      const list = await env.KV.list({ prefix: `progress:${userId}:` });
      const summaries = [];
      for (const item of list.keys) {
        const data = await env.KV.get(item.name);
        if (data) {
          const record = JSON.parse(data);
          const courseProgress = record.progress.filter(p => p.type === "course_progress");
          const quizScores = record.progress.filter(p => p.type === "quiz_score");
          const lessonsCompleted = record.progress.filter(p => p.type === "lesson_complete");

          summaries.push({
            courseId: record.courseId,
            totalEntries: record.progress.length,
            lessonsCompleted: lessonsCompleted.length,
            quizCount: quizScores.length,
            averageQuizScore: quizScores.length > 0
              ? Math.round(quizScores.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizScores.length)
              : null,
            latestProgress: courseProgress.length > 0 ? courseProgress[courseProgress.length - 1].value : null,
            lastUpdated: record.lastUpdated
          });
        }
      }
      return json({ userId, courses: summaries });
    }

    // ===== Everything else: serve static assets =====
    return env.ASSETS.fetch(request);
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
