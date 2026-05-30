'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';

const dataLayers = [
  { label: 'CT Brain',         type: 'Imaging',    date: '2026-03-15', color: '#0891b2', active: true },
  { label: 'MRI Brain',        type: 'Imaging',    date: '2025-11-02', color: '#0284c7', active: true },
  { label: 'Radiology Report', type: 'Report',     date: '2026-03-15', color: '#7c3aed', active: true },
  { label: 'Pathology',        type: 'Lab',        date: '2026-02-28', color: '#059669', active: true },
  { label: 'CBC / Metabolic',  type: 'Lab',        date: '2026-03-10', color: '#10b981', active: true },
  { label: 'Neurology Note',   type: 'Note',       date: '2026-03-18', color: '#d97706', active: true },
  { label: 'AI Insights',      type: 'AI',         date: '2026-03-15', color: '#818cf8', active: true },
  { label: 'Follow-up Study',  type: 'Future',     date: '2026-09-15', color: '#94a3b8', active: false },
];

export function BeyondImaging() {
  const { theme } = useTheme();
  const isDark = theme === 'command' || theme === 'atlas' || theme === 'thermal' || theme === 'surgical' || theme === 'oncall' || theme === 'signal';

  return (
    <section
      id="vision"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual — patient story timeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Header */}
              <div
                className="px-5 py-3.5 border-b flex items-center justify-between"
                style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              >
                <div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                    Patient Story — Full Timeline
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    DOB: 1958 · MRN: 00247831
                  </p>
                </div>
                <div
                  className="px-2 py-1 rounded-lg text-xs border"
                  style={{ background: 'var(--badge-bg)', borderColor: 'var(--border-accent)', color: 'var(--badge-text)', fontFamily: 'var(--font-mono)' }}
                >
                  {dataLayers.filter(d => d.active).length} sources
                </div>
              </div>

              {/* Timeline */}
              <div className="p-4 space-y-2" style={{ background: 'var(--bg-card)' }}>
                {dataLayers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: layer.active ? 1 : 0.35, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-lg border"
                    style={{
                      borderColor: layer.active ? 'var(--border)' : 'transparent',
                      background: layer.active ? 'var(--bg-card)' : 'transparent',
                      opacity: layer.active ? undefined : 0.35,
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: layer.active ? layer.color : 'var(--border)' }}
                    />
                    <div className="flex-1 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                          {layer.label}
                        </span>
                        {!layer.active && (
                          <span className="ml-2 text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                            (planned)
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs px-1.5 py-0.5 rounded"
                          style={{ background: `${layer.color}15`, color: layer.color, fontFamily: 'var(--font-mono)', fontSize: '9px' }}
                        >
                          {layer.type}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                          {layer.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--chip-text)', fontFamily: 'var(--font-mono)' }}
            >
              Beyond Imaging
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              The Full<br />
              <span style={{ color: 'var(--accent)' }}>Patient Story</span>
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              A radiology report tells one chapter. ELVIE connects imaging with
              pathology, labs, clinical notes, and follow-up studies to build
              a complete longitudinal picture of the patient.
            </p>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              AI insights emerge from the intersection — not from any single data
              source in isolation.
            </p>
            <div
              className="mt-8 p-4 rounded-xl border"
              style={{
                background: 'var(--accent-soft)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
              >
                &ldquo;ELVIE is not just a PACS viewer and not just a chatbot.
                It is a clinical intelligence agent that connects medical imaging
                with the rest of the patient story.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
