import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react'

const stats = [
  { end: 20, suffix: '+', label: 'Years of Experience' },
  // { end: 200, suffix: '+', label: 'Clients Served' },
  // { end: 98, suffix: '%', label: 'Client Retention' },
  // { end: 50, suffix: 'M+', prefix: '$', label: 'Tax Optimized' },
]

function AnimatedCounter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const stepTime = 16
    const steps = duration / stepTime
    const increment = end / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref} className="hero-stat-number">
      <span>{prefix}{count}{suffix}</span>
    </span>
  )
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const floatBadges = [
  { icon: <TrendingUp size={14} />, label: 'Financial Strategy', delay: 0 },
  { icon: <Users size={14} />, label: 'Growth & Profitability', delay: 1.2 },
  { icon: <Shield size={14} />, label: 'Business Intelligence', delay: 2 },
]

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Chartered Professional Accountant
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Simplifying Finance.
            <br />
            <span className="hero-title-line2">Strengthening Growth.</span>
          </motion.h1>

          <motion.p className="hero-tagline" variants={itemVariants}>
            Clear numbers. Better decisions. Stronger growth.
          </motion.p>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            As a Chartered Professional Accountant, I bring precision-driven accounting, proactive tax strategy, and trusted financial guidance to help you achieve lasting success.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <Link to="/contact" className="btn-primary">
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix || ''} />
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-orb-visual">
            <div className="hero-ring hero-ring-1">
              <div className="hero-ring-dot" />
            </div>
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />

            <div className="hero-center-circle">
              <div className="hero-initials">SS</div>
              <div className="hero-initials-label">CPA · Trusted Advisor</div>
            </div>

            {floatBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className="hero-badge-float"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + badge.delay * 0.3, duration: 0.5 }}
              >
                <div className="float-dot" />
                <span className="float-label">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
