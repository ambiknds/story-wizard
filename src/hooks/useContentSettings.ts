import { useState, useEffect } from 'react';

interface ContentSettings {
  moderateContent: boolean;
  allowSharing: boolean;
}

export function useContentSettings() {
  const [settings, setSettings] = useState<ContentSettings>({
    moderateContent: true,
    allowSharing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem('content_settings');
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const updateSettings = (newSettings: Partial<ContentSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('content_settings', JSON.stringify(updated));
  };

  return { settings, updateSettings };
}