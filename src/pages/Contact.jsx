import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, CheckCircle2, Send } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const infoCards = [
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '780-655-7309',
    href: 'tel:+17806557309',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'info@sujitscpa.ca',
    href: 'mailto:info@sujitscpa.ca',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sujitcpa',
    href: 'https://www.linkedin.com/in/sujitcpa',
  },
]

const serviceOptions = [
  'Personal Tax',
  'Accounting',
  'Corporate Tax',
  'Advisory Services',
  'Fractional Finance Leadership',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag" style={{ justifyContent: 'center' }}>Get In Touch</div>
            <h1 className="about-hero-title">
              Let's Start a{' '}
              <span className="gold-text">Conversation</span>
            </h1>
            <p className="about-hero-subtitle">
              Reach out to discuss your financial goals. I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-subtitle">
                Reach out through any of the channels below, or fill in the form and I'll get back to you within one business day.
              </p>

              <div className="contact-info-cards">
                {infoCards.map((card) => (
                  <div key={card.label} className="contact-info-card">
                    <div className="contact-info-card-icon">{card.icon}</div>
                    <div>
                      <div className="contact-info-card-label">{card.label}</div>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="contact-info-card-value"
                          style={{ color: 'var(--white)' }}
                          {...(card.href?.startsWith('https') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {card.value}
                        </a>
                      ) : (
                        <div className="contact-info-card-value">{card.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Form Column */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="form-success-icon">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="form-success-title">Message Sent!</h3>
                  <p className="form-success-text">
                    Thank you for reaching out. Sujit will personally review your message and get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="form-title">Send a Message</h2>
                  <p className="form-subtitle">Fill in the form below and I'll be in touch shortly.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name *</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="form-input"
                          placeholder="John"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="form-input"
                          placeholder="Smith"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="780-655-7309"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell me a bit about your situation and what you're looking for..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary form-submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <span>Sending...</span>
                          <motion.div
                            style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #040C18', borderTopColor: 'transparent' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
