const STORAGE_KEY = 'story_wizard_offline_data';

export interface OfflineData {
  stories: any[];
  lastSync: number;
}

export function saveOfflineData(data: OfflineData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save offline data:', error);
  }
}

export function getOfflineData(): OfflineData | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to retrieve offline data:', error);
    return null;
  }
}

export function clearOfflineData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear offline data:', error);
  }
}