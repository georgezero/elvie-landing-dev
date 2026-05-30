'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Human-Centered',
    description: 'AI assists; medical providers decide. Every workflow keeps the physician in control of clinical judgment.',
  },
  {
    title: 'AI-Assisted, Not AI-Replaced',
    description: 'Intelligence that amplifies clinical reasoning without supplanting it. The human remains accountable.',
  },
  {
    title: 'Explainable',
    description: 'Every finding has a source. Every navigation has a reason. No black boxes in clinical decision support.',
  },
  {
    title: 'Incremental Adoption',
    description: 'Connect ELVIE to existing PACS, reports, and workflows. No rip-and-replace required.',
  },
  {
    title: 'Browser-First',
    description: 'Full clinical intelligence agent delivered in any modern browser. No install, no VPN, no proprietary hardware.',
  },
  {
    title: 'Open & Extensible',
    description: 'Built on open standards — DICOM, FHIR, REST. Connect your data sources, your AI agents, your workflow.',
  },
];

export function DesignPrinciples() {
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
            Design Principles
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            How We Build<br />
            <span style={{ color: 'var(--accent)' }}>Clinical Intelligence Agent</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border group"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="text-3xl font-bold mb-3 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
              >
                0{i + 1}
              </div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
