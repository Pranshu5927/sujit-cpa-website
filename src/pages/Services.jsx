import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServicesSection from '../sections/Services'

export default function Services() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ paddingTop: '5rem', position: 'relative' }}
    >
      <div className="contact-hero-bg" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', pointerEvents: 'none' }} />
      <div className="contact-hero-grid" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', pointerEvents: 'none' }} />
      <ServicesSection />

      <section className="services-banner-section">
        <div className="container">
          <motion.div
            className="services-banner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="services-banner-bg" />
            <div className="services-banner-content">
              <motion.div
                className="section-tag"
                style={{ justifyContent: 'center' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The Bigger Picture
              </motion.div>
              <motion.h2
                className="services-banner-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                More than a CPA firm —{' '}
                <span className="gold-text">a strategic partner in your financial growth</span>
              </motion.h2>
              <motion.p
                className="services-banner-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We go beyond compliance to help you make better decisions, scale efficiently and build a financially strong business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <Link to="/contact" className="btn-primary">
                  <span>Let's Work Together</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
