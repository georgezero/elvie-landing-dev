'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const links = [
  { href: '#problem',   label: 'The Problem' },
  { href: '#workspace', label: 'AI Workspace' },
  { href: '#ai-chat',   label: 'Ask Anything' },
  { href: '#agentic',   label: 'Agent Native' },
  { href: '#vision',    label: 'Patient Story' },
];

export function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen) {
      const handler = () => setMobileOpen(false);
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          background: scrolled || mobileOpen ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled || mobileOpen ? 'var(--nav-blur)' : 'none',
          WebkitBackdropFilter: scrolled || mobileOpen ? 'var(--nav-blur)' : 'none',
          borderBottom: scrolled || mobileOpen ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
              <LogoMark />
              <span
                className="text-lg"
                style={{ fontFamily: 'var(--nav-logo-font, var(--font-display))', fontWeight: 'var(--nav-logo-weight, 600)', letterSpacing: 'var(--nav-logo-tracking)', color: 'var(--nav-logo-color, var(--text-primary))' }}
              >
                ELVIE
              </span>
            </a>

            {/* Desktop nav buttons */}
            <div className="hidden lg:flex items-center gap-1.5">
              {links.map(link => (
                <NavButton
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={active === link.href.slice(1)}
                  isSpecial={link.href === '#agentic'}
                />
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ThemeSwitcher />
              <a
                href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#cta'}
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Request Access
              </a>
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: 'var(--border)', background: 'var(--nav-bg)' }}
            >
              <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      background: active === link.href.slice(1) ? 'var(--accent-soft)' : 'transparent',
                      color: active === link.href.slice(1)
                        ? 'var(--accent)'
                        : link.href === '#agentic'
                          ? 'var(--accent)'
                          : 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      border: link.href === '#agentic' ? '1px dashed var(--border-accent)' : '1px solid transparent',
                    }}
                  >
                    {link.href === '#agentic' && (
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                        style={{ background: 'var(--accent)' }} />
                    )}
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-2 pb-1 border-t mt-1" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#cta'}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold"
                    style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)' }}
                  >
                    Request Access
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

function NavButton({
  href, label, isActive, isSpecial,
}: {
  href: string; label: string; isActive: boolean; isSpecial: boolean;
}) {
  if (isSpecial) {
    return (
      <a
        href={href}
        className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-150 group"
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--accent)',
          background: isActive ? 'var(--accent-soft)' : 'transparent',
          border: '1px dashed var(--accent)',
          opacity: isActive ? 1 : 0.8,
        }}
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          style={{ background: 'var(--accent-soft)', opacity: 0.5 }} />
        <span className="relative w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
          style={{ background: 'var(--accent)' }} />
        <span className="relative">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 group"
      style={{
        fontFamily: 'var(--font-body)',
        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
        background: isActive ? 'var(--accent-soft)' : 'transparent',
        border: '1px solid transparent',
      }}
    >
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        style={{ background: 'var(--accent-soft)' }}
      />
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute bottom-0 left-3 right-3 h-px rounded-full"
          style={{ background: 'var(--accent)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative">{label}</span>
    </a>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="#0891b2" />
      <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="14" cy="14" r="2.5" fill="white" />
    </svg>
  );
}
