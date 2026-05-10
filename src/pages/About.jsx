import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react'

const credentials = [
  {
    icon: <Award size={22} />,
    title: 'CPA Designation',
    detail: 'Chartered Professional Accountant — CPA Canada. The gold standard in Canadian accounting and financial excellence.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Academic Foundation',
    detail: 'Bachelor of Commerce, Finance & Accounting. Deep theoretical grounding that underpins every practical recommendation.',
  },
  {
    icon: <Briefcase size={22} />,
    title: '20+ Years Experience',
    detail: "International career spanning SaaS, manufacturing, CPG, and high-growth startups — from global enterprises to founder-led businesses.",
  },
]

const certifications = [
  { abbr: 'CPA', full: 'Chartered Professional Accountant', region: 'Canada' },
  { abbr: 'CGA', full: 'Certified General Accountant', region: 'Canada' },
  { abbr: 'CMA', full: 'Certified Management Accountant', region: 'USA' },
  { abbr: 'CFM', full: 'Certified in Financial Management', region: 'USA' },
  { abbr: 'ACMA', full: 'Associate Chartered Management Accountant', region: 'India' },
]

const philosophy = [
  {
    title: 'Confidence Over Complexity',
    text: 'Strong businesses are not built on impressive reports or financial jargon. They are built on clear numbers, disciplined processes, and confidence in decision-making.',
  },
  {
    title: 'Build Foundations Early',
    text: 'Investor readiness, financial clarity, and operational discipline should never be last-minute exercises. The strongest companies build scalable foundations from day one.',
  },
  {
    title: 'Insight Matters More Than Data',
    text: 'Founders do not need more dashboards — they need clarity. My role is to simplify complexity, surface risks early, and help businesses focus on what truly matters.',
  },
  {
    title: 'Trust Is Everything',
    text: 'Finance is more than reporting and compliance. It is a partnership built on integrity, transparency, and the ability to navigate uncertainty with a steady hand.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag" style={{ justifyContent: 'center' }}>About</div>
            <h1 className="about-hero-title">
              Meet{' '}
              <span className="gold-text">Sujit Sivarajan</span>
              <br />
              <span style={{ fontStyle: 'italic' }}>CPA</span>
            </h1>
            <p className="about-hero-subtitle">
              A Chartered Professional Accountant based in Edmonton, Alberta, with over 20 years of international experience — bringing clarity, structure, and confidence to founders, leadership teams, and business owners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <motion.div
              className="about-photo-wrapper"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-photo-placeholder">
                <img
                  src="/headshot.webp"
                  alt="Sujit Sivarajan, CPA"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                />
              </div>
              <div className="about-photo-badge">
                <div className="about-photo-badge-number">20+</div>
                <div className="about-photo-badge-label">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-story-content">
                <div className="section-tag">My Story</div>
                <h2 className="section-title">
                  A Passion for{' '}
                  <span className="gold-text">Financial Excellence</span>
                </h2>
                <p className="about-story-text">
                  I'm a Chartered Professional Accountant based in Edmonton, Alberta, with over 20 years of international experience across SaaS, manufacturing, consumer packaged goods (CPG), and high-growth startups.
                </p>
                <p className="about-story-text">
                  My career spans global organizations such as Hindustan Unilever, Dubai Cable Company, Al-Futtaim Electronics, and Heineken OPCO, as well as Canadian companies including <a href="https://durabuiltwindows.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '1px' }}>Durabuilt Windows</a> and <a href="https://drivewyze.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '1px' }}>Drivewyze</a>. This breadth of experience gives me a practical, well-rounded perspective across both large enterprises and entrepreneurial environments.
                </p>
                <p className="about-story-text">
                  My startup experience was most recently shaped at <a href="https://drivewyze.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '1px' }}>Drivewyze</a>, where I joined as Controller in its early stages and helped scale the company to 250+ employees. I later served as Director of Finance, supporting multiple financing rounds and playing a key role through to its acquisition in 2024.
                </p>
                <p className="about-story-text">
                  Throughout my career, I've partnered closely with founders, leadership teams, and business owners to navigate complex financial challenges — helping them scale with clarity, structure, and confidence.
                </p>
                <p className="about-story-text">
                  Today, I bring this experience into my public practice, offering fractional CFO services to startups and small businesses, as well as full-cycle accounting and tax services for entrepreneurs and self-employed professionals.
                </p>
                <p className="about-story-text">
                  Outside of work, I'm a proud husband and father of two boys who are competitive athletes. My wife, also a dedicated professional, and together we have built a life that balances career ambition with a strong commitment to family.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <Link to="/contact" className="btn-primary">
                    <span>Work With Me</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    View Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="about-credentials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">Credentials</div>
            <h2 className="section-title">
              Qualifications &{' '}
              <span className="gold-text">Experience</span>
            </h2>
          </motion.div>

          <div className="credentials-grid">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                className="credential-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <div className="credential-icon">{c.icon}</div>
                <h3 className="credential-title">{c.title}</h3>
                <p className="credential-detail">{c.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="certifications-label">Professional Certifications</div>
            <div className="certifications-list">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.abbr}
                  className="certification-plaque"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="certification-abbr">{cert.abbr}</div>
                  <div className="certification-divider" />
                  <div className="certification-full">{cert.full}</div>
                  <div className="certification-region">{cert.region}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="about-philosophy">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">Philosophy</div>
            <h2 className="section-title">
              The Principles I{' '}
              <span className="gold-text">Work By</span>
            </h2>
            <p className="section-subtitle">
              These beliefs guide every client engagement, every recommendation, and every decision I make.
            </p>
          </motion.div>

          <div className="philosophy-grid">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                className="philosophy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: 'rgba(201, 168, 76, 0.4)', transition: { duration: 0.2 } }}
              >
                <div className="philosophy-number">0{i + 1}</div>
                <div>
                  <h3 className="philosophy-title">{p.title}</h3>
                  <p className="philosophy-text">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="about-cta-title">
              Ready to Experience the{' '}
              <span className="gold-text">Difference?</span>
            </h2>
            <p className="about-cta-text">
              Let's have a conversation about your financial goals. I'd love to hear from you.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="btn-primary">
                <span>Reach Out to Me</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
