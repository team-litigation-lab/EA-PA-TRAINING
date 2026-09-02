// Cloud sync service for progress data
// This optional service syncs progress to a backend server

class CloudSyncService {
  constructor(endpoint = '/api/progress') {
    this.endpoint = endpoint;
    this.isOnline = navigator.onLine;
    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncPendingData();
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  // Sync progress to cloud
  async syncProgress(progressData) {
    if (!this.isOnline) {
      console.log('Offline: queuing progress for sync');
      return false;
    }

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: progressData.userId,
          progress: progressData,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        console.log('Progress synced to cloud');
        return true;
      } else {
        console.error('Cloud sync failed:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Cloud sync error:', error);
      return false;
    }
  }

  // Sync all pending data
  async syncPendingData() {
    const syncQueue = JSON.parse(localStorage.getItem('lsh-cloud-sync') || '[]');
    const pending = syncQueue.filter(item => !item.synced);

    for (const item of pending) {
      const success = await this.syncProgress(item.data);
      if (success) {
        item.synced = true;
      } else {
        break; // Stop if sync fails
      }
    }

    localStorage.setItem('lsh-cloud-sync', JSON.stringify(syncQueue));
  }

  // Retrieve progress from cloud (optional)
  async getProgressFromCloud(userId) {
    if (!this.isOnline) {
      console.log('Offline: cannot retrieve from cloud');
      return null;
    }

    try {
      const response = await fetch(`${this.endpoint}?userId=${userId}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch progress from cloud:', error);
    }
    return null;
  }
}

// Initialize cloud sync (optional)
const cloudSync = new CloudSyncService();