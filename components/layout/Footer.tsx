'use client';

import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: 'var(--section-divider)', background: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="var(--accent)" />
              <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="14" cy="14" r="2.5" fill="white" />
            </svg>
            <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              ELVIE
            </span>
            <span className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              — Clinical Intelligence Agent
            </span>
          </div>

          <div className="flex items-center gap-6">
            <ThemeSwitcher />
            <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              © 2027 Elvie
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
