"use client";

import { useEffect, useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/samiya-mansuri-7b7b04251/";
const navigation = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↘"}</span>;
}

function InternHubPreview() {
  return (
    <div className="project-art" aria-label="Illustration of the InternHub student dashboard">
      <div className="art-glow" />
      <div className="browser-window">
        <div className="browser-bar">
          <div className="browser-dots"><i /><i /><i /></div>
          <span className="browser-address">internhub / student dashboard</span>
          <span className="browser-menu" aria-hidden="true">···</span>
        </div>
        <div className="dashboard">
          <aside className="dashboard-sidebar">
            <div className="internhub-logo">in<span>tern</span>hub<span className="logo-period">.</span></div>
            <p className="sidebar-label">WORKSPACE</p>
            <div className="sidebar-link sidebar-link-active"><span>▦</span> Overview</div>
            <div className="sidebar-link"><span>⌕</span> Find internships</div>
            <div className="sidebar-link"><span>♡</span> Saved roles</div>
            <p className="sidebar-label sidebar-label-lower">YOUR ACCOUNT</p>
            <div className="sidebar-link"><span>◉</span> Profile</div>
            <div className="sidebar-user"><span className="avatar">S</span><span><b>Student</b><small>My workspace</small></span></div>
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span className="dash-overline">STUDENT DASHBOARD</span><h3>Find your next opportunity.</h3><p>Explore roles and take the next step in your journey.</p></div><span className="dash-date">Your dashboard <span>⌄</span></span></div>
            <div className="dash-search"><span>⌕</span> Search internships by role or skill <kbd>⌘ K</kbd></div>
            <div className="dash-section-title"><b>Suggested for you</b><span>Explore roles ↗</span></div>
            <div className="role-grid">
              <div className="role-card"><span className="role-icon role-icon-green">&lt;/&gt;</span><span className="role-save">♡</span><b>Frontend Intern</b><small>Web development</small><div className="role-tags"><i>Remote</i><i>Internship</i></div></div>
              <div className="role-card"><span className="role-icon role-icon-blue">Py</span><span className="role-save">♡</span><b>Python Intern</b><small>Data &amp; technology</small><div className="role-tags"><i>Hybrid</i><i>Internship</i></div></div>
            </div>
            <div className="dash-progress"><span className="progress-icon">✧</span><span><b>Your next step starts here</b><small>Keep your profile ready as you explore opportunities.</small></span><span className="progress-arrow">↗</span></div>
          </div>
        </div>
      </div>
      <div className="art-caption"><span className="caption-dot" /> A student-first internship discovery concept</div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [toast, setToast] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));

    if (!("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  async function copyLinkedIn() {
    try {
      await navigator.clipboard.writeText(linkedinUrl);
      setToast("LinkedIn profile link copied!");
    } catch {
      setToast(linkedinUrl);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Samiya Mansuri home"><span className="brand-mark">SM</span><span>Samiya<span className="brand-dot">.</span></span></a>
          <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation"><span /><span /></button>
          <div className={`nav-links${menuOpen ? " open" : ""}`} id="primary-navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO FRONTEND INTERNSHIP OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>Samiya <span className="gradient-text">Mansuri.</span></h1>
            <h2>Frontend Developer <span className="muted">in progress.</span></h2>
            <p className="hero-description">I build clean, responsive and user-friendly web experiences. I’m a BCA student who enjoys turning ideas into practical websites and learning by building.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="button button-secondary" href="#contact">Contact me</a></div>
            <div className="hero-meta"><span><span className="meta-icon">⌖</span> Bharuch, Gujarat, India</span><span><span className="meta-icon">✦</span> BCA · 5th semester</span></div>
          </div>
          <div className="hero-visual" aria-label="Developer profile graphic">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card"><div className="profile-top"><span className="profile-label">DEVELOPER PROFILE</span><span className="profile-live"><i /> LEARNING</span></div><div className="initials">SM</div><div className="profile-name">Samiya Mansuri</div><div className="profile-role">Frontend Developer</div><div className="profile-divider" /><div className="profile-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><div className="profile-bottom"><span>Curious mind.</span><span>Building forward ↗</span></div></div>
            <div className="floating-chip chip-top"><span>✧</span> UI focused</div><div className="floating-chip chip-bottom"><span>⌘</span> Always learning</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section container" id="about">
          <div className="section-heading"><p className="section-index">01 / ABOUT</p><h2>A little <span className="gradient-text">about me.</span></h2></div>
          <div className="about-grid"><div><p className="large-copy">I like making the web feel <span className="highlight">simple, useful and welcoming.</span></p></div><div className="about-details"><p>I’m Samiya, a Bachelor of Computer Applications student at P P Savani University. I’m developing my frontend skills through hands-on projects and continuous practice.</p><p>My current focus is strengthening JavaScript, learning Git and GitHub, and creating responsive interfaces that work well across devices. I’m looking for a paid frontend or web development internship where I can contribute, learn from a team and gain real-world experience.</p><a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Connect with me on LinkedIn <Arrow diagonal /></a></div></div>
          <div className="quick-facts"><div><span className="fact-number">01</span><span className="fact-label">BCA student</span></div><div><span className="fact-number">02</span><span className="fact-label">Frontend focused</span></div><div><span className="fact-number">03</span><span className="fact-label">Project-based learner</span></div></div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading"><p className="section-index">02 / TOOLKIT</p><h2>Skills I’m <span className="gradient-text">building with.</span></h2><p className="section-subtitle">A snapshot of the tools and topics I’ve studied. I’m continuing to improve through practice.</p></div>
          <div className="skills-grid">
            <article className="skill-card skill-featured"><div className="skill-card-top"><span className="skill-symbol">&lt;/&gt;</span><span className="skill-tag">CORE FOCUS</span></div><h3>Frontend development</h3><p>Creating structured pages and responsive layouts, and adding interactivity to websites.</p><div className="skill-pills"><span>HTML5</span><span>CSS3</span><span>JavaScript · Beginner</span><span>Responsive design</span></div></article>
            <article className="skill-card"><div className="skill-card-top"><span className="skill-symbol">⌘</span><span className="skill-tag">PROGRAMMING</span></div><h3>Programming</h3><p>Academic and practical foundations.</p><div className="skill-pills"><span>Python</span><span>Java</span><span>SQL</span></div></article>
            <article className="skill-card"><div className="skill-card-top"><span className="skill-symbol">◈</span><span className="skill-tag">ACADEMIC AREAS</span></div><h3>Exploring technology</h3><p>Coursework and learning across different computing areas.</p><div className="skill-pills"><span>Data Science</span><span>IoT</span><span>Software Engineering</span><span>LLM concepts</span></div></article>
            <article className="skill-card"><div className="skill-card-top"><span className="skill-symbol">↗</span><span className="skill-tag">CURRENTLY LEARNING</span></div><h3>Developer workflow</h3><p>Building the habits and tools used in collaborative development.</p><div className="skill-pills"><span>JavaScript practice</span><span>Git fundamentals</span><span>GitHub · Getting started</span></div></article>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading project-heading"><div><p className="section-index">03 / SELECTED WORK</p><h2>Thoughtful ideas, <span className="gradient-text">in progress.</span></h2></div><p className="section-subtitle">One project I’m currently exploring—shared honestly as work in progress, not a finished product.</p></div>
          <article className="project-card">
            <InternHubPreview />
            <div className="project-info"><div className="project-meta"><span className="project-number">FEATURED PROJECT / 01</span><span className="project-status"><i /> IN DEVELOPMENT</span></div><h3>InternHub</h3><p className="project-type">Internship Finder Portal · Project concept</p><p className="project-description">A student-focused portal concept exploring how internship discovery and application journeys could feel more approachable. I’m shaping the student-facing experience around finding opportunities and managing a search in one place.</p>
              <div className="project-exploration"><p className="exploration-label">CURRENT PROJECT SCOPE</p><ul><li>Exploring a student dashboard and opportunity discovery experience</li><li>Practising responsive interface design and frontend implementation</li></ul></div>
              <div className="project-tech"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>PHP / Flask</span><span>MySQL</span></div>
              <p className="project-honesty">This project is in development. A live demo and source link will be added when they’re available.</p>
            </div>
          </article>
          <div className="project-note"><span>✳</span><p><strong>More work will appear here as it’s ready.</strong> I’ll share completed projects with working demos and source-code links.</p></div>
        </section>

        <section className="section container" id="education">
          <div className="section-heading"><p className="section-index">04 / BACKGROUND</p><h2>Education &amp; <span className="gradient-text">certifications.</span></h2></div>
          <div className="background-grid"><div className="background-panel"><p className="panel-label">EDUCATION</p><div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">CURRENTLY PURSUING</p><h3>Bachelor of Computer Applications (BCA)</h3><p>P P Savani University · Gujarat</p><span className="timeline-note">5th semester</span></div></div></div><div className="background-panel"><p className="panel-label">CERTIFICATIONS</p><div className="cert-item"><span className="cert-icon">⌘</span><div><h3>Python for Data Science</h3><p>Certification</p></div></div><div className="cert-item"><span className="cert-icon">✧</span><div><h3>Large Language Models (LLM)</h3><p>Certification</p></div></div><p className="cert-footnote">Issuer, completion date and credential links can be added when available.</p></div></div>
        </section>

        <section className="section contact-section" id="contact"><div className="container contact-inner"><p className="section-index">05 / CONTACT</p><h2>Let’s build something <span className="gradient-text">meaningful.</span></h2><p className="contact-copy">I’m open to paid frontend and web development internship opportunities. If you’re hiring or would like to connect, I’d love to hear from you.</p><div className="contact-actions"><a className="button button-primary" href={linkedinUrl} target="_blank" rel="noreferrer">Message me on LinkedIn <Arrow diagonal /></a><button className="button button-secondary" onClick={copyLinkedIn}>Copy LinkedIn link <span aria-hidden="true">⧉</span></button></div><p className="contact-location"><span className="status-dot" /> Based in Bharuch, Gujarat · Open to remote opportunities</p></div></section>
      </main>

      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">SM</span><span>Samiya<span className="brand-dot">.</span></span></a><p>Designed &amp; built with care by Samiya Mansuri.</p><a href="#home" className="back-top">Back to top ↑</a><span className="copyright">© {year} Samiya Mansuri</span></footer>
      <div className={`toast${toast ? " show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
