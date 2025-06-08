'use client';

import { useState } from 'react';
import UpgradeModal from '@/components/UpgradeModal';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Open Upgrade Modal
      </button>

      <UpgradeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
