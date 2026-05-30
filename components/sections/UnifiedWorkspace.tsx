'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { MessageSquare, FileText, Monitor, Zap } from 'lucide-react';

const panels = [
  { id: 'viewer',  label: 'DICOM Viewer',   icon: Monitor,       desc: 'Native imaging',  color: '#0891b2' },
  { id: 'report',  label: 'Report Panel',   icon: FileText,       desc: 'Structured findings', color: '#7c3aed' },
  { id: 'ai',      label: 'AI Chat',         icon: MessageSquare, desc: 'Context-aware AI',  color: '#059669' },
];

export function UnifiedWorkspace() {
  const { theme } = useTheme();

  return (
    <section
      id="workspace"
      className="py-24"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--chip-text)', fontFamily: 'var(--font-mono)' }}
            >
              Unified Workspace
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Images, Reports,<br />Documents,{' '}
              <span style={{ color: 'var(--accent)' }}>and AI</span><br />
              Side by Side
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Stop context-switching. ELVIE brings native DICOM viewing, structured
              report understanding, and AI-powered clinical reasoning into a single,
              responsive workspace.
            </p>

            <div className="mt-8 space-y-3">
              {panels.map(panel => (
                <motion.div
                  key={panel.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: panels.indexOf(panel) * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: `${panel.color}15` }}
                  >
                    <panel.icon size={16} style={{ color: panel.color }} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                      {panel.label}
                    </span>
                    <span className="text-sm ml-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                      — {panel.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual: three-panel workspace mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <WorkspaceMockup theme={theme} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkspaceMockup({ theme }: { theme: string }) {
  const isDark = theme === 'command' || theme === 'atlas';

  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-lg)',
        background: isDark ? '#070e1a' : '#fff',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{
          background: isDark ? '#040a14' : '#f8fafc',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <span
          className="text-xs flex-1 text-center"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          ELVIE — Unified Clinical Workspace
        </span>
        <div className="flex items-center gap-1">
          <Zap size={10} style={{ color: 'var(--accent)' }} />
          <span className="text-xs" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '9px' }}>AI READY</span>
        </div>
      </div>

      {/* Three panels */}
      <div className="flex h-52 sm:h-64">
        {/* DICOM panel */}
        <div
          className="flex-1 min-w-0 flex items-center justify-center relative"
          style={{ background: '#060a10', borderRight: '1px solid var(--border)' }}
        >
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="50" fill="rgba(8,20,36,0.9)" stroke={isDark ? 'rgba(0,212,232,0.15)' : 'rgba(8,145,178,0.2)'} strokeWidth="0.5" />
            <circle cx="55" cy="55" r="40" fill="rgba(12,26,44,0.85)" />
            <circle cx="55" cy="55" r="28" fill="rgba(18,34,54,0.8)" />
            <ellipse cx="49" cy="53" rx="5.5" ry="4"
              fill={isDark ? 'rgba(0,150,170,0.15)' : 'rgba(8,145,178,0.12)'}
              stroke={isDark ? 'rgba(0,212,232,0.5)' : 'rgba(8,145,178,0.5)'}
              strokeWidth="0.5" strokeDasharray="2 1"
            />
            <line x1="55" y1="10" x2="55" y2="100" stroke={isDark ? 'rgba(0,212,232,0.1)' : 'rgba(8,145,178,0.1)'} strokeWidth="0.5" />
            <line x1="10" y1="55" x2="100" y2="55" stroke={isDark ? 'rgba(0,212,232,0.1)' : 'rgba(8,145,178,0.1)'} strokeWidth="0.5" />
          </svg>
          <div className="absolute bottom-2 left-2 text-xs font-mono" style={{ color: 'rgba(0,212,232,0.5)', fontSize: '8px', fontFamily: 'monospace' }}>
            CT BRAIN · S2/I19
          </div>
        </div>

        {/* Report panel */}
        <div
          className="w-28 sm:w-36 p-2 sm:p-3 border-r overflow-hidden"
          style={{
            borderColor: 'var(--border)',
            background: isDark ? '#0a1628' : '#fff',
          }}
        >
          <p className="text-xs font-bold mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.1em' }}>
            FINDINGS
          </p>
          {[
            { label: 'Chronic infarct, left thalamus', urgency: '#f59e0b' },
            { label: 'Periventricular WM changes',     urgency: '#10b981' },
            { label: 'No acute findings',              urgency: '#64748b' },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 2 }}
              className="mb-2 p-1.5 rounded cursor-pointer border"
              style={{
                background: isDark ? '#0d1f38' : '#f8fafc',
                borderColor: 'var(--border)',
              }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.urgency }} />
                <span className="text-xs leading-tight" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: '8px' }}>
                  {f.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI panel */}
        <div
          className="w-24 sm:w-32 flex flex-col p-2"
          style={{ background: isDark ? '#080f1e' : '#f8fafc' }}
        >
          <p className="text-xs font-bold mb-2" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.1em' }}>
            AI CHAT
          </p>
          <div className="flex-1 space-y-1.5 overflow-hidden">
            {[
              { role: 'user', text: 'Key findings?' },
              { role: 'ai',   text: 'Three findings detected. Left thalamic infarct is most clinically relevant.' },
            ].map((m, i) => (
              <div
                key={i}
                className="px-2 py-1.5 rounded-lg leading-snug"
                style={{
                  background: m.role === 'ai'
                    ? (isDark ? 'rgba(0,212,232,0.07)' : '#e0f2fe')
                    : (isDark ? 'rgba(255,255,255,0.04)' : '#fff'),
                  border: `1px solid ${isDark ? 'rgba(0,212,232,0.1)' : '#e2e8f0'}`,
                  fontSize: '8px',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div
            className="mt-1 px-2 py-1 rounded border text-xs"
            style={{
              borderColor: 'var(--border-accent)',
              color: 'var(--text-muted)',
              fontSize: '8px',
              fontFamily: 'var(--font-mono)',
              background: isDark ? 'rgba(0,212,232,0.03)' : '#fff',
            }}
          >
            Ask about findings…
          </div>
        </div>
      </div>
    </div>
  );
}
