'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Layers, Sparkles, MapPin } from 'lucide-react';

const capabilities = [
  {
    icon: TrendingUp,
    title: 'Longitudinal Tracking',
    description: 'Follow findings across studies over time. Automatically compare current and prior imaging for interval change and trend analysis.',
    status: 'Roadmap',
    statusColor: '#7c3aed',
  },
  {
    icon: Layers,
    title: 'Cross-Document Intelligence',
    description: 'Connect findings across radiology, pathology, labs, and clinical notes into a unified understanding of the patient.',
    status: 'Roadmap',
    statusColor: '#0891b2',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Recommendations',
    description: 'Evidence-based follow-up suggestions derived from structured finding analysis and validated clinical guidelines.',
    status: 'Roadmap',
    statusColor: '#059669',
  },
  {
    icon: MapPin,
    title: 'Localization of Findings',
    description: 'Multimodal AI that links text descriptions directly to spatial locations in 3D anatomy — bridging language and imaging.',
    status: 'Experimental',
    statusColor: '#d97706',
  },
];

export function FutureCapabilities() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg-surface)' }}
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
            Future Capabilities
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            The<br />
            <span style={{ color: 'var(--accent)' }}>Roadmap</span>
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            ELVIE is an evolving platform. These capabilities are in development,
            shaped by feedback from the clinicians and researchers using it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
              className="p-4 sm:p-6 rounded-2xl border flex flex-col gap-4 cursor-default"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${cap.statusColor}15` }}
              >
                <cap.icon size={20} style={{ color: cap.statusColor }} />
              </div>

              <div className="flex-1">
                <h3
                  className="text-base font-semibold leading-snug mb-2"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {cap.description}
                </p>
              </div>

              <div
                className="self-start px-2.5 py-1 rounded-lg text-xs font-semibold border"
                style={{
                  background: `${cap.statusColor}10`,
                  borderColor: `${cap.statusColor}30`,
                  color: cap.statusColor,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {cap.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
