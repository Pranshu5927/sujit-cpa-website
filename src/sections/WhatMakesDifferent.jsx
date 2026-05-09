import { motion } from 'framer-motion'
import { MessageSquare, Globe, Users, UserCheck, TrendingUp } from 'lucide-react'

const differentiators = [
  {
    number: '01',
    icon: <MessageSquare size={20} />,
    title: 'A CPA Who Speaks Your Language',
    description: 'No jargon, just clear, actionable insights — so you always know where you stand and what to do next.',
  },
  {
    number: '02',
    icon: <Globe size={20} />,
    title: 'Global Experience',
    description: 'Across SaaS, manufacturing, and CPG industries — bringing an international, multi-industry perspective to every engagement.',
  },
  {
    number: '03',
    icon: <UserCheck size={20} />,
    title: 'A Hands-On Partner',
    description: 'Who works alongside you, not just behind the scenes — accessible, responsive, and genuinely invested in your outcomes.',
  },
  {
    number: '04',
    icon: <Users size={20} />,
    title: 'A Trusted Partner',
    description: 'To founders and leadership teams through growth & change — someone you can rely on when the stakes are highest.',
  },
  {
    number: '05',
    icon: <TrendingUp size={20} />,
    title: 'CFO-Level Thinking',
    description: 'To support growth, profitability, and decision-making — strategic financial leadership without the full-time executive cost.',
  },
]

const bottomBar = [
  { icon: <MessageSquare size={16} />, label: 'Clear Communication' },
  { icon: <UserCheck size={16} />, label: 'Hands-On Partnership' },
  { icon: <TrendingUp size={16} />, label: 'Strategic Guidance' },
  { icon: <Globe size={16} />, label: 'Data-Driven Decisions' },
  { icon: <Users size={16} />, label: 'Trusted Advisor' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhatMakesDifferent() {
  const top = differentiators.slice(0, 2)
  const bottom = differentiators.slice(2)

  return (
    <section className="different-section">
      <div className="different-container">
        <motion.div
          className="different-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">The Difference</div>
          <h2 className="section-title">
            What Makes Me{' '}
            <span className="gold-text">Different</span>
          </h2>
          <p className="section-subtitle">
            Beyond compliance and filings — a true financial partner who invests in your success.
          </p>
        </motion.div>

        <motion.div
          className="different-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {top.map((d) => (
            <motion.div
              key={d.title}
              className="different-card"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <div className="different-number">{d.number}</div>
              <div className="different-icon">{d.icon}</div>
              <h3 className="different-title">{d.title}</h3>
              <p className="different-desc">{d.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="different-grid-bottom"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {bottom.map((d) => (
            <motion.div
              key={d.title}
              className="different-card"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <div className="different-number">{d.number}</div>
              <div className="different-icon">{d.icon}</div>
              <h3 className="different-title">{d.title}</h3>
              <p className="different-desc">{d.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="different-bottom-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {bottomBar.map((item, i) => (
            <div key={item.label} className="different-bar-item">
              {i > 0 && <div className="different-bar-divider" />}
              <div className="different-bar-icon">{item.icon}</div>
              <span className="different-bar-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
