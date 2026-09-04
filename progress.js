/**
 * Progress Tracking Client
 * Add this to your HTML pages (or include as a separate JS file)
 * to record and retrieve user progress.
 */

const ProgressTracker = {
  /**
   * Record course progress (e.g., 45% complete)
   * @param {string} userId - The user's ID
   * @param {string} courseId - The course ID
   * @param {number} value - Progress value (e.g., 45 for 45%)
   */
  async recordCourseProgress(userId, courseId, value) {
    return this._post("/api/progress", {
      userId, courseId, type: "course_progress", value
    });
  },

  /**
   * Record a quiz score
   * @param {string} userId - The user's ID
   * @param {string} courseId - The course ID
   * @param {string} lessonId - The quiz/lesson ID
   * @param {number} score - Points earned
   * @param {number} total - Total possible points
   */
  async recordQuizScore(userId, courseId, lessonId, score, total) {
    return this._post("/api/progress", {
      userId, courseId, lessonId, type: "quiz_score", score, total
    });
  },

  /**
   * Mark a lesson as complete
   * @param {string} userId - The user's ID
   * @param {string} courseId - The course ID
   * @param {string} lessonId - The lesson ID
   */
  async recordLessonComplete(userId, courseId, lessonId) {
    return this._post("/api/progress", {
      userId, courseId, lessonId, type: "lesson_complete"
    });
  },

  /**
   * Record a user step (e.g., clicked a button, watched a video)
   * @param {string} userId - The user's ID
   * @param {string} courseId - The course ID
   * @param {string} lessonId - The lesson ID
   * @param {string} step - Description of the step
   * @param {object} metadata - Any extra data to store
   */
  async recordStep(userId, courseId, lessonId, step, metadata = {}) {
    return this._post("/api/progress", {
      userId, courseId, lessonId, type: "user_step", value: step, metadata
    });
  },

  /**
   * Get all progress for a user in a specific course
   * @param {string} userId - The user's ID
   * @param {string} courseId - The course ID
   */
  async getProgress(userId, courseId) {
    const url = `/api/progress?userId=${encodeURIComponent(userId)}&courseId=${encodeURIComponent(courseId)}`;
    return this._get(url);
  },

  /**
   * Get a summary of all courses for a user
   * @param {string} userId - The user's ID
   */
  async getSummary(userId) {
    return this._get(`/api/progress/summary?userId=${encodeURIComponent(userId)}`);
  },

  // ===== Internal helpers =====
  async _post(url, body) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    return res.json();
  },

  async _get(url) {
    const res = await fetch(url);
    return res.json();
  }
};
