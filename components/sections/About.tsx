'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '3.8', label: 'GPA' },
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Yrs. Exp.' },
  { value: '$3.5k+ Raised', label: 'Club Funds' },
]

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.5)'
const FG_DIM = 'rgba(255,255,227,0.25)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.07)'

export default function About() {
  return (
    <section id="about" className="py-36 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: ACCENT, border: `1px solid rgba(170,186,153,0.22)`, background: 'rgba(170,186,153,0.06)' }}
        >
          About Me
        </span>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono font-light italic leading-[1.15] mb-14"
            style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', color: FG }}
          >
            &ldquo;Maybe you can have{' '}
            <span className="not-italic font-semibold" style={{ color: ACCENT }}>it all.</span>
            &rdquo; Entourage
          </motion.h2>

          <div className="flex gap-8 md:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono font-semibold leading-none mb-1" style={{ fontSize: '2.2rem', color: ACCENT }}>
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-medium" style={{ color: FG_DIM }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-[6px] rounded-[1.75rem]"
            style={{ background: 'rgba(255,255,227,0.03)', border: `1px solid ${BORDER}` }}
          >
            <div
              className="aspect-[16/9] rounded-[calc(1.75rem-6px)] flex items-center justify-center relative overflow-hidden"
              style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
            >
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(170,186,153,0.06), transparent 60%)' }} />
              <span className="font-mono text-xs z-10 tracking-widest" style={{ color: FG_DIM }}>
                [Placeholder]
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="font-mono leading-[1.85] text-[0.88rem]" style={{ color: FG_MUTED }}>
              I'm currently a student enrolled in the dual degree engineering program at the University of Redlands with a passion for building. I will be receiving a B.A. in Physics and Data Science (double major) from Redlands along with a M.S. in Mechanical Engineering from Washington University in St. Louis after everything is all said and done. I am consistently improving my CAD and FEA workflow as I continue my education, and am well versed in Python for data analytics. Recently, I have been experimenting with AI coding tools like Claude Code and Cursor to expand upon my projects software so I can focus on the physical side of things.
            </p>
            <p className="font-mono leading-[1.85] text-[0.88rem]" style={{ color: FG_MUTED }}>
              I'm particularly drawn to either the robotics or aerospace sector (with a mixture of both being my dream scenario), as I want to gain experience in multiple different roles to further develop my design skills and mechanical intuition.
            </p>
            <p className="font-mono leading-[1.85] text-[0.88rem]" style={{ color: FG_MUTED }}>
              I am actively seeking internship and research opportunities for the 2027 year where I can apply my technical skills and leadership experience to real-world challenges at a place looking for someone young to make an impact.
            </p>
            <p className="font-mono leading-[1.85] text-[0.88rem]" style={{ color: FG_MUTED }}>
              Outside of academics and engineering, I love to stay active by running and exercising as I want to live a balanced life. Recently I have taken up gardening as a hobby in my free time to source better ingredients for my meals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
