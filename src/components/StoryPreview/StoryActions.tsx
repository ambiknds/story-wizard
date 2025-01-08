import React from 'react';
import { Download, Share2 } from 'lucide-react';

interface StoryActionsProps {
  onDownload: () => void;
  onShare: () => void;
  disabled: boolean;
}

export function StoryActions({
  onDownload,
  onShare,
  disabled,
}: StoryActionsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onDownload}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4" />
        Download
      </button>
      <button
        onClick={onShare}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Share2 className="w-4 h-4" />
        Copy
      </button>
    </div>
  );
}
