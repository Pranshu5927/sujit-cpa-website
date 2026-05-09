import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold)', flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const quickLinks = ['Home', 'About', 'Services', 'Contact']
const quickPaths = ['/', '/about', '/services', '/contact']
const services = [
  'Personal Tax',
  'Accounting',
  'Corporate Tax',
  'Advisory Services',
  'Fractional Finance Leadership',
]

export default function Footer() {
  const location = useLocation()

  const handleServiceClick = () => {
    if (location.pathname === '/services') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="navbar-logo" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <div className="logo-monogram">SS</div>
              <div className="logo-text">
                <span className="logo-name">Sujit Sivarajan</span>
                <span className="logo-cpa">CPA</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Providing precision-driven accounting, proactive tax strategy, and trusted financial guidance to help businesses and individuals achieve lasting success.
            </p>
            {/* <div className="footer-social">
              {[
                { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/sujitcpa', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <nav className="footer-links">
              {quickLinks.map((label, i) => (
                <Link key={label} to={quickPaths[i]} className="footer-link">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <nav className="footer-links">
              {services.map((s) => (
                <Link key={s} to="/services" className="footer-link" onClick={handleServiceClick}>
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div>
              <div className="footer-contact-item">
                <Phone size={14} className="footer-contact-icon" />
                <a href="tel:+17806557309" style={{ color: 'inherit' }}>780-655-7309</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon" />
                <a href="mailto:info@sujitscpa.ca" style={{ color: 'inherit' }}>info@sujitscpa.ca</a>
              </div>
              <div className="footer-contact-item">
                <LinkedinIcon />
                <a href="https://www.linkedin.com/in/sujitcpa" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>linkedin.com/in/sujitcpa</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sujit Sivarajan, CPA. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
