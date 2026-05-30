'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { themes, type ThemeId } from '@/data/elvieContent';
import { useTheme } from './ThemeProvider';
import { ChevronDown } from 'lucide-react';

const themeAccents: Record<ThemeId, string> = {
  clinical: '#0891b2',
  command:  '#00d4e8',
  atlas:    '#f59e0b',
  shared:   '#4f46e5',
  thermal:  '#f97316',
  surgical: '#a3e635',
  oncall:   '#0891b2',
};

const themeDots: Record<ThemeId, string> = {
  clinical: 'bg-cyan-500',
  command:  'bg-cyan-400',
  atlas:    'bg-amber-400',
  shared:   'bg-indigo-500',
  thermal:  'bg-orange-500',
  surgical: 'bg-lime-400',
  oncall:   'bg-cyan-600',
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = themes.find(t => t.id === theme)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: themeAccents[theme] }}
        />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.label.split(' ')[0]}</span>
        <ChevronDown
          size={14}
          className="transition-transform"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            role="listbox"
            aria-label="Select theme"
            className="absolute right-0 top-full mt-2 w-56 rounded-xl border overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="p-1">
              <p
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                Visual Direction
              </p>
              {themes.map((t) => (
                <button
                  key={t.id}
                  role="option"
                  aria-selected={theme === t.id}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                  className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-colors"
                  style={{
                    background: theme === t.id ? 'var(--accent-soft)' : 'transparent',
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                    style={{ backgroundColor: themeAccents[t.id] }}
                  />
                  <span>
                    <span
                      className="block text-sm font-medium leading-tight"
                      style={{
                        color: theme === t.id ? 'var(--accent)' : 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {t.label}
                    </span>
                    <span
                      className="block text-xs mt-0.5"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                    >
                      {t.description}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
