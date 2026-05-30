'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const links = [
  { href: '#problem',    label: 'The Problem' },
  { href: '#workspace',  label: 'Workspace' },
  { href: '#ai-chat',    label: 'AI Chat' },
  { href: '#vision',     label: 'Vision' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-40 transition-all"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'var(--nav-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--nav-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <LogoMark />
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              ELVIE
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: 'var(--accent)',
                color: '#ffffff',
                fontFamily: 'var(--font-body)',
              }}
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="var(--accent)" />
      <path
        d="M8 14 L14 8 L20 14 L14 20 Z"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="14" r="2.5" fill="white" />
    </svg>
  );
}
