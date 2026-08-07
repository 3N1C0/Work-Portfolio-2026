'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#conferences', label: 'Conferences' },
  { href: '#projects', label: 'Projects' },
  { href: '#academics', label: 'Academics' },
  { href: '#skills', label: 'Skills' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 inset-x-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center gap-6 px-5 py-2.5 rounded-full transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(23,23,23,0.9)' : 'rgba(255,255,227,0.04)',
            backdropFilter: 'blur(20px)',
            border: scrolled
              ? '1px solid rgba(255,255,227,0.08)'
              : '1px solid rgba(255,255,227,0.06)',
          }}
        >
          <span className="font-mono font-bold text-sm tracking-tight" style={{ color: '#FFFFE3' }}>
             <span style={{ color: '#AABA99' }}></span>
          </span>

          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-300"
                style={{ color: 'rgba(255,255,227,0.45)' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFE3' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,227,0.45)' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-300"
            style={{
              color: '#AABA99',
              background: 'rgba(170,186,153,0.08)',
              border: '1px solid rgba(170,186,153,0.2)',
            }}
          >
            Contact Me
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-[9px]"
              style={{ background: 'rgba(170,186,153,0.2)' }}
            >
              ↗
            </span>
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-5 h-5"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px origin-center"
              style={{ background: '#FFFFE3' }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px origin-center"
              style={{ background: '#FFFFE3' }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px origin-center"
              style={{ background: '#FFFFE3' }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1"
            style={{ background: 'rgba(23,23,23,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono font-light uppercase py-3"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
                  color: 'rgba(255,255,227,0.5)',
                  letterSpacing: '-0.03em',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFE3' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,227,0.5)' }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
