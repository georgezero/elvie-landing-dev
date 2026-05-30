'use client';

import { motion } from 'framer-motion';
import { Stethoscope, UserRound, FlaskConical } from 'lucide-react';

const users = [
  {
    role: 'Radiologist',
    icon: Stethoscope,
    description: 'Navigate complex reports faster. Let AI surface key findings and open the right image at the right moment — without manual searching.',
    capabilities: ['Finding extraction', 'Report-to-image navigation', 'Prior study comparison', 'Clinical correlation'],
    color: '#0891b2',
  },
  {
    role: 'Medical Provider',
    icon: UserRound,
    description: 'Understand imaging results without translation. Move from findings to clinical action with the full patient context in one workspace.',
    capabilities: ['Patient-friendly summaries', 'Cross-system context', 'AI chat Q&A', 'Longitudinal tracking'],
    color: '#4f46e5',
  },
  {
    role: 'Researcher',
    icon: FlaskConical,
    description: 'Ingest structured findings, annotations, and AI outputs at scale. Build on a clinically-grounded intelligence layer with open APIs.',
    capabilities: ['Structured finding export', 'Annotation pipelines', 'Multi-study ingestion', 'Open API access'],
    color: '#d97706',
  },
];

export function TargetUsers() {
  return (
    <section
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
            Who Uses ELVIE
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Built for Every<br />
            <span style={{ color: 'var(--accent)' }}>Clinical Role</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {users.map((user, i) => (
            <motion.div
              key={user.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${user.color}15` }}
              >
                <user.icon size={24} style={{ color: user.color }} />
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
              >
                {user.role}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {user.description}
              </p>

              <div className="space-y-2">
                {user.capabilities.map(cap => (
                  <div key={cap} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: user.color }} />
                    <span
                      className="text-xs"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
