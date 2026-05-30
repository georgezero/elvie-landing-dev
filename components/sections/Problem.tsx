'use client';

import { motion, type Variants } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import {
  Monitor, FileText, Microscope, FlaskConical,
  NotebookPen, FileScan, History, Bot, ArrowRight
} from 'lucide-react';

const fragments = [
  { label: 'PACS Viewer',        icon: Monitor,       color: '#0891b2' },
  { label: 'Radiology Report',   icon: FileText,       color: '#0e7490' },
  { label: 'Pathology',          icon: Microscope,     color: '#7c3aed' },
  { label: 'Lab Values',         icon: FlaskConical,   color: '#059669' },
  { label: 'Clinical Notes',     icon: NotebookPen,    color: '#d97706' },
  { label: 'Scanned Documents',  icon: FileScan,       color: '#dc2626' },
  { label: 'Prior Studies',      icon: History,        color: '#9333ea' },
  { label: 'AI Chat Tools',      icon: Bot,            color: '#0284c7' },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Problem() {
  const { theme } = useTheme();

  return (
    <section
      id="problem"
      className="py-24 relative overflow-hidden"
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
            The Problem
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Clinical Information<br />
            <span style={{ color: 'var(--accent)' }}>Is Everywhere</span>
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Radiologists, clinicians, and researchers switch between eight or more
            disconnected systems to understand a single patient's story.
            Critical context gets lost in translation.
          </p>
        </motion.div>

        {/* Fragment grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {fragments.map((frag, i) => (
            <motion.div
              key={frag.label}
              variants={item}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative p-4 rounded-xl border cursor-default group"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Disconnected indicator */}
              {i !== 0 && (
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2"
                  style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
                />
              )}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${frag.color}14` }}
              >
                <frag.icon size={18} style={{ color: frag.color }} />
              </div>
              <p
                className="text-sm font-medium leading-tight"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {frag.label}
              </p>
              <div
                className="mt-2 text-xs opacity-50"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                Siloed
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow to solution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-medium"
            style={{ background: 'var(--accent-soft)', borderColor: 'var(--border-accent)', color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            ELVIE connects them all in one clinical intelligence workspace
            <ArrowRight size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
