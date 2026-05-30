'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

const findings = [
  {
    text: 'Chronic infarct, left thalamus',
    series: 'Series 2',
    image: 'Image 19',
    anatomy: 'Thalamus',
    modality: 'DWI',
    urgency: 'moderate',
    urgencyColor: '#f59e0b',
    x: 42, y: 48,
  },
  {
    text: 'Periventricular white matter changes',
    series: 'Series 1',
    image: 'Image 34',
    anatomy: 'Periventricular',
    modality: 'FLAIR',
    urgency: 'low',
    urgencyColor: '#10b981',
    x: 58, y: 36,
  },
  {
    text: 'Mild cortical atrophy',
    series: 'Series 3',
    image: 'Image 08',
    anatomy: 'Cortex',
    modality: 'T1',
    urgency: 'low',
    urgencyColor: '#10b981',
    x: 65, y: 28,
  },
];

export function ReportToImage() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const isDark = theme === 'command' || theme === 'atlas';

  const handleNavigate = (i: number) => {
    setSelected(i);
    setNavigated(false);
    setTimeout(() => setNavigated(true), 600);
  };

  return (
    <section
      id="navigation"
      className="py-24"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--chip-text)', fontFamily: 'var(--font-mono)' }}
          >
            Report-to-Image Navigation
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Agentic Navigation<br />
            of <span style={{ color: 'var(--accent)' }}>Imaging Findings</span>
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Click any finding. ELVIE opens the exact series and image, with the
            anatomy already in focus — no hunting, no guessing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Finding cards */}
          <div className="space-y-3">
            <p
              className="text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              Click a finding to navigate
            </p>
            {findings.map((f, i) => (
              <motion.button
                key={i}
                onClick={() => handleNavigate(i)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 rounded-xl border transition-all"
                style={{
                  background: selected === i ? 'var(--accent-soft)' : 'var(--bg-card)',
                  borderColor: selected === i ? 'var(--border-accent)' : 'var(--border)',
                  boxShadow: selected === i ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: f.urgencyColor }}
                    />
                    <div>
                      <p
                        className="text-sm font-medium leading-snug"
                        style={{ color: selected === i ? 'var(--accent)' : 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                      >
                        {f.text}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span
                          className="text-xs"
                          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                        >
                          {f.anatomy}
                        </span>
                        <span style={{ color: 'var(--border)' }}>·</span>
                        <span
                          className="text-xs"
                          style={{ color: f.urgencyColor, fontFamily: 'var(--font-mono)' }}
                        >
                          {f.modality}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: selected === i ? 'var(--accent)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                    >
                      {f.series}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: selected === i ? 'var(--accent)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                    >
                      {f.image}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Viewer pane */}
          <motion.div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-lg)' }}
            layout
          >
            {/* Viewer header */}
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{
                background: isDark ? '#040a14' : '#0a0a0a',
                borderColor: isDark ? 'rgba(0,212,232,0.15)' : '#1a1a2a',
              }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={12} style={{ color: '#00d4e8' }} />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selected}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-mono"
                    style={{ color: '#00d4e8', fontFamily: 'monospace', fontSize: '10px' }}
                  >
                    {findings[selected].series} · {findings[selected].image}
                  </motion.span>
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {navigated && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1"
                  >
                    <ExternalLink size={10} style={{ color: '#00d4e8' }} />
                    <span className="text-xs font-mono" style={{ color: '#00d4e8', fontSize: '9px', fontFamily: 'monospace' }}>
                      NAVIGATED
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Viewer canvas */}
            <div
              className="relative h-48 sm:h-64 flex items-center justify-center"
              style={{ background: '#050a12' }}
            >
              <ViewerCanvas finding={findings[selected]} navigated={navigated} isDark={isDark} />
            </div>

            {/* Bottom bar */}
            <div
              className="px-4 py-2 flex items-center gap-3"
              style={{ background: isDark ? '#040a14' : '#0a0a0a', borderTop: '1px solid rgba(0,212,232,0.1)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: findings[selected].urgencyColor }} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={selected}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs flex-1 truncate"
                  style={{ color: 'rgba(200,220,240,0.7)', fontFamily: 'monospace', fontSize: '10px' }}
                >
                  {findings[selected].text}
                </motion.span>
              </AnimatePresence>
              <span className="text-xs" style={{ color: findings[selected].urgencyColor, fontFamily: 'monospace', fontSize: '9px' }}>
                {findings[selected].modality}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ViewerCanvas({ finding, navigated, isDark }: { finding: typeof findings[0]; navigated: boolean; isDark: boolean }) {
  return (
    <svg width="220" height="200" viewBox="0 0 220 200" className="absolute">
      {/* Brain cross-section */}
      <circle cx="110" cy="100" r="80" fill="rgba(8,18,32,0.95)" stroke="rgba(0,212,232,0.08)" strokeWidth="0.5" />
      <circle cx="110" cy="100" r="66" fill="rgba(14,26,44,0.9)" />
      <circle cx="110" cy="100" r="50" fill="rgba(20,34,54,0.85)" />
      <circle cx="110" cy="100" r="34" fill="rgba(26,42,62,0.8)" />
      {/* Lateral ventricles */}
      <path d="M95 95 Q110 88 125 95 Q120 105 100 105 Z" fill="rgba(6,14,26,0.95)" />
      {/* Crosshair */}
      <line x1="110" y1="20" x2="110" y2="180" stroke="rgba(0,212,232,0.1)" strokeWidth="0.5" />
      <line x1="30" y1="100" x2="190" y2="100" stroke="rgba(0,212,232,0.1)" strokeWidth="0.5" />

      {/* Anatomical target */}
      <AnimatePresence>
        {navigated && (
          <>
            <motion.circle
              cx={110 * finding.x / 100 * 2.2}
              cy={100 * finding.y / 100 * 2}
              r={10}
              fill={`${finding.urgencyColor}20`}
              stroke={finding.urgencyColor}
              strokeWidth={1}
              initial={{ r: 0, opacity: 0 } as never}
              animate={{ r: 10, opacity: 1 } as never}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              cx={110 * finding.x / 100 * 2.2}
              cy={100 * finding.y / 100 * 2}
              r={16}
              fill="none"
              stroke={finding.urgencyColor}
              strokeWidth={0.8}
              strokeDasharray="3 3"
              initial={{ r: 10, opacity: 0 } as never}
              animate={{ r: 16, opacity: 0.5 } as never}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Scan line */}
      {navigated && (
        <motion.line
          x1="30" y1="100" x2="190" y2="100"
          stroke="rgba(0,212,232,0.2)" strokeWidth="1.5"
          initial={{ x1: 30, x2: 30 } as never}
          animate={{ x1: 30, x2: 190 } as never}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </svg>
  );
}
