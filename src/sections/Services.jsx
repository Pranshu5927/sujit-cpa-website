import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, BookOpen, Building2, TrendingUp, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <FileText size={22} />,
    title: 'Personal Tax',
    description: 'Simple, accurate & optimized tax solutions for individuals & professionals.',
    features: [
      'Personal tax return preparation',
      'Tax planning & optimization',
      'Support for complex tax situations',
      'CRA audit assistance',
    ],
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Accounting',
    description: 'Reliable, timely & compliant financial operations for your business.',
    features: [
      'Bookkeeping & financial reporting',
      'Monthly close & reconciliations',
      'Payroll & compliance',
      'Financial statement preparation',
    ],
  },
  {
    icon: <Building2 size={22} />,
    title: 'Corporate Tax',
    description: 'Strategic tax planning & compliance to support your business goals.',
    features: [
      'Corporate tax filings',
      'Tax planning strategies',
      'Owner-manager optimization',
      'GST/HST filings & compliance',
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Advisory Services',
    description: 'Forward-looking insights to help you grow with confidence.',
    features: [
      'Cashflow & profitability optimization',
      'Budgeting & forecasting',
      'KPI tracking & financial insights',
      'Business performance analysis',
    ],
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Fractional Finance Leadership',
    description: 'Executive-level financial expertise — without the full-time commitment.',
    features: [
      'Fractional CFO services',
      'Strategic decision support',
      'Fundraising & investor readiness',
      'Financial systems & process optimization',
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">What I Offer</div>
          <h2 className="section-title">
            Comprehensive{' '}
            <span className="gold-text">Financial Services</span>
          </h2>
          <p className="section-subtitle">
            Every service is delivered with the precision, clarity, and personal attention your finances deserve.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-divider" />
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f} className="service-feature-item">
                    <CheckCircle2 size={14} className="service-feature-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="service-link">
                Get Started <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
