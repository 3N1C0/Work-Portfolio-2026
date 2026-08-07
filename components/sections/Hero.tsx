'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SKILL_TAGS = [
  'ROS2', 'Python', 'C++', 'FEA', 'SolidWorks',
  'PyTorch', 'OpenCV', 'KiCAD',
  'TensorFlow', 'Pandas', 'Onshape', 'LaTeX',
]

const HOBBY_TAGS = [
  'Basketball', 'Philosophy', 'Calisthenics', 'Health', 'History'
]

type TagKind = 'skill' | 'hobby'
const ALL_TAGS: { text: string; kind: TagKind }[] = [
  ...SKILL_TAGS.map((t) => ({ text: t, kind: 'skill' as const })),
  ...HOBBY_TAGS.map((t) => ({ text: t, kind: 'hobby' as const })),
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tagRefs = useRef<(HTMLDivElement | null)[]>([])
  const nameRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let active = true

    const init = async () => {
      // Two frames so the browser has laid out and measured everything
      await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())))
      if (!active) return

      const Matter = (await import('matter-js')).default

      const W = container.offsetWidth
      const H = container.offsetHeight

      const dims = tagRefs.current.map((el) => ({
        w: el?.offsetWidth ?? 110,
        h: el?.offsetHeight ?? 42,
      }))

      const engine = Matter.Engine.create({ gravity: { x: 0, y: 0 } })

      // Full-viewport bounce area — pills roam freely across the entire hero
      const wall = { isStatic: true, restitution: 0.92, friction: 0, frictionAir: 0, frictionStatic: 0 }
      Matter.Composite.add(engine.world, [
        Matter.Bodies.rectangle(W / 2, H + 25, W * 3, 50, wall),  // floor
        Matter.Bodies.rectangle(W / 2, -25,    W * 3, 50, wall),  // ceiling
        Matter.Bodies.rectangle(-25,    H / 2, 50, H * 3, wall),  // left
        Matter.Bodies.rectangle(W + 25, H / 2, 50, H * 3, wall),  // right
      ])

      const bodies = dims.map((dim) => {
        const x = Math.random() * (W - dim.w - 40) + dim.w / 2 + 20
        const y = Math.random() * (H - dim.h - 40) * 0.7 + dim.h / 2 + 20
        const b = Matter.Bodies.rectangle(x, y, dim.w, dim.h, {
          restitution: 0.88,
          friction: 0.005,
          frictionAir: 0.003,   // low air drag → pills stay lively longer
        })
        Matter.Body.setVelocity(b, {
          x: (Math.random() - 0.5) * 9,
          y: (Math.random() - 0.5) * 9,
        })
        Matter.Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.05)
        return b
      })
      Matter.Composite.add(engine.world, bodies)

      // Reveal tags
      tagRefs.current.forEach((el) => { if (el) el.style.opacity = '1' })

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect()
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      }
      window.addEventListener('mousemove', onMouseMove)

      const REPEL_R = 160
      const REPEL_F = 0.002
      let lastTime = performance.now()

      const loop = (now: number) => {
        const delta = Math.min(now - lastTime, 33)
        lastTime = now

        const mx = mouseRef.current.x
        const my = mouseRef.current.y

        for (const body of bodies) {
          const dx = body.position.x - mx
          const dy = body.position.y - my
          const dist = Math.hypot(dx, dy)
          if (dist < REPEL_R && dist > 1) {
            const f = REPEL_F * (1 - dist / REPEL_R)
            Matter.Body.applyForce(body, body.position, {
              x: (dx / dist) * f,
              y: (dy / dist) * f,
            })
          }
        }

        Matter.Engine.update(engine, delta)

        bodies.forEach((body, i) => {
          const el = tagRefs.current[i]
          if (!el) return
          const { w, h } = dims[i]
          el.style.transform = `translate3d(${body.position.x - w / 2}px,${body.position.y - h / 2}px,0) rotate(${body.angle}rad)`
        })

        rafRef.current = requestAnimationFrame(loop)
      }

      rafRef.current = requestAnimationFrame(loop)

      cleanupRef.current = () => {
        window.removeEventListener('mousemove', onMouseMove)
        cancelAnimationFrame(rafRef.current)
        Matter.Engine.clear(engine)
        Matter.Composite.clear(engine.world, false)
      }
    }

    init()

    return () => {
      active = false
      cleanupRef.current?.()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ background: '#171717' }}
    >
      {/* Physics tags */}
      {ALL_TAGS.map((tag, i) => (
        <div
          key={i}
          ref={(el) => { tagRefs.current[i] = el }}
          className="absolute top-0 left-0 whitespace-nowrap rounded-full border font-mono pointer-events-none"
          style={{
            // ×0.75 of original double size → 18px font, 10px vertical, 24px horizontal
            fontSize: '18px',
            padding: '10px 24px',
            opacity: 0,
            zIndex: 10,
            transition: 'opacity 0.4s ease',
            // Skill tags: dark bg, green border, ivory text
            // Hobby tags: ivory bg (inverse), dark text
            color:            tag.kind === 'hobby' ? '#171717'              : '#FFFFE3',
            backgroundColor:  tag.kind === 'hobby' ? '#FFFFE3'              : 'rgba(23,23,23,0.9)',
            borderColor:      tag.kind === 'hobby' ? 'rgba(23,23,23,0.18)' : 'rgba(170,186,153,0.38)',
          }}
        >
          {tag.text}
        </div>
      ))}

      {/* Hero name — at bottom, always above physics tags visually (z:2 > z:0, tags z:10 float above both) */}
      <div
        ref={nameRef}
        className="absolute bottom-0 left-0 right-0 px-5 pb-6 md:px-10 md:pb-10"
        style={{ zIndex: 2, pointerEvents: 'auto', userSelect: 'text' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-extrabold uppercase leading-[0.88] w-full"
          style={{
            fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace',
            fontSize: 'clamp(2.8rem, 13vw, 10.5rem)',
            letterSpacing: '-0.05em',
            color: '#FFFFE3',
            pointerEvents: 'auto',
            userSelect: 'text',
          }}
        >
          Elias Nicolas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-mono text-[10px] mt-3 uppercase tracking-[0.28em]"
          style={{ color: '#AABA99' }}
        >
          Mechanical Engineering · Data Science · Physics
        </motion.p>
      </div>
    </section>
  )
}
