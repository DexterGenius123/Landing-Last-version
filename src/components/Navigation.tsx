import { useState } from 'react';
import { Shield } from 'lucide-react';

type Tab = 'home' | 'team';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">TAI</span>
          </div>

          <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => onTabChange('home')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'home'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onTabChange('team')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'team'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Team Biography
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

