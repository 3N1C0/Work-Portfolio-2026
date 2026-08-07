'use client'

import { useState, useRef } from 'react'

const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'

interface CarouselProps {
  images: string[]
  gradient: string
  aspectRatio?: string
}

function isUrl(s: string) {
  return s.startsWith('/') || s.startsWith('http')
}

export default function Carousel({ images, gradient, aspectRatio = '4/3' }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const total = images.length

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setCurrent((c) => (c - 1 + total) % total)
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setCurrent((c) => (c + 1) % total)
  }

  const goTo = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation()
    e.preventDefault()
    setCurrent(idx)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      setCurrent((c) => delta > 0 ? (c - 1 + total) % total : (c + 1) % total)
    }
    touchStartX.current = null
  }

  return (
    <div
      className="relative w-full flex-shrink-0 overflow-hidden group/carousel select-none"
      style={{ aspectRatio, background: gradient }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 40% 40%, rgba(170,186,153,0.08), transparent 70%)' }}
      />

      {/* Slides — stacked, crossfade */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {isUrl(src) ? (
            <img
              src={src}
              alt=""
              draggable={false}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-mono text-[9px] tracking-widest"
                style={{ color: FG_DIM }}
              >
                {src || '[ Image Here ]'}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Controls — only rendered when multiple slides */}
      {total > 1 && (
        <>
          {/* Prev arrow */}
          <button
            onClick={prev}
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(23,23,23,0.8)',
              border: '1px solid rgba(255,255,227,0.1)',
              color: '#FFFFE3',
              backdropFilter: 'blur(4px)',
            }}
            aria-label="Previous image"
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M5.5 1.5L2.5 4.5L5.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(23,23,23,0.8)',
              border: '1px solid rgba(255,255,227,0.1)',
              color: '#FFFFE3',
              backdropFilter: 'blur(4px)',
            }}
            aria-label="Next image"
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M3.5 1.5L6.5 4.5L3.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dot pagination */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 items-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(e, i)}
                onMouseDown={(e) => e.stopPropagation()}
                className="rounded-full transition-all duration-250 cursor-pointer"
                style={{
                  width: i === current ? '14px' : '5px',
                  height: '5px',
                  background: i === current ? ACCENT : 'rgba(255,255,227,0.3)',
                  border: 'none',
                  padding: 0,
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
