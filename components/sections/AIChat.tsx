'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Volume2, MapPin, Zap } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

const PRESET_MESSAGES = [
  'What are the key findings?',
  'Which finding is most clinically important?',
  'Show me the infarct finding.',
  'Summarize this report for a patient.',
];

const RESPONSES: Record<string, { text: string; action?: string }> = {
  'What are the key findings?': {
    text: 'Three primary findings identified:\n\n1. Chronic infarct, left thalamus — non-acute, correlates with reported memory symptoms\n2. Mild periventricular white matter changes — consistent with small vessel disease\n3. No acute intracranial abnormality — reassuring finding\n\nFinding #1 is most clinically significant.',
  },
  'Which finding is most clinically important?': {
    text: 'The left thalamic infarct warrants closest attention. It is non-acute (chronic phase) but clinically relevant given the reported memory symptoms. Recommend:\n— Correlation with prior imaging for interval change\n— Neurology consultation\n— Cardiovascular risk factor review',
  },
  'Show me the infarct finding.': {
    text: 'Opening Series 2, Image 19 — left thalamic region.\n\nThe hypodense area is visible on the DWI sequence. Viewer navigated to finding location.',
    action: 'navigate',
  },
  'Summarize this report for a patient.': {
    text: 'Your brain scan shows a small area of scar tissue in the deep part of your brain (thalamus) from a previous small stroke. This is an old finding and is not causing an emergency. Your doctor will discuss what this means for you and whether any follow-up is needed.',
  },
};

interface Message {
  role: 'user' | 'assistant';
  text: string;
  action?: string;
  id: number;
}

export function AIChat() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'command' || theme === 'atlas' || theme === 'thermal' || theme === 'surgical' || theme === 'oncall';

  const send = (text: string) => {
    if (typing) return;
    const userMsg: Message = { role: 'user', text, id: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      const response = RESPONSES[text] ?? { text: 'I can help you analyze this study. What would you like to know?' };
      setMessages(prev => [...prev, { role: 'assistant', ...response, id: Date.now() + 1 }]);
      setTyping(false);
    }, 900);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <section
      id="ai-chat"
      className="py-24"
      style={{ background: 'var(--bg-surface)' }}
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
              Report-Aware AI Chat
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Ask Anything.<br />
              <span style={{ color: 'var(--accent)' }}>Navigate Anywhere.</span>
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              ELVIE&apos;s AI understands the full clinical context — not just the report text,
              but the imaging, anatomy, and patient story behind each finding.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Try these prompts
              </p>
              {PRESET_MESSAGES.map(prompt => (
                <button
                  key={prompt}
                  onClick={() => send(prompt)}
                  disabled={typing}
                  className="block w-full text-left px-4 py-3 rounded-xl border text-sm transition-all hover:opacity-80 active:scale-98"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span style={{ color: 'var(--accent)', marginRight: 8 }}>›</span>
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {/* Chat header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{
                  background: 'var(--bg-surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--accent)', opacity: 0.9 }}>
                    <Zap size={12} color="white" />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                    ELVIE AI
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--status-bg)', color: 'var(--status-text)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}
                  >
                    Report-aware
                  </span>
                </div>
                <Volume2 size={14} style={{ color: 'var(--text-muted)' }} />
              </div>

              {/* Messages */}
              <div
                ref={scrollContainerRef}
                className="h-56 sm:h-72 overflow-y-auto p-4 space-y-3"
                style={{ background: 'var(--bg-card)' }}
              >
                {messages.length === 0 && (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-sm text-center" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                      Ask about findings, request navigation,<br />or get a patient-friendly summary.
                    </p>
                  </div>
                )}

                <AnimatePresence initial={false}>
                  {messages.map(msg => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                        style={{
                          background: msg.role === 'user'
                            ? 'var(--accent)'
                            : (isDark ? 'rgba(255,255,255,0.05)' : 'var(--bg-surface)'),
                          color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                          borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                          fontFamily: 'var(--font-body)',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {msg.text}
                        {msg.action === 'navigate' && (
                          <div
                            className="mt-2 flex items-center gap-1.5 text-xs"
                            style={{ color: isDark ? '#00d4e8' : '#0891b2', fontFamily: 'var(--font-mono)' }}
                          >
                            <MapPin size={10} />
                            Viewer navigated → S2/I19
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {typing && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div
                        className="px-4 py-3 rounded-2xl flex items-center gap-1"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.05)' : 'var(--bg-surface)',
                          borderRadius: '18px 18px 18px 4px',
                        }}
                      >
                        {[0, 1, 2].map(i => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: 'var(--accent)' }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={endRef} />
              </div>

              {/* Input bar */}
              <div
                className="flex items-center gap-2 p-3 border-t"
                style={{
                  background: 'var(--bg-surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <input
                  type="text"
                  placeholder="Ask about findings, navigation, or clinical context…"
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      send(e.currentTarget.value.trim());
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <button
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: 'var(--accent)' }}
                  onClick={() => {}}
                  aria-label="Send"
                >
                  <Send size={14} color="white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
