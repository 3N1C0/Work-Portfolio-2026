'use client'

import { motion } from 'framer-motion'

const FG = '#FFFFE3'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.06)'

const academic = {
  gpa: '3.8 / 4.0',
  courses: [
    'Calculus I, II, III',
    'Linear Algebra',
    'Differential Equations',
    'Physics I, II, III',
    'Electronic Circuits',
    'Data Structures & Algorithms',
    'Machine Learning',
    'Java Programming'
  ],
  extracurriculars: [
    'Maroon and Grey Student Ambassador',
    'Redlands Robotics and Drone Club',
    'SEDS (Students for the Exploration and Development of Space) Redlands Chapter',
    'Town & Gown Scholarship Recipient',
    'Hispanic Student Leader',
    'Spring 2026 Bulldog Trek Participant'
  ],
}

const EASE = [0.16, 1, 0.3, 1] as const

export default function Academics() {
  return (
    <section id="academics" className="py-36 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-20"
      >
        <span
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
          style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
        >
          Academics
        </span>
        <h2
          className="font-mono font-semibold"
          style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: FG, letterSpacing: '-0.03em' }}
        >
          Academics
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* GPA */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0, ease: EASE }}
        >
          <div
            className="p-[6px] rounded-[1.75rem] h-full"
            style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
          >
            <div
              className="rounded-[calc(1.75rem-6px)] p-6 h-full flex flex-col gap-3"
              style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold self-start"
                style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
              >
                GPA
              </span>
              <p
                className="font-mono font-bold leading-none"
                style={{ fontSize: 'clamp(2.8rem,6vw,4.2rem)', color: FG, letterSpacing: '-0.04em' }}
              >
                {academic.gpa}
              </p>
              <p className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: FG_DIM }}>
                Cumulative · 4.0 Scale
              </p>
            </div>
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          <div
            className="p-[6px] rounded-[1.75rem] h-full"
            style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
          >
            <div
              className="rounded-[calc(1.75rem-6px)] p-6 h-full flex flex-col gap-4"
              style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold self-start"
                style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
              >
                Coursework
              </span>
              <ul className="flex flex-col gap-2.5">
                {academic.courses.map((course) => (
                  <li key={course} className="flex items-baseline gap-2.5">
                    <span className="flex-shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: ACCENT, marginTop: '0.35em' }} />
                    <span className="font-mono font-bold text-[0.8rem] leading-snug" style={{ color: FG }}>
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          <div
            className="p-[6px] rounded-[1.75rem] h-full"
            style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
          >
            <div
              className="rounded-[calc(1.75rem-6px)] p-6 h-full flex flex-col gap-4"
              style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold self-start"
                style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
              >
                Extracurriculars
              </span>
              <ul className="flex flex-col gap-2.5">
                {academic.extracurriculars.map((item) => (
                  <li key={item} className="flex items-baseline gap-2.5">
                    <span className="flex-shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: ACCENT, marginTop: '0.35em' }} />
                    <span className="font-mono font-bold text-[0.8rem] leading-snug" style={{ color: FG }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
