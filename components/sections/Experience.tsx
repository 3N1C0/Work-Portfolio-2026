'use client'

import { motion } from 'framer-motion'

const FG = '#FFFFE3'
const FG_MUTED = 'rgba(255,255,227,0.5)'
const FG_DIM = 'rgba(255,255,227,0.22)'
const ACCENT = '#AABA99'

const experiences = [
  {
    company: 'Howmet Aerospace',
    role: 'Mechanical Engineering Intern',
    period: 'June 2026 – Aug 2026',
    location: 'Fontana, CA',
    type: 'Internship',
    bullets: [
      'Designed a hydraulic tool for press tooling changed to reduce the floor workers needed from 3 to 2',
      'Drafted and procured a replacement part for the plant\'s 60 in. Ring Roller that had no documentation',
      'Reverse-engineered 4 undocumented business assets in Inventor to be used by facilities for future repairs',
      'Laid out a building relocation for the maintenance team in AutoCAD to maximize a 7000 sq. ft storage space',
    ],
  },
  {
    company: 'University of Redlands Makerspace',
    role: 'Makerspace Assistant',
    period: 'Jan 2026 – Present',
    location: 'Redlands, CA',
    type: 'Part-time',
    bullets: [
      'Utilizes 3D slicing software to cut down print times by 50%, leading to both filament and time saved',
      'Instructs classes to 10+ students, teaching them how to use Virtual Reality equipment for  classroom simulations',
      'Maintains lab equipment, troubleshooting hardware for 3D Printers, Laser Cutters, CNC Mills, and etc.',
    ],
  },
  {
    company: 'NASA LSPACE',
    role: 'Mechanical Engineer',
    period: 'Jan 2026 – April 2026',
    location: 'Remote',
    type: 'Career Accelerator',
    bullets: [
      'Worked in an interdisciplinary team to  deliver a chassis designed in Siemens NX for our lunar mission concept',
      'Ensured the deliverable was less than \$150M allocated by tracking the total materials cost in Microsoft Excel',
    ],
  },
  {
    company: 'Redlands Robotics and Drone Club',
    role: 'President and Lead Engineer',
    period: 'Sep 2025 – Present',
    location: 'Redlands, CA',
    type: 'Club Leadership',
    bullets: [
      'Designs 3 drone frame iterations in Onshape that are tested to ensure press fit and fastener tolerances are correct',
      'Collaborates with 8 team members to develop projects with the University of Redlands GIS Department',
      'Directs the assembly process of an FPV drone to integrate hardware with AI and object detection capabilities',
    ],
  },
  {
    company: 'Extern',
    role: 'AI and Automation Extern',
    period: 'May 2025 – Jul 2025',
    location: 'Remote',
    type: 'Externship',
    bullets: [
      'Configured AI workflows to automate data extraction and document classification using Python and NLP tools',
      'Assessed top open source AI models for document processing and recommended key optimization strategies',
    ],
  },
  {
    company: 'SEDS (Students for Exploration and Development of Space) Redlands Chapter',
    role: 'President',
    period: 'Aug 2024 – Present',
    location: 'Redlands, CA',
    type: 'Club Leadership',
    bullets: [
      'Spearheads aerospace engineering projects producing validated CAD designs for rockets, rovers, and drones',
      'Plans 5+ on-campus events including stargazing nights and engineering expos to cultivate a sense of community',
    ],
  },
  {
    company: 'University of Redlands',
    role: 'Volunteer Center Intern',
    period: 'Aug 2024 – Dec 2025',
    location: 'Redlands, CA',
    type: 'Internship',
    bullets: [
      'Utilized Microsoft Excel to complete data entry for various volunteer events to track student engagement',
      'Spearheaded community outreach campaigns with 100+ volunteers recruited for various organizations',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-36 px-4 max-w-5xl mx-auto">
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
          Experience
        </span>
        <h2 className="font-mono font-semibold" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: FG, letterSpacing: '-0.03em' }}>
          Curation of Campus Involvement and Professional Experience
        </h2>
      </motion.div>

      <div className="relative">
        <div
          className="absolute left-0 md:left-[11.5rem] top-2 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(170,186,153,0.4), rgba(170,186,153,0.08), transparent)' }}
        />

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-0"
            >
              <div className="md:w-[11.5rem] md:text-right md:pr-10 flex-shrink-0 flex md:flex-col gap-3 md:gap-1.5 items-start md:items-end pt-0.5">
                <div className="font-mono text-[11px]" style={{ color: FG_DIM }}>
                  {exp.period}
                </div>
                <span
                  className="inline-flex rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold"
                  style={{
                    color: ACCENT,
                    background: 'rgba(170,186,153,0.1)',
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Timeline dot */}
              <div
                className="hidden md:block absolute left-[11.5rem] top-1 w-2.5 h-2.5 rounded-full -translate-x-1/2"
                style={{ background: ACCENT, boxShadow: '0 0 12px rgba(170,186,153,0.6)' }}
              />

              <div className="md:pl-12 flex-1">
                <h3 className="font-mono font-semibold mb-0.5" style={{ fontSize: '1.05rem', color: FG }}>
                  {exp.role}
                </h3>
                <div className="font-mono text-sm font-medium mb-4" style={{ color: ACCENT }}>
                  {exp.company}
                  <span className="mx-2" style={{ color: FG_DIM }}>·</span>
                  <span style={{ color: FG_MUTED }}>{exp.location}</span>
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 font-mono text-sm leading-relaxed" style={{ color: FG_MUTED }}>
                      <span className="mt-[0.35rem] flex-shrink-0 text-[7px]" style={{ color: 'rgba(170,186,153,0.5)' }}>▶</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
