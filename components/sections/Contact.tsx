'use client'

import { motion } from 'framer-motion'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.45)'
const FG_DIM = 'rgba(255,255,227,0.2)'
const ACCENT = '#AABA99'
const BORDER = 'rgba(255,255,227,0.07)'

const socials = [
  { label: 'GitHub',         href: 'https://github.com/3N1C0',         abbr: 'GH' },
  { label: 'LinkedIn',       href: 'http://www.linkedin.com/in/elias-nicolas-2a98652a2',     abbr: 'LI' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-36 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold mb-6"
          style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
        >
          Contact
        </span>
        <h2
          className="font-mono font-extrabold uppercase leading-none mb-5"
          style={{ fontSize: 'clamp(3rem,9vw,7rem)', letterSpacing: '-0.05em', color: FG }}
        >
          Let&apos;s Work
          <br />
          <span style={{ color: ACCENT }}>Together.</span>
        </h2>
        <p className="font-mono max-w-[38ch] mx-auto leading-relaxed" style={{ fontSize: '0.88rem', color: FG_MUTED }}>
          Open to internship opportunities, research collaborations, and projects.
        </p>
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center mb-12"
      >
        <a
          href="mailto:elias.f.nicolas@gmail.com"
          className="group flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-500"
          style={{
            border: `1px solid ${BORDER}`,
            background: 'rgba(255,255,227,0.025)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(170,186,153,0.3)'
            el.style.background = 'rgba(170,186,153,0.04)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = BORDER
            el.style.background = 'rgba(255,255,227,0.025)'
          }}
        >
          <span className="font-mono tracking-tight transition-colors duration-300" style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: FG }}>
            elias.f.nicolas@gmail.com
          </span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
            style={{ background: 'rgba(170,186,153,0.1)', border: '1px solid rgba(170,186,153,0.2)', color: ACCENT }}
          >
            ↗
          </span>
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300"
            style={{ border: `1px solid rgba(255,255,227,0.07)`, background: 'rgba(255,255,227,0.02)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(170,186,153,0.2)'
              el.style.background = 'rgba(255,255,227,0.04)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,227,0.07)'
              el.style.background = 'rgba(255,255,227,0.02)'
            }}
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300"
              style={{ background: 'rgba(255,255,227,0.06)', border: `1px solid rgba(255,255,227,0.08)`, color: FG_DIM }}
            >
              {s.abbr}
            </span>
            <span className="font-mono transition-colors duration-300" style={{ fontSize: '0.8rem', color: FG_MUTED }}>
              {s.label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Resume */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center mb-36"
      >
        <a
          href="/Resume_Elias_Nicolas_ME.pdf"
          download="Resume_Elias_Nicolas.pdf"
          className="group flex items-center gap-2.5 px-8 py-4 rounded-full font-mono text-sm font-bold transition-all duration-300 active:scale-[0.97]"
          style={{ background: ACCENT, color: '#171717' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#c4d3b3' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ACCENT }}
        >
          Download Resume
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-y-0.5"
            style={{ background: 'rgba(23,23,23,0.12)' }}
          >
            ↓
          </span>
        </a>
      </motion.div>

      {/* Footer */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px]" style={{ borderTop: '1px solid rgba(255,255,227,0.05)', color: FG_DIM }}>
        <span>© 2026 Elias Nicolas · All rights reserved.</span>
      </div>
    </section>
  )
}
