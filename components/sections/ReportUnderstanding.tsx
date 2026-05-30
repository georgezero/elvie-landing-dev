'use client';

import { motion } from 'framer-motion';
import { FileSearch, Brain, Target, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    label: 'Finding Extraction',
    desc: 'AI identifies and structures clinical findings automatically',
    color: '#7c3aed',
  },
  {
    icon: Brain,
    label: 'Anatomy & Disease',
    desc: 'Findings categorized by anatomy, modality, and clinical significance',
    color: '#059669',
  },
  {
    icon: Target,
    label: 'Navigation Targets',
    desc: 'Each finding linked to the specific series, image, and anatomy',
    color: '#d97706',
  },
];

const sampleFindings = [
  { text: 'Chronic infarct, left thalamus',        anatomy: 'Thalamus',      modality: 'DWI',   urgency: 'moderate', color: '#f59e0b' },
  { text: 'Periventricular white matter changes',  anatomy: 'Periventricular', modality: 'FLAIR', urgency: 'low',      color: '#10b981' },
  { text: 'No acute intracranial abnormality',     anatomy: 'Intracranial',  modality: 'T2',    urgency: 'none',     color: '#64748b' },
  { text: 'Mild cortical atrophy for age',         anatomy: 'Cortex',        modality: 'T1',    urgency: 'low',      color: '#10b981' },
];

export function ReportUnderstanding() {
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
            AI-Powered Report Understanding
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            From Unstructured Report<br />
            to <span style={{ color: 'var(--accent)' }}>Clinical Intelligence</span>
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            ELVIE extracts every finding, maps anatomy and disease, and creates direct
            links to the images that matter.
          </p>
        </motion.div>

        {/* Pipeline steps */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-16 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 flex flex-col items-center sm:items-start gap-3 p-5 rounded-xl border relative"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${step.color}14` }}
              >
                <step.icon size={20} style={{ color: step.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                  {step.label}
                </p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  {step.desc}
                </p>
              </div>
              <div
                className="absolute -top-3 left-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border"
                style={{
                  background: 'var(--bg-surface)',
                  borderColor: step.color,
                  color: step.color,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={14}
                  className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10"
                  style={{ color: 'var(--text-muted)' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Findings output demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border overflow-hidden max-w-3xl mx-auto"
          style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="flex items-center justify-between px-5 py-3 border-b"
            style={{ background: 'var(--bg-surface-2)', borderColor: 'var(--border)' }}
          >
            <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
              EXTRACTED FINDINGS — CT BRAIN WITH CONTRAST
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full border"
              style={{ background: 'var(--status-bg)', borderColor: 'var(--status-border)', color: 'var(--status-text)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}
            >
              4 findings
            </span>
          </div>
          <div className="p-4 space-y-3" style={{ background: 'var(--bg-card)' }}>
            {sampleFindings.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.color }} />
                <span className="flex-1 text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                  {f.text}
                </span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded border"
                    style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}
                  >
                    {f.anatomy}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: `${f.color}14`, color: f.color, fontFamily: 'var(--font-mono)', fontSize: '10px' }}
                  >
                    {f.modality}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
