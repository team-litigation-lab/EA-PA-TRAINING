// Progress tracking service for LSH EA/PA training platform
class ProgressManager {
  constructor() {
    this.storageKey = 'lsh-training-progress';
    this.cloudSyncKey = 'lsh-cloud-sync';
    this.init();
  }

  // Initialize progress manager
  init() {
    if (!this.getProgress()) {
      this.saveProgress({
        userId: this.generateUserId(),
        traineeName: localStorage.getItem('traineeName') || '',
        startDate: new Date().toISOString(),
        daysCompleted: [],
        lessonsViewed: {},
        quizResults: {},
        notesAdded: {},
        toolsAccessed: {},
        certificateEarned: false,
        lastUpdated: new Date().toISOString()
      });
    }
  }

  // Generate unique user ID
  generateUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', userId);
    }
    return userId;
  }

  // Get all progress data
  getProgress() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  // Save progress to localStorage
  saveProgress(data) {
    data.lastUpdated = new Date().toISOString();
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.queueCloudSync(data); // Queue for cloud sync if available
  }

  // Mark a day as completed
  completeDay(dayId) {
    const progress = this.getProgress();
    if (!progress.daysCompleted.includes(dayId)) {
      progress.daysCompleted.push(dayId);
      this.saveProgress(progress);
    }
  }

  // Track lesson view
  recordLessonView(dayId, lessonId) {
    const progress = this.getProgress();
    if (!progress.lessonsViewed[dayId]) {
      progress.lessonsViewed[dayId] = [];
    }
    if (!progress.lessonsViewed[dayId].includes(lessonId)) {
      progress.lessonsViewed[dayId].push(lessonId);
    }
    this.saveProgress(progress);
  }

  // Save quiz result
  recordQuizResult(dayId, quizId, score, maxScore) {
    const progress = this.getProgress();
    if (!progress.quizResults[dayId]) {
      progress.quizResults[dayId] = [];
    }
    progress.quizResults[dayId].push({
      quizId,
      score,
      maxScore,
      percentage: (score / maxScore) * 100,
      timestamp: new Date().toISOString()
    });
    this.saveProgress(progress);
  }

  // Save user notes
  saveNote(dayId, noteId, content) {
    const progress = this.getProgress();
    if (!progress.notesAdded[dayId]) {
      progress.notesAdded[dayId] = {};
    }
    progress.notesAdded[dayId][noteId] = {
      content,
      savedAt: new Date().toISOString()
    };
    this.saveProgress(progress);
  }

  // Get notes for a day
  getNotes(dayId) {
    const progress = this.getProgress();
    return progress.notesAdded[dayId] || {};
  }

  // Track tool access
  recordToolAccess(toolName) {
    const progress = this.getProgress();
    if (!progress.toolsAccessed[toolName]) {
      progress.toolsAccessed[toolName] = {
        accessCount: 0,
        firstAccess: new Date().toISOString(),
        lastAccess: null
      };
    }
    progress.toolsAccessed[toolName].accessCount++;
    progress.toolsAccessed[toolName].lastAccess = new Date().toISOString();
    this.saveProgress(progress);
  }

  // Calculate progress percentage
  getProgressPercentage() {
    const progress = this.getProgress();
    const totalDays = DAYS.length;
    return Math.round((progress.daysCompleted.length / totalDays) * 100);
  }

  // Get stats for dashboard
  getStats() {
    const progress = this.getProgress();
    return {
      traineeName: progress.traineeName,
      daysCompleted: progress.daysCompleted.length,
      totalDays: DAYS.length,
      progressPercent: this.getProgressPercentage(),
      quizzesTaken: Object.values(progress.quizResults).flat().length,
      averageQuizScore: this.getAverageQuizScore(),
      toolsUsed: Object.keys(progress.toolsAccessed).length,
      lastAccessed: progress.lastUpdated
    };
  }

  // Calculate average quiz score
  getAverageQuizScore() {
    const progress = this.getProgress();
    const allResults = Object.values(progress.quizResults).flat();
    if (allResults.length === 0) return 0;
    const total = allResults.reduce((sum, result) => sum + result.percentage, 0);
    return Math.round(total / allResults.length);
  }

  // Queue data for cloud sync
  queueCloudSync(data) {
    const syncQueue = JSON.parse(localStorage.getItem(this.cloudSyncKey) || '[]');
    syncQueue.push({
      data,
      timestamp: new Date().toISOString(),
      synced: false
    });
    localStorage.setItem(this.cloudSyncKey, JSON.stringify(syncQueue));
  }

  // Export progress as JSON
  exportProgress() {
    const progress = this.getProgress();
    return JSON.stringify(progress, null, 2);
  }

  // Import progress from JSON
  importProgress(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      this.saveProgress(data);
      return true;
    } catch (e) {
      console.error('Failed to import progress:', e);
      return false;
    }
  }

  // Clear all progress
  clearProgress() {
    if (confirm('Are you sure? This will delete all saved progress.')) {
      localStorage.removeItem(this.storageKey);
      this.init();
      return true;
    }
    return false;
  }
}

// Initialize globally
const progressManager = new ProgressManager();