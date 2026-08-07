'use client'

type Status = 'Complete' | 'In Progress' | 'Research' | 'Upcoming'

const STATUS_STYLE: Record<Status, { color: string; bg: string; border: string }> = {
  Complete:      { color: '#AABA99',                bg: 'rgba(170,186,153,0.12)', border: 'rgba(170,186,153,0.35)' },
  'In Progress': { color: '#FFFFE3',                bg: 'rgba(255,255,227,0.08)', border: 'rgba(255,255,227,0.25)' },
  Research:      { color: 'rgba(180,200,240,0.9)',  bg: 'rgba(180,200,240,0.08)', border: 'rgba(180,200,240,0.25)' },
  Upcoming:      { color: 'rgba(255,255,227,0.22)', bg: 'rgba(255,255,227,0.04)', border: 'rgba(255,255,227,0.12)' },
}

export default function StatusPill({ status }: { status: Status }) {
  const s = STATUS_STYLE[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 flex-shrink-0"
      style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{
          background: s.color,
          boxShadow: status === 'In Progress' ? `0 0 6px ${s.color}` : 'none',
          animation: status === 'In Progress' ? 'pulse 2s infinite' : 'none',
        }}
      />
      {status}
    </span>
  )
}
