'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import StatusPill from '@/components/StatusPill'
import Carousel from '@/components/Carousel'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.5)'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.06)'

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div
      className="p-[6px] rounded-[2rem] h-full group transition-all duration-500"
      style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
    >
      <div
        className="rounded-[calc(2rem-6px)] h-full flex flex-col overflow-hidden"
        style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
      >
        {/* Carousel */}
        <Carousel images={p.images} gradient={p.gradient} />

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 gap-2.5">
          <div className="flex flex-wrap gap-1">
            {p.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full font-mono text-[8px]"
                style={{ color: FG_DIM, background: 'rgba(255,255,227,0.04)', border: `1px solid rgba(255,255,227,0.06)` }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-start justify-between gap-2">
            <h3 className="font-mono font-semibold leading-snug text-[0.88rem]" style={{ color: FG }}>
              {p.title}
            </h3>
            <StatusPill status={p.status} />
          </div>

          {p.caption && (
            <p className="font-mono text-[0.78rem] leading-relaxed" style={{ color: FG }}>
              {p.caption}
            </p>
          )}

          {p.description && (
            <p className="font-mono leading-relaxed flex-1 text-[0.72rem]" style={{ color: FG_MUTED }}>
              {p.description}
            </p>
          )}

          <div className="mt-auto pt-3 flex items-center gap-3" style={{ borderTop: `1px solid rgba(255,255,227,0.05)` }}>
            <Link
              href={`/projects/${p.slug}`}
              className="font-mono inline-flex items-center gap-1.5 text-[10px] font-semibold transition-all duration-300 group-hover:gap-2.5"
              style={{ color: ACCENT }}
            >
              Case Study
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] transition-all duration-300"
                style={{ background: 'rgba(170,186,153,0.1)', border: '1px solid rgba(170,186,153,0.2)' }}
              >
                →
              </span>
            </Link>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono inline-flex items-center gap-1.5 text-[10px] font-semibold transition-all duration-300"
                style={{ color: FG_DIM }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = FG }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = FG_DIM }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-36 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 flex items-end justify-between flex-wrap gap-4"
      >
        <div>
          <span
            className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
            style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
          >
            Projects
          </span>
          <h2
            className="font-mono font-semibold"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: FG, letterSpacing: '-0.03em' }}
          >
            Selected Work
          </h2>
        </div>
        <a
          href="#contact"
          className="font-mono text-sm flex items-center gap-1.5 transition-colors duration-300"
          style={{ color: FG_DIM }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = FG_DIM }}
        >
          All projects <span>→</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.75, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
