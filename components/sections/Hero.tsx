'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: 'var(--hero-bg)' }}
    >
      {/* Background texture */}
      {theme === 'clinical' && <DotGrid />}
      {(theme === 'command' || theme === 'atlas') && <StarField />}
      {theme === 'atlas' && <AtlasNebula />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <HeroBadge theme={theme} />

            <h1
              className="mt-4 leading-[1.08] tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              }}
            >
              {theme === 'atlas' ? (
                <>Medical Imaging<br />
                  <em style={{ color: 'var(--accent)' }}>Meets Clinical</em><br />
                  Intelligence
                </>
              ) : theme === 'command' ? (
                <>Medical Imaging<br />
                  <span style={{ color: 'var(--accent)', display: 'inline-block' }}>
                    Meets Clinical<br />Intelligence
                  </span>
                </>
              ) : (
                <>Medical Imaging<br />
                  Meets Clinical<br />
                  <span style={{ color: 'var(--accent)' }}>Intelligence</span>
                </>
              )}
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              One workspace for imaging, reports, documents, and AI. ELVIE helps
              medical providers get from findings to clinical understanding — faster.
            </p>
            <p
              className="mt-3 text-sm leading-relaxed max-w-xl"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              Connect any AI agent — Claude, Codex, OpenClaw, Hermes, Pi — directly to the
              imaging workspace. Drive the viewer, navigate studies, run clinical workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#cta'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  boxShadow: theme === 'command' ? '0 0 24px rgba(0,212,232,0.3)' : 'var(--shadow-sm)',
                }}
              >
                Request Access
                <ArrowRight size={16} />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_VIEWER_URL ?? '#cta'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:opacity-80 active:scale-95"
                style={{
                  borderColor: 'var(--border-accent)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-body)',
                  background: 'var(--accent-soft)',
                }}
              >
                <Play size={14} />
                Watch Demo
              </a>
            </div>

            <HeroStats />
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center"
          >
            {(theme === 'clinical' || theme === 'oncall') && <ClinicalHeroVisual />}
            {theme === 'command' && <CommandHeroVisual />}
            {(theme === 'atlas' || theme === 'signal') && <AtlasHeroVisual />}
            {theme === 'shared'  && <SharedHeroVisual />}
            {theme === 'thermal' && <ThermalHeroVisual />}
            {theme === 'surgical' && <SurgicalHeroVisual />}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}

/* ── Badge ─────────────────────────────────────────────────────────────── */
function HeroBadge({ theme }: { theme: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="flex flex-wrap gap-2"
    >
      {/* Agentic callout — primary badge */}
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
        style={{
          background: 'var(--accent)',
          borderColor: 'var(--accent)',
          color: '#ffffff',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        First Fully Agentic PACS Platform
      </span>
      {/* Theme descriptor */}
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
        style={{
          background: 'var(--badge-bg)',
          borderColor: 'var(--border-accent)',
          color: 'var(--badge-text)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {{
          clinical: 'Clinical Intelligence Agent',
          command:  'On-Call Clinical Intelligence Agent',
          signal:   'Signal — Clinical Intelligence Agent',
          atlas:    'Signal Atlas — Clinical Intelligence Agent',
          shared:   'Built for Provider Collaboration',
          thermal:  'Thermal Imaging Intelligence',
          surgical: 'Surgical Precision Platform',
          oncall:   'Clinical Dark — Intelligence Agent',
        }[theme]}
      </span>
    </motion.div>
  );
}

/* ── Stats ─────────────────────────────────────────────────────────────── */
function HeroStats() {
  const stats = [
    { value: '3.2M', label: 'Studies' },
    { value: '750K', label: 'Patients' },
    { value: '29K',  label: 'Providers' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 pt-8 border-t flex flex-wrap gap-8"
      style={{ borderColor: 'var(--section-divider)' }}
    >
      {stats.map(s => (
        <div key={s.value}>
          <div
            className="text-2xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          >
            {s.value}
          </div>
          <div
            className="text-sm mt-0.5"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Background elements ────────────────────────────────────────────────── */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  );
}

function StarField() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 60 }, (_, i) => (
        <circle
          key={i}
          cx={`${(i * 1.618 * 37) % 100}%`}
          cy={`${(i * 1.414 * 23) % 100}%`}
          r={i % 5 === 0 ? 1.5 : 0.8}
          fill="white"
          opacity={0.08 + (i % 4) * 0.04}
        />
      ))}
    </svg>
  );
}

function AtlasNebula() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #818cf8, transparent)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CLINICAL PRECISION HERO VISUAL
   Browser window mockup with three-panel workspace
   ══════════════════════════════════════════════════════════════════════════ */
function ClinicalHeroVisual() {
  return (
    <motion.div
      style={{ filter: 'drop-shadow(0 32px 48px rgba(15,23,42,0.14))' }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="w-full max-w-lg"
    >
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#e2e8f0', background: '#fff' }}>
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 rounded-md px-3 py-1 text-xs" style={{ background: '#e2e8f0', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
            elvie.app/study/CT-20240315
          </div>
        </div>
        {/* Three-panel layout */}
        <div className="flex h-72">
          {/* Viewer panel */}
          <div className="flex-1 relative flex items-center justify-center" style={{ background: '#0a0a0a', borderRight: '1px solid #1a2a3a' }}>
            <CTViewerMock />
            <div className="absolute top-2 left-2 flex gap-1">
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#0891b2', color: '#fff', fontFamily: 'monospace', fontSize: '10px' }}>CT BRAIN</span>
            </div>
            <div className="absolute bottom-2 left-2 text-xs" style={{ color: '#4a6a84', fontFamily: 'monospace', fontSize: '10px' }}>128 slices · W:80 L:40</div>
          </div>
          {/* Report panel */}
          <div className="w-40 p-3 overflow-hidden" style={{ background: '#ffffff', borderRight: '1px solid #e2e8f0' }}>
            <p className="text-xs font-semibold mb-2" style={{ color: '#0f172a', fontFamily: 'var(--font-mono)' }}>FINDINGS</p>
            {[
              { label: 'Chronic infarct', tag: 'MOD', color: '#f59e0b' },
              { label: 'WM changes', tag: 'LOW', color: '#10b981' },
              { label: 'No acute findings', tag: '—', color: '#94a3b8' },
            ].map(f => (
              <div key={f.label} className="mb-2 p-1.5 rounded-md border" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
                <div className="text-xs leading-tight mb-1" style={{ color: '#334155', fontFamily: 'var(--font-body)', fontSize: '9px' }}>{f.label}</div>
                <span className="text-xs font-bold" style={{ color: f.color, fontSize: '8px', fontFamily: 'monospace' }}>{f.tag}</span>
              </div>
            ))}
          </div>
          {/* AI chat panel */}
          <div className="w-32 p-3 flex flex-col" style={{ background: '#f8fafc' }}>
            <p className="text-xs font-semibold mb-2" style={{ color: '#0891b2', fontFamily: 'var(--font-mono)' }}>AI CHAT</p>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              {[
                { role: 'user', text: 'Key findings?' },
                { role: 'ai',   text: 'Left thalamic infarct, chronic phase...' },
              ].map((m, i) => (
                <div key={i}
                  className="px-2 py-1.5 rounded-lg text-xs leading-snug"
                  style={{
                    background: m.role === 'ai' ? '#e0f2fe' : '#fff',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    fontFamily: 'var(--font-body)',
                    fontSize: '8px',
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div
              className="mt-2 px-2 py-1 rounded border text-xs"
              style={{ borderColor: '#bae6fd', background: '#fff', color: '#94a3b8', fontSize: '8px', fontFamily: 'var(--font-mono)' }}
            >
              Ask about findings…
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   DARK COMMAND CENTER HERO VISUAL
   PACS workstation with glowing CT scan
   ══════════════════════════════════════════════════════════════════════════ */
function CommandHeroVisual() {
  return (
    <motion.div
      className="relative w-full max-w-lg"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
    >
      {/* Monitor glow */}
      <div className="absolute -inset-8 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(ellipse, #00d4e8, transparent)' }} />

      {/* Monitor frame */}
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{ borderColor: 'rgba(0,212,232,0.2)', background: '#040810', boxShadow: '0 0 60px rgba(0,212,232,0.08), inset 0 1px 0 rgba(0,212,232,0.1)' }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ background: '#070e1a', borderColor: 'rgba(0,212,232,0.15)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00d4e8' }} />
            <span className="text-xs font-mono" style={{ color: '#00d4e8', fontFamily: 'monospace', letterSpacing: '0.1em' }}>ELVIE / DICOM VIEWER</span>
          </div>
          <div className="flex gap-3">
            {['LOADED', 'ANALYZED', 'READY'].map(s => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full border font-mono"
                style={{ borderColor: 'rgba(0,212,232,0.3)', color: '#00d4e8', background: 'rgba(0,212,232,0.06)', fontSize: '9px' }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Main viewport */}
        <div className="relative h-72 flex items-center justify-center" style={{ background: '#050912' }}>
          <CommandCTScan />

          {/* Measurement overlays */}
          <div className="absolute top-4 left-4 text-xs font-mono space-y-1" style={{ color: '#00d4e8', fontSize: '10px', fontFamily: 'monospace' }}>
            <div>W: 80 / L: 40</div>
            <div>FOV: 24.0 cm</div>
            <div>1.25 mm/slice</div>
          </div>

          <div className="absolute top-4 right-4 text-xs font-mono space-y-1 text-right" style={{ color: '#4a6a84', fontSize: '10px', fontFamily: 'monospace' }}>
            <div style={{ color: '#00d4e8' }}>Ser: 2  Im: 19</div>
            <div>CT BRAIN</div>
            <div>AXIAL</div>
          </div>

          {/* Finding annotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg border"
            style={{ background: 'rgba(0,212,232,0.06)', borderColor: 'rgba(0,212,232,0.2)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f59e0b' }} />
            <span className="text-xs font-mono" style={{ color: '#e2f0ff', fontSize: '10px', fontFamily: 'monospace' }}>
              AI › Chronic infarct, left thalamus detected
            </span>
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-t"
          style={{ background: '#070e1a', borderColor: 'rgba(0,212,232,0.12)' }}
        >
          <span className="text-xs font-mono" style={{ color: '#4a6a84', fontFamily: 'monospace', fontSize: '10px' }}>
            128 SLICES · 1.25mm · AXIAL
          </span>
          <span className="text-xs font-mono" style={{ color: '#00d4e8', fontFamily: 'monospace', fontSize: '10px' }}>
            AI READY ●
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CTViewerMock() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* CT brain cross-section */}
      {[55, 48, 40, 30, 20, 10].map((r, i) => (
        <circle key={i} cx="60" cy="60" r={r}
          fill="none"
          stroke={`rgba(${70 + i * 20}, ${80 + i * 18}, ${90 + i * 15}, 0.8)`}
          strokeWidth="1"
        />
      ))}
      {/* Brain tissue fill */}
      <circle cx="60" cy="60" r="48" fill="rgba(30,40,50,0.9)" />
      <circle cx="60" cy="60" r="40" fill="rgba(45,55,65,0.8)" />
      {/* Thalamic region highlight */}
      <ellipse cx="54" cy="58" rx="5" ry="4" fill="rgba(0,180,200,0.25)" stroke="rgba(0,212,232,0.5)" strokeWidth="0.5" />
      {/* Measurement crosshair */}
      <line x1="60" y1="30" x2="60" y2="90" stroke="rgba(0,212,232,0.3)" strokeWidth="0.5" />
      <line x1="30" y1="60" x2="90" y2="60" stroke="rgba(0,212,232,0.3)" strokeWidth="0.5" />
    </svg>
  );
}

function CommandCTScan() {
  return (
    <div className="relative">
      <svg width="220" height="220" viewBox="0 0 220 220">
        {/* Outer glow rings */}
        <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(0,212,232,0.04)" strokeWidth="1" />
        <circle cx="110" cy="110" r="90" fill="none" stroke="rgba(0,212,232,0.06)" strokeWidth="1" />
        {/* Brain anatomy layers */}
        <circle cx="110" cy="110" r="80" fill="rgba(8,18,32,0.95)" stroke="rgba(0,212,232,0.12)" strokeWidth="1" />
        <circle cx="110" cy="110" r="70" fill="rgba(12,24,40,0.9)" stroke="rgba(30,58,95,0.5)" strokeWidth="0.5" />
        <circle cx="110" cy="110" r="58" fill="rgba(18,32,52,0.85)" stroke="rgba(30,58,95,0.4)" strokeWidth="0.5" />
        <circle cx="110" cy="110" r="44" fill="rgba(22,38,58,0.8)" />
        <circle cx="110" cy="110" r="32" fill="rgba(28,44,64,0.75)" />
        {/* Tissue density variations */}
        <ellipse cx="96" cy="106" rx="12" ry="10" fill="rgba(35,50,70,0.9)" />
        <ellipse cx="124" cy="106" rx="12" ry="10" fill="rgba(35,50,70,0.9)" />
        {/* Ventricles */}
        <path d="M100 104 Q110 98 120 104 Q114 112 106 112 Z" fill="rgba(8,16,28,0.95)" />
        {/* Thalamic infarct highlight */}
        <ellipse cx="103" cy="108" rx="7" ry="5.5"
          fill="rgba(0,150,170,0.2)"
          stroke="rgba(0,212,232,0.6)"
          strokeWidth="1"
          strokeDasharray="2 1"
        />
        <motion.ellipse cx="103" cy="108" rx="7" ry="5.5"
          fill="none"
          stroke="rgba(0,212,232,0.4)"
          strokeWidth="1.5"
          animate={{ opacity: [0.4, 1, 0.4], r: [7, 9, 7] } as never}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        {/* Scan line effect */}
        <motion.line
          x1="30" y1="110" x2="190" y2="110"
          stroke="rgba(0,212,232,0.15)" strokeWidth="1"
          animate={{ y1: [30, 190, 30], y2: [30, 190, 30] } as never}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
        {/* Crosshair */}
        <line x1="110" y1="20" x2="110" y2="200" stroke="rgba(0,212,232,0.12)" strokeWidth="0.5" />
        <line x1="20" y1="110" x2="200" y2="110" stroke="rgba(0,212,232,0.12)" strokeWidth="0.5" />
        {/* Corner markers */}
        {[[30,30],[190,30],[30,190],[190,190]].map(([x,y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x + (i%2===0?8:-8)} y2={y} stroke="rgba(0,212,232,0.3)" strokeWidth="1" />
            <line x1={x} y1={y} x2={x} y2={y + (i<2?8:-8)} stroke="rgba(0,212,232,0.3)" strokeWidth="1" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SIGNAL ATLAS HERO VISUAL
   Animated orbital constellation diagram
   ══════════════════════════════════════════════════════════════════════════ */
const ATLAS_NODES = [
  { label: 'CT',        color: '#00d4e8', angle: 0 },
  { label: 'MRI',       color: '#3b82f6', angle: 45 },
  { label: 'Report',    color: '#f59e0b', angle: 90 },
  { label: 'Pathology', color: '#a78bfa', angle: 135 },
  { label: 'Labs',      color: '#34d399', angle: 180 },
  { label: 'Notes',     color: '#fb923c', angle: 225 },
  { label: 'Prior',     color: '#f472b6', angle: 270 },
  { label: 'AI',        color: '#818cf8', angle: 315 },
];

function AtlasHeroVisual() {
  const cx = 200, cy = 200, orbitR = 145;

  return (
    <motion.div
      className="relative w-full max-w-md"
      style={{ filter: 'drop-shadow(0 0 40px rgba(129,140,248,0.15))' }}
    >
      <svg viewBox="0 0 400 400" className="w-full h-auto">
        {/* Orbit ring */}
        <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="rgba(129,140,248,0.1)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx={cx} cy={cy} r={orbitR * 0.6} fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" strokeDasharray="2 8" />

        {/* Constellation lines from center */}
        {ATLAS_NODES.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + orbitR * Math.cos(rad);
          const ny = cy + orbitR * Math.sin(rad);
          return (
            <line key={i}
              x1={cx} y1={cy} x2={nx} y2={ny}
              stroke={node.color} strokeWidth="0.5" opacity="0.2"
            />
          );
        })}

        {/* Adjacent node connections */}
        {ATLAS_NODES.map((node, i) => {
          const next = ATLAS_NODES[(i + 1) % 8];
          const r1 = (node.angle * Math.PI) / 180;
          const r2 = (next.angle * Math.PI) / 180;
          const x1 = cx + orbitR * Math.cos(r1);
          const y1 = cy + orbitR * Math.sin(r1);
          const x2 = cx + orbitR * Math.cos(r2);
          const y2 = cy + orbitR * Math.sin(r2);
          return (
            <line key={`link-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(129,140,248,0.08)" strokeWidth="0.5"
            />
          );
        })}

        {/* Patient node (center) */}
        <motion.circle cx={cx} cy={cy} r={28}
          fill="rgba(30,27,75,0.8)" stroke="#818cf8" strokeWidth="1.5"
          animate={{ r: [28, 32, 28] } as never}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
        <circle cx={cx} cy={cy} r={18} fill="rgba(30,27,75,0.95)" stroke="rgba(129,140,248,0.4)" strokeWidth="1" />
        <text x={cx} y={cy + 4} textAnchor="middle" fill="#f1f5f9"
          fontSize="10" fontWeight="600" fontFamily="'Outfit', sans-serif">
          PATIENT
        </text>

        {/* Pulse rings */}
        {[44, 58].map((r, i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="rgba(129,140,248,0.15)" strokeWidth="1"
            animate={{ r: [r, r + 12, r], opacity: [0.3, 0, 0.3] } as never}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.8, ease: 'easeOut' }}
          />
        ))}

        {/* Orbital nodes */}
        {ATLAS_NODES.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + orbitR * Math.cos(rad);
          const ny = cy + orbitR * Math.sin(rad);
          const speed = 20 + i * 3;
          return (
            <motion.g key={i}
              animate={{ rotate: 360 } as never}
              transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              <circle cx={nx} cy={ny} r={16} fill="rgba(15,23,41,0.9)" stroke={node.color} strokeWidth="1" opacity="0.9" />
              <circle cx={nx} cy={ny} r={8} fill={node.color} opacity="0.15" />
              <text x={nx} y={ny + 4} textAnchor="middle" fill={node.color}
                fontSize="7.5" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
                {node.label.substring(0, 4)}
              </text>
              {/* Counter-rotation for text readability */}
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${nx} ${ny}`}
                to={`-360 ${nx} ${ny}`}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SHARED REVIEW HERO VISUAL
   Three-person collaboration diagram
   ══════════════════════════════════════════════════════════════════════════ */
function SharedHeroVisual() {
  const personas = [
    { role: 'Radiologist', initial: 'R', color: '#4f46e5', bg: '#ede9fe' },
    { role: 'Physician',   initial: 'P', color: '#0d9488', bg: '#ccfbf1' },
    { role: 'Patient',     initial: 'Pt', color: '#0284c7', bg: '#dbeafe' },
  ];

  return (
    <motion.div
      className="w-full max-w-md"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ borderColor: '#e7e5e4', background: '#fff', boxShadow: '0 24px 56px rgba(0,0,0,0.08)' }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b" style={{ background: '#fafaf9', borderColor: '#e7e5e4' }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: '#1c1917', fontFamily: 'var(--font-display)' }}>
              Shared Review — CT Brain
            </span>
            <div className="flex -space-x-1.5">
              {personas.map(p => (
                <div key={p.role}
                  className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                  style={{ background: p.color, color: '#fff', fontSize: '8px' }}>
                  {p.initial}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workspace preview */}
        <div className="flex h-48">
          {/* Compact viewer */}
          <div className="w-36 flex items-center justify-center" style={{ background: '#0a0a0a' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="rgba(20,30,40,0.95)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />
              <circle cx="50" cy="50" r="34" fill="rgba(28,38,52,0.9)" />
              <circle cx="50" cy="50" r="22" fill="rgba(35,46,60,0.85)" />
              <ellipse cx="44" cy="50" rx="6" ry="4.5" fill="rgba(79,70,229,0.15)" stroke="rgba(79,70,229,0.5)" strokeWidth="0.5" strokeDasharray="1.5 1" />
              <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(79,70,229,0.15)" strokeWidth="0.5" />
              <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(79,70,229,0.15)" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Chat/findings */}
          <div className="flex-1 p-3 flex flex-col justify-between" style={{ background: '#fafaf9' }}>
            <div className="space-y-2">
              {[
                { persona: personas[0], text: 'Left thalamic infarct noted — non-acute' },
                { persona: personas[1], text: 'Correlates with patient\'s memory symptoms' },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold"
                    style={{ background: m.persona.color, fontSize: '7px' }}
                  >
                    {m.persona.initial}
                  </div>
                  <div
                    className="flex-1 px-2.5 py-1.5 rounded-xl text-xs"
                    style={{ background: m.persona.bg, color: '#1c1917', fontFamily: 'var(--font-body)', fontSize: '9px' }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            {/* Input bar */}
            <div
              className="px-3 py-2 rounded-xl border text-xs"
              style={{ borderColor: '#e7e5e4', color: '#78716c', fontFamily: 'var(--font-body)', fontSize: '9px' }}
            >
              Add to shared review…
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-4 py-2 border-t" style={{ borderColor: '#e7e5e4', background: '#f5f5f4' }}>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: '#78716c', fontFamily: 'var(--font-mono)', fontSize: '9px' }}>Timeline</span>
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: '#e7e5e4' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #4f46e5, #0d9488)' }}
                initial={{ width: '0%' }}
                animate={{ width: '65%' }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
            </div>
            <span className="text-xs" style={{ color: '#78716c', fontFamily: 'var(--font-mono)', fontSize: '9px' }}>In progress</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   DEEP TISSUE HERO VISUAL — Thermal / Infrared imaging aesthetic
   ══════════════════════════════════════════════════════════════════════════ */
function ThermalHeroVisual() {
  return (
    <motion.div
      className="w-full max-w-lg"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      style={{ filter: 'drop-shadow(0 0 40px rgba(249,115,22,0.18))' }}
    >
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: 'rgba(249,115,22,0.2)', background: '#050304', boxShadow: '0 0 60px rgba(249,115,22,0.1), inset 0 1px 0 rgba(249,115,22,0.1)' }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ background: '#080406', borderColor: 'rgba(249,115,22,0.15)' }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f97316' }} />
            <span className="text-xs font-mono" style={{ color: '#f97316', fontFamily: 'monospace', letterSpacing: '0.1em', fontSize: '10px' }}>
              THERMAL · IR SCAN · ACTIVE
            </span>
          </div>
          <div className="flex gap-2">
            {['MAX 38.4°', 'MIN 34.1°', 'ΔT 4.3°'].map(s => (
              <span key={s} className="text-xs px-1.5 py-0.5 rounded border font-mono"
                style={{ borderColor: 'rgba(249,115,22,0.2)', color: '#f97316', background: 'rgba(249,115,22,0.06)', fontSize: '9px' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex" style={{ background: '#030204' }}>
          <div className="flex-1 flex items-center justify-center py-6">
            <svg width="200" height="180" viewBox="0 0 200 180">
              <defs>
                <radialGradient id="thermal-core" cx="45%" cy="52%" r="50%">
                  <stop offset="0%"   stopColor="#fecaca" stopOpacity="1" />
                  <stop offset="15%"  stopColor="#ef4444" stopOpacity="1" />
                  <stop offset="30%"  stopColor="#f97316" stopOpacity="1" />
                  <stop offset="45%"  stopColor="#f5c400" stopOpacity="1" />
                  <stop offset="58%"  stopColor="#a8e010" stopOpacity="1" />
                  <stop offset="70%"  stopColor="#08b5a0" stopOpacity="1" />
                  <stop offset="82%"  stopColor="#0a6ebd" stopOpacity="1" />
                  <stop offset="92%"  stopColor="#2d0a5e" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e0033" stopOpacity="1" />
                </radialGradient>
                <filter id="thermal-blur">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>
              <ellipse cx="100" cy="90" rx="78" ry="70" fill="url(#thermal-core)" filter="url(#thermal-blur)" />
              <ellipse cx="100" cy="90" rx="78" ry="70" fill="url(#thermal-core)" opacity="0.7" />
              <motion.ellipse cx="88" cy="88" rx="12" ry="10"
                fill="#fecaca" opacity="0.6"
                animate={{ opacity: [0.4, 0.9, 0.4] } as never}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <line x1="100" y1="10" x2="100" y2="170" stroke="rgba(249,115,22,0.15)" strokeWidth="0.5" />
              <line x1="10" y1="90" x2="190" y2="90" stroke="rgba(249,115,22,0.15)" strokeWidth="0.5" />
              <circle cx="88" cy="88" r="14" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
              <text x="106" y="80" fill="#f97316" fontSize="7" fontFamily="monospace">38.4°C</text>
              <text x="106" y="89" fill="#fbbf24" fontSize="6.5" fontFamily="monospace">ANOMALY</text>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center py-4 px-3 gap-0">
            <span className="text-xs font-mono mb-1" style={{ color: '#f97316', fontSize: '8px' }}>°C</span>
            <div style={{ width: '16px', height: '120px', background: 'linear-gradient(to bottom, #fecaca, #ef4444, #f97316, #f5c400, #a8e010, #08b5a0, #0a6ebd, #2d0a5e, #1e0033)', borderRadius: '3px' }} />
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t" style={{ background: '#080406', borderColor: 'rgba(249,115,22,0.12)' }}>
          <span className="text-xs font-mono" style={{ color: '#7a5040', fontSize: '9px', fontFamily: 'monospace' }}>EMISSIVITY 0.98 · IR BAND 8–14μm</span>
          <span className="text-xs font-mono" style={{ color: '#f97316', fontSize: '9px', fontFamily: 'monospace' }}>AI ANOMALY DETECTED ●</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SURGICAL HERO VISUAL — Operating theatre / bio-monitor aesthetic
   ══════════════════════════════════════════════════════════════════════════ */
function SurgicalHeroVisual() {
  return (
    <motion.div
      className="w-full max-w-lg"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ filter: 'drop-shadow(0 0 40px rgba(163,230,53,0.15))' }}
    >
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: 'rgba(163,230,53,0.18)', background: '#040706', boxShadow: '0 0 60px rgba(163,230,53,0.06), inset 0 1px 0 rgba(163,230,53,0.08)' }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ background: '#060908', borderColor: 'rgba(163,230,53,0.12)' }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#a3e635' }} />
            <span className="text-xs" style={{ color: '#a3e635', fontFamily: "'Chakra Petch', monospace", letterSpacing: '0.12em', fontSize: '10px' }}>
              ELVIE · SURGICAL VIEW · READY
            </span>
          </div>
          <span className="text-xs font-mono" style={{ color: '#3d6b3a', fontSize: '9px' }}>SRG-04 · 09:42:17</span>
        </div>
        <div className="p-4" style={{ background: '#040706' }}>
          <div className="relative rounded-lg overflow-hidden mb-3" style={{ background: '#060908', border: '1px solid rgba(163,230,53,0.12)' }}>
            <svg width="100%" height="150" viewBox="0 0 360 150">
              {Array.from({ length: 9 }, (_, i) => (
                <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="150" stroke="rgba(163,230,53,0.05)" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 4 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 40} x2="360" y2={i * 40} stroke="rgba(163,230,53,0.05)" strokeWidth="0.5" />
              ))}
              <ellipse cx="180" cy="75" rx="110" ry="55" fill="none" stroke="rgba(163,230,53,0.18)" strokeWidth="0.8" />
              <ellipse cx="180" cy="75" rx="82" ry="40" fill="none" stroke="rgba(163,230,53,0.12)" strokeWidth="0.5" />
              <rect x="162" y="62" width="28" height="22" rx="2" fill="rgba(163,230,53,0.06)" stroke="#a3e635" strokeWidth="0.8" />
              <line x1="162" y1="73" x2="190" y2="73" stroke="rgba(163,230,53,0.3)" strokeWidth="0.5" />
              <line x1="176" y1="62" x2="176" y2="84" stroke="rgba(163,230,53,0.3)" strokeWidth="0.5" />
              {[[20,10],[340,10],[20,140],[340,140]].map(([x,y], i) => (
                <g key={i}>
                  <line x1={x} y1={y} x2={x+(i%2===0?12:-12)} y2={y} stroke="rgba(163,230,53,0.4)" strokeWidth="1" />
                  <line x1={x} y1={y} x2={x} y2={y+(i<2?12:-12)} stroke="rgba(163,230,53,0.4)" strokeWidth="1" />
                </g>
              ))}
              <text x="196" y="67" fill="#a3e635" fontSize="7" fontFamily="'Chakra Petch', monospace">ROI</text>
              <text x="196" y="76" fill="#4ade80" fontSize="6" fontFamily="monospace">L.THAL</text>
              <text x="196" y="84" fill="#3d6b3a" fontSize="6" fontFamily="monospace">S2/I19</text>
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'SERIES', value: '2 / 8' },
              { label: 'IMAGE',  value: '19 / 128' },
              { label: 'STATUS', value: 'CHRONIC' },
            ].map(r => (
              <div key={r.label} className="px-2 py-1.5 rounded border" style={{ background: '#060908', borderColor: 'rgba(163,230,53,0.12)' }}>
                <div className="text-xs mb-0.5" style={{ color: '#3d6b3a', fontFamily: "'Chakra Petch', monospace", fontSize: '8px', letterSpacing: '0.08em' }}>{r.label}</div>
                <div className="text-sm font-semibold leading-none" style={{ color: '#a3e635', fontFamily: "'Chakra Petch', monospace" }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t" style={{ background: '#060908', borderColor: 'rgba(163,230,53,0.1)' }}>
          <span className="text-xs" style={{ color: '#3d6b3a', fontFamily: "'Chakra Petch', monospace", fontSize: '9px' }}>CT BRAIN WITH CONTRAST · AXIAL</span>
          <motion.span className="text-xs" style={{ color: '#a3e635', fontFamily: "'Chakra Petch', monospace", fontSize: '9px' }}
            animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            AI ACTIVE
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
