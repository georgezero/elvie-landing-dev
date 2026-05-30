'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Zap, Globe, Code2, BookOpen, ArrowRight } from 'lucide-react';

const agents = [
  { name: 'Claude',    color: '#c96442' },
  { name: 'Codex',     color: '#10b981' },
  { name: 'OpenClaw',  color: '#3b82f6' },
  { name: 'Hermes',    color: '#8b5cf6' },
  { name: 'Pi',        color: '#f59e0b' },
  { name: 'Any MCP Agent', color: '#64748b' },
];

const mcpTools = [
  { category: 'Study Control',  tools: ['open_study_by_accession', 'open_study_by_patient', 'get_series_catalog'] },
  { category: 'Viewport',       tools: ['load_view', 'set_layout', 'set_active_viewport'] },
  { category: 'Navigation',     tools: ['navigate_to_image', 'scroll_viewport', 'cine_viewport'] },
  { category: 'Display',        tools: ['set_window_level', 'zoom_viewport', 'pan_viewport', 'reset_viewport'] },
  { category: 'Playbooks',      tools: ['execute_playbook', 'run_playbook', 'list_playbooks'] },
];

const integrationModes = [
  {
    icon: Globe,
    title: 'MCP Server',
    desc: 'Connect any MCP-compatible agent in one line. Full typed tool catalog with docstrings — no HTTP wrangling.',
    code: `# Claude Code CLI
claude mcp add elvie --transport http \\
  http://your-elvie:8000/mcp/`,
    color: '#0891b2',
  },
  {
    icon: Code2,
    title: 'REST API',
    desc: 'Direct HTTP control for custom agents and scripts. Structured JSON with full command history and session state.',
    code: `POST /commands
{
  "type": "command",
  "payload": {
    "command": "navigate_to_image",
    "params": { "image_number": 19,
                "series_description": "DWI" }
  }
}`,
    color: '#7c3aed',
  },
  {
    icon: BookOpen,
    title: 'Playbooks',
    desc: 'Sequence multi-step agent workflows as reusable YAML playbooks. Run inline or save and reuse.',
    code: `steps:
  - command: open_study_by_accession
    params: { accession: "{{accession}}" }
  - command: load_view
    params: { layout: "2x2" }
  - command: set_window_level
    params: { preset: brain }`,
    color: '#d97706',
  },
];

export function AgenticPlatform() {
  const { theme } = useTheme();
  const isDark = theme === 'command' || theme === 'atlas' || theme === 'thermal' || theme === 'surgical' || theme === 'oncall' || theme === 'signal';

  return (
    <section
      id="agentic"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Subtle background accent for dark themes */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,212,232,0.03) 0%, transparent 70%)' }} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
            style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', color: 'var(--chip-text)', fontFamily: 'var(--font-mono)' }}
          >
            <Zap size={12} />
            Agentic Platform
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            The First Fully Agentic<br />
            <span style={{ color: 'var(--accent)' }}>PACS Platform</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            ELVIE exposes the full imaging workspace as structured tools any AI agent can
            call — viewer control, study navigation, window level, cine, layout, playbooks.
            Connect Claude, Codex, OpenClaw, Hermes, Pi, or any MCP-compatible agent and let
            it drive the PACS directly.
          </p>
        </motion.div>

        {/* Agent badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          <span className="text-xs mr-2 self-center" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            CONNECT YOUR AGENT:
          </span>
          {agents.map(a => (
            <span
              key={a.name}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                background: `${a.color}12`,
                borderColor: `${a.color}30`,
                color: a.color,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {a.name}
            </span>
          ))}
        </motion.div>

        {/* Three integration modes */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {integrationModes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              {/* Card header */}
              <div
                className="px-5 py-4 border-b"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${mode.color}15` }}
                >
                  <mode.icon size={18} style={{ color: mode.color }} />
                </div>
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                >
                  {mode.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {mode.desc}
                </p>
              </div>
              {/* Code block */}
              <div
                className="p-4 overflow-x-auto"
                style={{ background: isDark ? '#020609' : '#0f172a' }}
              >
                <pre
                  className="text-xs leading-relaxed whitespace-pre min-w-0"
                  style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', overflowX: 'auto' }}
                >
                  <code>{mode.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MCP Tool catalog preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="flex items-center justify-between px-5 py-3.5 border-b"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                ELVIE MCP TOOL CATALOG
              </span>
            </div>
            <span
              className="text-xs px-2 py-1 rounded-lg border"
              style={{ background: 'var(--status-bg)', borderColor: 'var(--status-border)', color: 'var(--status-text)', fontFamily: 'var(--font-mono)' }}
            >
              20+ tools
            </span>
          </div>
          <div
            className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
            style={{ background: 'var(--bg-card)' }}
          >
            {mcpTools.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <p
                  className="text-xs font-bold mb-2 uppercase tracking-wider"
                  style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
                >
                  {cat.category}
                </p>
                <div className="space-y-1">
                  {cat.tools.map(t => (
                    <div
                      key={t}
                      className="text-xs px-2 py-1 rounded border"
                      style={{
                        background: 'var(--bg-surface)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div
            className="px-5 py-3 border-t flex items-center justify-between"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <span className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Accessible via MCP (StreamableHTTP) and REST API
            </span>
            <a
              href="#cta"
              className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
            >
              Connect your agent <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
