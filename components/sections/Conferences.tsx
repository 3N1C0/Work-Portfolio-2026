'use client'

import { motion } from 'framer-motion'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.45)'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.06)'

const conferences = [
  {
    name: 'San Francisco Spring 2026 Bulldog Trek',
    short: 'Spring 2026 Bulldog Trek',
    role: 'Attendee',
    date: 'Feb. 2026',
    location: 'San Francisco, CA',
    description:
      'Visited Stripe, Nixon Peabody, The Rickshaw Shop, Guide Dogs for the Blind, and Marin Community Action. Connected with some cool people and got some great career insight for my future in robotics.',
    glyph: '◇',
  },
  {
    name: 'Spacevision 2025',
    short: '',
    role: 'Attendee',
    date: 'Nov. 2025',
    location: 'Seattle, WA',
    description:
      'Got to meet some of the most influential people in the aerospace sector, connected with peers doing amazing work at other chapters, and got to see a panel regarding the use of robotics in space (my favorite panel of the conference).',
    glyph: '◇',
  },
  {
    name: 'Esri Developer and Technology Summit 2026',
    short: 'Esri DevSummit 2026',
    role: 'Attendee',
    date: 'Mar. 2026',
    location: 'Palm Springs, CA',
    description:
      'Met some talented software engineers and data analysts doing some amazing things in the GIS sector. It was really intriguing to see how Esri products are being utilized from Virtual Reality to Drone Applications as it really broadened my view of GIS as a whole',
    glyph: '◇',
  },
]

export default function Conferences() {
  return (
    <section id="conferences" className="py-36 px-4 max-w-7xl mx-auto">
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
          Conferences
        </span>
        <h2 className="font-mono font-semibold" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: FG, letterSpacing: '-0.03em' }}>
          Academic Presence
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {conferences.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="h-full"
          >
            <div
              className="p-[6px] rounded-[1.75rem] h-full transition-all duration-500"
              style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
            >
              <div
                className="rounded-[calc(1.75rem-6px)] p-6 h-full flex flex-col"
                style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-2xl leading-none select-none" style={{ color: 'rgba(170,186,153,0.22)' }}>
                    {c.glyph}
                  </span>
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      color: c.role === 'Attendee' ? FG_DIM : ACCENT,
                      background: c.role === 'Attendee' ? 'rgba(255,255,227,0.05)' : 'rgba(170,186,153,0.1)',
                    }}
                  >
                    {c.role}
                  </span>
                </div>

                <div className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2" style={{ color: 'rgba(170,186,153,0.5)' }}>
                  {c.short}
                </div>

                <h3 className="font-mono font-semibold leading-snug mb-3 flex-1" style={{ fontSize: '0.82rem', color: FG }}>
                  {c.name}
                </h3>

                <p className="font-mono leading-relaxed mb-5" style={{ fontSize: '0.74rem', color: FG_MUTED }}>
                  {c.description}
                </p>

                <div className="pt-4 flex items-center justify-between" style={{ borderTop: `1px solid rgba(255,255,227,0.05)` }}>
                  <span className="font-mono text-[10px]" style={{ color: FG_DIM }}>{c.date}</span>
                  <span className="font-mono text-[10px]" style={{ color: FG_DIM }}>{c.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
