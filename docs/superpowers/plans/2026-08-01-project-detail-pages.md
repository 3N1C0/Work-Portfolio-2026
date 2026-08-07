# Project Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Case Study →" button to each project card that navigates to a `/projects/[slug]` page with Why, How, and Results sections, matching the existing portfolio aesthetic exactly.

**Architecture:** Extract project data to `data/projects.ts` so both the card grid and the detail page share one source of truth. Extract `StatusPill` to its own component so it can be used in both files. Create a Next.js App Router dynamic route at `app/projects/[slug]/page.tsx` that looks up the project by slug and renders the three content sections.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, JetBrains Mono

---

### Task 1: Create `data/projects.ts`

**Files:**
- Create: `data/projects.ts`

- [ ] **Step 1: Create the shared data file**

Create `/Users/eliasnicolas/Desktop/new_portfolio/data/projects.ts` with this exact content:

```typescript
type Status = 'Complete' | 'In Progress' | 'Research' | 'Upcoming'

export type Project = {
  title: string
  caption: string
  description: string
  tags: string[]
  gradient: string
  placeholder: string
  status: Status
  url: string
  featured?: boolean
  slug: string
  why: string
  how: string
  results: string
}

export const projects: Project[] = [
  {
    title: 'Autonomous Hexapod with Lidar Navigation',
    caption: '',
    description: '',
    tags: ['Python', 'OpenCV', 'Linux', 'ROS2', 'Lidar', 'Onshape', '3D Printing'],
    gradient: 'rgba(170,186,153,0.09)',
    placeholder: '[ CAD / Render Here ]',
    status: 'In Progress',
    url: '#',
    featured: true,
    slug: 'autonomous-hexapod',
    why: 'Legged locomotion offers terrain adaptability that wheeled robots cannot match. This project explores how a six-legged platform can navigate unstructured environments autonomously using low-cost Lidar sensing.',
    how: 'Designed the chassis in Onshape and 3D-printed all structural components. Implemented inverse kinematics for gait control in Python, integrated a 2D Lidar sensor with ROS2, and developed a SLAM-based navigation stack running on a Raspberry Pi.',
    results: 'The robot successfully traverses uneven surfaces and avoids obstacles in real time. Work is ongoing to improve gait stability and map-building accuracy across longer run times.',
  },
  {
    title: 'Voice Controlled 4 DOF Robotic Arm',
    caption: '',
    description: '',
    tags: ['Python', 'C++', 'Arduino IDE', 'Onshape', '3D Printing'],
    gradient: 'rgba(170,186,153,0.05)',
    placeholder: '[ Data Dashboard Here ]',
    status: 'Complete',
    url: '#',
    slug: 'voice-controlled-robotic-arm',
    why: 'Voice interfaces lower the barrier to operating robotic hardware without a controller or GUI. This project investigates how natural language commands can map to precise servo movements in a 4-DOF arm.',
    how: 'Modeled the arm in Onshape and printed the links in PLA. Wrote servo control firmware in C++ on an Arduino, then built a Python speech-recognition layer that parses spoken commands and sends serial instructions to the microcontroller.',
    results: 'Achieved reliable pick-and-place control through voice alone with sub-second command latency. The project established a reusable firmware-to-speech pipeline used in subsequent robotics work.',
  },
  {
    title: '7-Inch Carbon Fiber FPV Drone',
    caption: '',
    description: '',
    tags: ['Beta Flight', 'UAV Research', 'Soldering'],
    gradient: 'rgba(255,255,227,0.04)',
    placeholder: '[ CFD Viz Here ]',
    status: 'In Progress',
    url: '#',
    slug: 'carbon-fiber-fpv-drone',
    why: 'Off-the-shelf FPV frames trade rigidity for weight. Building a carbon fiber frame from scratch provides hands-on experience with composite materials and fine-grained control over flight characteristics.',
    how: 'Designed the frame geometry based on aerodynamic requirements, sourced raw carbon fiber sheet, and cut components with precision tools. Assembled and soldered the full electronics stack, then configured Betaflight PID loops for stable flight.',
    results: 'The drone achieves stable hover and responsive control. Flight-time and vibration damping improvements are in progress as PID tuning continues.',
  },
  {
    title: 'Japan Natural Disaster Analysis Dashboard',
    caption: '',
    description: '',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Streamlit'],
    gradient: 'rgba(170,186,153,0.06)',
    placeholder: '[ CAD / Robot Here ]',
    status: 'Complete',
    url: '#',
    slug: 'japan-disaster-dashboard',
    why: 'Japan experiences a disproportionate share of global seismic and meteorological events. Understanding historical patterns in that data can inform infrastructure planning and emergency response strategies.',
    how: 'Collected and cleaned multi-decade disaster records using Pandas, ran clustering and trend analysis with Scikit-learn, and built an interactive Streamlit dashboard that lets users filter by disaster type, region, and time period.',
    results: 'The dashboard surfaces clear regional risk patterns and seasonal trends. It was presented as a data science capstone and highlighted the value of open government datasets for disaster preparedness research.',
  },
  {
    title: 'ROS2 Based Smart Car',
    caption: '',
    description: '',
    tags: ['ROS2', 'OpenCV', 'Linux', 'Lidar'],
    gradient: 'rgba(180,200,240,0.06)',
    placeholder: '[ Simulation Here ]',
    status: 'Complete',
    url: '#',
    slug: 'ros2-smart-car',
    why: 'Ground vehicles are an accessible platform for learning autonomous navigation. This project focused on integrating perception and planning in ROS2 on constrained hardware.',
    how: 'Mounted a Lidar sensor and camera on a differential-drive chassis, wrote ROS2 nodes for obstacle detection with OpenCV, and implemented a simple path-planning layer for autonomous corridor navigation on Linux.',
    results: 'The vehicle navigates hallway environments without collision and served as a foundation for more advanced sensor-fusion experiments on the Hexapod project.',
  },
  {
    title: 'ROS2 Based Smart Car',
    caption: '',
    description: '',
    tags: ['ROS2', 'OpenCV', 'Linux', 'Lidar'],
    gradient: 'rgba(180,200,240,0.06)',
    placeholder: '[ Simulation Here ]',
    status: 'Complete',
    url: '#',
    slug: 'ros2-smart-car-2',
    why: 'Ground vehicles are an accessible platform for learning autonomous navigation. This project focused on integrating perception and planning in ROS2 on constrained hardware.',
    how: 'Mounted a Lidar sensor and camera on a differential-drive chassis, wrote ROS2 nodes for obstacle detection with OpenCV, and implemented a simple path-planning layer for autonomous corridor navigation on Linux.',
    results: 'The vehicle navigates hallway environments without collision and served as a foundation for more advanced sensor-fusion experiments on the Hexapod project.',
  },
]
```

---

### Task 2: Extract `StatusPill` to its own component

**Files:**
- Create: `components/StatusPill.tsx`

- [ ] **Step 1: Create the component file**

Create `/Users/eliasnicolas/Desktop/new_portfolio/components/StatusPill.tsx`:

```typescript
'use client'

type Status = 'Complete' | 'In Progress' | 'Research' | 'Upcoming'

const STATUS_STYLE: Record<Status, { color: string; bg: string; border: string }> = {
  Complete:     { color: '#AABA99',                bg: 'rgba(170,186,153,0.12)', border: 'rgba(170,186,153,0.35)' },
  'In Progress':{ color: '#FFFFE3',                bg: 'rgba(255,255,227,0.08)', border: 'rgba(255,255,227,0.25)' },
  Research:     { color: 'rgba(180,200,240,0.9)',  bg: 'rgba(180,200,240,0.08)', border: 'rgba(180,200,240,0.25)' },
  Upcoming:     { color: 'rgba(255,255,227,0.22)', bg: 'rgba(255,255,227,0.04)', border: 'rgba(255,255,227,0.12)' },
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
```

---

### Task 3: Rewrite `components/sections/Projects.tsx`

**Files:**
- Modify: `components/sections/Projects.tsx`

- [ ] **Step 1: Replace the full file content**

Replace `/Users/eliasnicolas/Desktop/new_portfolio/components/sections/Projects.tsx` with:

```typescript
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import StatusPill from '@/components/StatusPill'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.5)'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'
const SURFACE = '#1c1c1c'
const BORDER = 'rgba(255,255,227,0.06)'

function FeaturedCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div
      className="p-[6px] rounded-[2rem] h-full group transition-all duration-500"
      style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
    >
      <div
        className="rounded-[calc(2rem-6px)] h-full flex flex-col overflow-hidden"
        style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
      >
        <div
          className="flex-shrink-0 overflow-hidden flex items-center justify-center relative"
          style={{ aspectRatio: '16/9', background: p.gradient }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 35% 40%, rgba(170,186,153,0.1), transparent 65%)' }} />
          <span className="font-mono text-[11px] tracking-widest z-10 select-none" style={{ color: FG_DIM }}>
            {p.placeholder}
          </span>
        </div>

        <div className="p-7 flex flex-col flex-1 gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full font-mono text-[10px]"
                style={{ color: FG_DIM, background: 'rgba(255,255,227,0.04)', border: `1px solid rgba(255,255,227,0.07)` }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-start justify-between gap-3">
            <h3 className="font-mono font-semibold leading-snug text-xl" style={{ color: FG }}>
              {p.title}
            </h3>
            <StatusPill status={p.status} />
          </div>

          <p className="font-mono text-sm leading-relaxed" style={{ color: FG }}>
            {p.caption}
          </p>

          <p className="font-mono text-sm leading-relaxed flex-1" style={{ color: FG_MUTED }}>
            {p.description}
          </p>

          <div className="pt-4" style={{ borderTop: `1px solid rgba(255,255,227,0.05)` }}>
            <Link
              href={`/projects/${p.slug}`}
              className="font-mono inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3"
              style={{ color: ACCENT }}
            >
              Case Study
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] transition-all duration-300 group-hover:bg-opacity-30"
                style={{ background: 'rgba(170,186,153,0.1)', border: '1px solid rgba(170,186,153,0.2)' }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div
      className="p-[6px] rounded-[2rem] h-full group transition-all duration-500"
      style={{ background: 'rgba(255,255,227,0.025)', border: `1px solid ${BORDER}` }}
    >
      <div
        className="rounded-[calc(2rem-6px)] h-full flex flex-col overflow-hidden"
        style={{ background: SURFACE, boxShadow: 'inset 0 1px 1px rgba(255,255,227,0.04)' }}
      >
        <div
          className="flex-shrink-0 overflow-hidden flex items-center justify-center relative"
          style={{ aspectRatio: '16/9', background: p.gradient }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 40%, rgba(170,186,153,0.08), transparent 70%)' }} />
          <span className="font-mono text-[9px] tracking-widest z-10 select-none" style={{ color: FG_DIM }}>
            {p.placeholder}
          </span>
        </div>

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

          <p className="font-mono text-[0.78rem] leading-relaxed" style={{ color: FG }}>
            {p.caption}
          </p>

          <p className="font-mono leading-relaxed flex-1 text-[0.72rem]" style={{ color: FG_MUTED }}>
            {p.description}
          </p>

          <div className="pt-3" style={{ borderTop: `1px solid rgba(255,255,227,0.05)` }}>
            <Link
              href={`/projects/${p.slug}`}
              className="font-mono inline-flex items-center gap-1.5 text-[10px] font-semibold transition-all duration-300"
              style={{ color: ACCENT }}
            >
              Case Study
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px]"
                style={{ background: 'rgba(170,186,153,0.1)', border: '1px solid rgba(170,186,153,0.2)' }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [featured, ...small] = projects

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

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        style={{ gridAutoRows: 'minmax(320px, auto)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <FeaturedCard p={featured} />
        </motion.div>

        {small.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.75, delay: (i + 1) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <SmallCard p={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

---

### Task 4: Create the project detail page

**Files:**
- Create: `app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create the directory and page file**

Create `/Users/eliasnicolas/Desktop/new_portfolio/app/projects/[slug]/page.tsx`:

```typescript
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
          className="mb-20 flex flex-col gap-4"
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
```

---

### Task 5: Verify the build

- [ ] **Step 1: Run the TypeScript build check**

```bash
cd /Users/eliasnicolas/Desktop/new_portfolio && npx tsc --noEmit
```

Expected: no errors output.

- [ ] **Step 2: Start the dev server and verify**

```bash
cd /Users/eliasnicolas/Desktop/new_portfolio && npm run dev
```

Visit `http://localhost:3000` — confirm project cards show "Case Study →" buttons.
Click one — confirm it navigates to `/projects/[slug]` and renders Why / How / Results with the correct dark aesthetic.
Visit a nonexistent slug like `http://localhost:3000/projects/fake` — confirm it renders the Next.js 404 page.
