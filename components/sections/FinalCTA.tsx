'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

export function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === 'command' || theme === 'atlas';

  return (
    <section
      id="cta"
      className="py-32 relative overflow-hidden"
      style={{ background: isDark ? 'var(--bg-surface)' : 'var(--bg-base)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(ellipse at 50% 50%, ${theme === 'atlas' ? 'rgba(245,158,11,0.05)' : 'rgba(0,212,232,0.04)'} 0%, transparent 70%)`
            : theme === 'shared'
              ? 'linear-gradient(135deg, rgba(79,70,229,0.04) 0%, rgba(13,148,136,0.04) 100%)'
              : 'linear-gradient(135deg, rgba(8,145,178,0.04) 0%, rgba(14,116,144,0.04) 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--chip-text)', fontFamily: 'var(--font-mono)' }}
          >
            Get Started
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            From Findings<br />
            to <span style={{ color: 'var(--accent)' }}>Understanding</span>
          </h2>

          <p
            className="mt-6 text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            ELVIE is in early access. Join the medical providers, radiologists,
            and researchers building what comes next.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                boxShadow: isDark ? `0 0 40px rgba(0,212,232,0.2), 0 4px 16px rgba(0,0,0,0.4)` : 'var(--shadow-md)',
              }}
            >
              Request Access
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Play size={16} style={{ color: 'var(--accent)' }} />
              Watch Demo
            </motion.a>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-12 border-t"
            style={{ borderColor: 'var(--section-divider)' }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              Built for humans and their agents
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'ISO DICOM',         sub: 'Native Browser' },
                { label: 'HL7 FHIR R4',       sub: 'Standards Ready' },
                { label: 'IHE DICOMweb',      sub: 'QIDO · WADO · STOW' },
                { label: 'MCP Protocol',       sub: 'Agent Control' },
                { label: 'REST API',           sub: 'Open & Extensible' },
              ].map(tag => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border"
                  style={{
                    background: 'var(--chip-bg)',
                    borderColor: 'var(--border-accent)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M5 0.5L9.33 2.75V7.25L5 9.5L0.67 7.25V2.75L5 0.5Z"
                      stroke="currentColor" strokeWidth="0.8" fill="none"
                      style={{ color: 'var(--accent)', opacity: 0.7 }} />
                    <path d="M3 5L4.5 6.5L7 3.5" stroke="currentColor" strokeWidth="0.9"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ color: 'var(--accent)' }} />
                  </svg>
                  <span>
                    <span className="block text-xs font-semibold leading-tight" style={{ color: 'var(--accent)' }}>
                      {tag.label}
                    </span>
                    <span className="block text-xs leading-tight" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                      {tag.sub}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
