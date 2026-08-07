'use client'

import { motion } from 'framer-motion'

const FG = '#FFFFE3'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.06)'

const groups = [
  {
    category: 'Mechanical Engineering',
    glyph: '⚙',

    skills: ['SolidWorks', 'Onshape', 'Siemens NX', 'Inventor','AutoCAD','FEA', '3D Printing', 'CNC Milling', 'Laser Cutting'],
  },
  {
    category: 'Programming',
    glyph: '</>',
    skills: ['Python', 'C++', 'JavaScript', 'ROS2'],
  },
  {
    category: 'Data Science & ML',
    glyph: '</>',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Jupyter'],
  },
  {
    category: 'Tools & Platforms',
    glyph: '◻',
    skills: ['Git / GitHub', 'Linux', 'LaTeX', 'VS Code', 'Claude Code', 'Obsidian'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-36 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
          style={{ color: ACCENT, border: '1px solid rgba(170,186,153,0.22)', background: 'rgba(170,186,153,0.06)' }}
        >
          Expertise
        </span>
        <h2 className="font-mono font-semibold" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: FG, letterSpacing: '-0.03em' }}>
          Technical Skills
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {groups.map((g) => (
          <motion.div key={g.category} variants={card}>
            <div
              className="p-[6px] rounded-[2rem] h-full transition-all duration-500"
              style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
            >
              <div
                className="rounded-[calc(2rem-6px)] p-7 h-full"
                style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-base select-none" style={{ color: 'rgba(170,186,153,0.28)' }}>{g.glyph}</span>
                  <h3 className="font-mono font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '0.78rem', color: FG }}>
                    {g.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                      className="px-3 py-1.5 rounded-full font-mono text-[11px] font-medium transition-colors duration-300 cursor-default"
                      style={{
                        color: FG_DIM,
                        background: 'rgba(255,255,227,0.04)',
                        border: `1px solid rgba(255,255,227,0.07)`,
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = FG_DIM }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
