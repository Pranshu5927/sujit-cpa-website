import { motion } from 'framer-motion'
import { User, Building2, Rocket, CheckCircle2 } from 'lucide-react'

const clients = [
  {
    icon: <User size={22} />,
    title: 'Individuals & Professionals',
    description: 'Whether you are an individual, self-employed, a freelancer or a working professional, I help you stay organized, compliant and in control.',
    features: [
      'Organized Finances',
      'Tax Efficiency',
      'Peace of Mind',
    ],
  },
  {
    icon: <Building2 size={22} />,
    title: 'Small Businesses',
    description: 'I support small businesses in manufacturing, service or trading with end to end financial support — from accounting and tax to operational finance and beyond.',
    features: [
      'Accounting & Bookkeeping',
      'Tax Filing & Planning',
      'Cash Flow & Working Capital',
      'Profitability & Cost Control',
    ],
  },
  {
    icon: <Rocket size={22} />,
    title: 'Startups & Growth Companies',
    description: 'Whether you are an early stage start-up, scaling your business or preparing to exit, I help you build value & make strategic decisions.',
    features: [
      'Early Stage Foundation',
      'Scale & Investor Ready',
      'Growth & Performance',
      'Exit Readiness',
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhoIWorkWith() {
  return (
    <section className="work-with-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">Who I Work With</div>
          <h2 className="section-title">
            Who I <span className="gold-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            Tailored financial expertise for individuals, businesses, and high-growth companies at every stage.
          </p>
        </motion.div>

        <motion.div
          className="work-with-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.title}
              className="work-with-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="card-icon">{client.icon}</div>
              <h3 className="card-title">{client.title}</h3>
              <p className="card-description">{client.description}</p>
              <div className="card-divider" />
              <ul className="card-features">
                {client.features.map((f) => (
                  <li key={f} className="card-feature-item">
                    <CheckCircle2 size={14} className="card-feature-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
