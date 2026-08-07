'use client'

import { notFound, useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import StatusPill from '@/components/StatusPill'
import { projects } from '@/data/projects'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.5)'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'

const EASE = [0.16, 1, 0.3, 1] as const

function Section({ label, heading, body, delay }: { label: string; heading: string; body: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <span
        className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
        style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
      >
        {label}
      </span>
      <h2
        className="font-mono font-semibold mb-4"
        style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', color: FG, letterSpacing: '-0.02em' }}
      >
        {heading}
      </h2>
      <p className="font-mono text-sm leading-relaxed" style={{ color: FG_MUTED }}>
        {body}
      </p>
    </motion.div>
  )
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <main className="relative bg-[#171717] min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-36">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link
            href="/#projects"
            className="font-mono text-xs inline-flex items-center gap-2 mb-12 transition-colors duration-300"
            style={{ color: FG_DIM }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = FG_DIM }}
          >
            ← Back
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="mb-20 flex flex-col gap-4 items-start"
        >
          <h1
            className="font-mono font-semibold leading-tight"
            style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: FG, letterSpacing: '-0.03em' }}
          >
            {project.title}
          </h1>
          <StatusPill status={project.status} />
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-16">
          <Section label="Why" heading="Why" body={project.why} delay={0.1} />

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,227,0.06)' }} />

          <Section label="How" heading="How" body={project.how} delay={0.18} />

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,227,0.06)' }} />

          <Section label="Results" heading="Results" body={project.results} delay={0.26} />
        </div>
      </div>
    </main>
  )
}
