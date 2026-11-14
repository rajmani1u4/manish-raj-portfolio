import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Moon, Sun, Code2, Database, Globe, Layers, Terminal, BriefcaseBusiness,
  GraduationCap, Download, ExternalLink, Send, Sparkles, Cpu, CheckCircle2
} from 'lucide-react'

const profile = {
  name: 'Manish Raj',
  email: 'rajmanish327@gmail.com',
  tagline: 'Building digital experiences through code, creativity & innovation.',
  intro: 'I’m an MCA graduate with a passion for building useful web applications, solving technical problems, and turning ideas into reliable digital experiences.',
}
const skills = [
  { title: 'Programming', icon: Code2, items: ['Python', 'PHP', 'JavaScript'] },
  { title: 'Frontend', icon: Globe, items: ['HTML5', 'CSS3', 'Responsive UI', 'React (learning/building)'] },
  { title: 'Backend', icon: Terminal, items: ['Flask', 'PHP', 'REST API fundamentals'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'SQL', 'Data handling'] },
  { title: 'CMS & Tools', icon: Layers, items: ['WordPress', 'Wix', 'Git', 'GitHub'] },
  { title: 'Professional', icon: BriefcaseBusiness, items: ['Technical support', 'Reporting', 'Documentation', 'Team coordination'] },
]
const projects = [
  { name: 'AI Smart Exam Proctoring System', type: 'AI / Web App', tags: ['Python', 'Flask', 'PHP', 'MySQL', 'JavaScript'], desc: 'An exam-monitoring project exploring face recognition, candidate activity logging, and AI-assisted proctoring workflows.', number: '01', status: 'Academic project', accent: 'blue', repoUrl: 'https://github.com/rajmani1u4/Smart-Online-Examination-Portal-And-AI-based-Protection' },
  { name: 'Image to Video Maker AI', type: 'Python Application', tags: ['Python', 'PIL', 'MoviePy', 'Tkinter'], desc: 'A desktop workflow concept for turning image sequences into video content with image processing and media assembly.', number: '02', status: 'Personal project', accent: 'violet', repoUrl: 'https://github.com/rajmani1u4/Image-to-video-maker-ai' },
  { name: 'English AI Coach', type: 'Learning Platform', tags: ['Python', 'Web', 'AI concepts'], desc: 'A learning product concept focused on English conversation practice, progress tracking, and feedback for learners.', number: '03', status: 'In development', accent: 'cyan' },
]
const experience = [
  { role: 'Technical & Web Development Work', period: 'Professional experience', points: ['Developed and maintained websites using PHP, MySQL, WordPress, and Wix.', 'Created custom WordPress templates based on customer requirements.', 'Prepared reports, reviewed junior team work, and supported documentation and coordination.'] },
  { role: 'Operations & Data Coordination', period: 'Additional professional experience', points: ['Worked with data entry, reporting, and operational workflows.', 'Supported team coordination, process follow-up, and day-to-day issue resolution.'] },
]
const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'K.R. Mangalam University', year: '2023 — 2025' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'NSHM Knowledge Campus, Kolkata', year: '2018 — 2021' },
]
const filters = ['All', 'AI / Web App', 'Python Application', 'Learning Platform']

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
function App() {
  const [dark, setDark] = useState(true)
  const [menu, setMenu] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const shownProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.type === filter), [filter])
  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
  const downloadResume = () => window.print()
  const submitContact = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(data.get('subject'))
    const body = encodeURIComponent(`Hi Manish,\n\n${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <div className={dark ? 'app dark' : 'app light'}>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="header">
      <a className="brand" href="#home"><span className="brand-mark">M<span>R</span></span><span>MANISH RAJ<span className="brand-sub">DEVELOPER PORTFOLIO</span></span></a>
      <nav className={menu ? 'nav nav-open' : 'nav'}>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenu(false)}>{n}</a>)}</nav>
      <div className="header-actions">
        <button className="icon-btn theme-toggle" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <a className="hire-btn" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
        <button className="icon-btn mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse-dot"/> OPEN TO IT OPPORTUNITIES</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .7 }}>Turning ideas into<br/><span className="gradient-text">digital reality.</span></motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>{profile.intro}</motion.p>
          <motion.div className="hero-ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            <a className="primary-btn" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <button className="secondary-btn" onClick={downloadResume}><Download size={16}/> Resume / Print</button>
          </motion.div>
          <div className="social-row"><a href="https://github.com/rajmani1u4" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={12}/></a><a href="https://www.linkedin.com/in/manish-raj-730a14200/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={12}/></a><a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a></div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .88, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .15 }}>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="hero-core"><div className="core-grid"/><span className="core-bracket">&lt; / &gt;</span><span className="core-label">CODE · CREATE · INNOVATE</span></div>
          <div className="float-card float-top"><Code2 size={17}/><span>Clean code<br/><b>Thoughtful build</b></span></div>
          <div className="float-card float-bottom"><Cpu size={17}/><span>Curious mind<br/><b>Always learning</b></span></div>
          <div className="art-caption">FIG. 01 — DEVELOPER MINDSET</div>
        </motion.div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="section-wrap about-section" id="about">
        <SectionTitle eyebrow="01 / ABOUT ME" title="A little about my journey" text="A technical foundation, a practical mindset, and a constant drive to learn."/>
        <div className="about-grid">
          <div className="about-main panel"><span className="quote-mark">“</span><h3>I enjoy building things that make technology feel simple and useful.</h3><p>I’m Manish Raj, an MCA graduate interested in web development, software engineering, and technology-driven problem solving. My experience spans website creation, CMS customization, database-backed applications, technical support, reporting, and team coordination.</p><p>I’m now focused on growing further as a developer, strengthening my engineering practices, and contributing to products where I can learn, build, and create measurable value.</p><div className="about-signature">Manish Raj <span>— Developer & lifelong learner</span></div></div>
          <div className="about-side"><div className="mini-stat panel"><span className="stat-icon"><GraduationCap/></span><div><b>MCA Graduate</b><small>Computer Applications</small></div></div><div className="mini-stat panel"><span className="stat-icon"><Code2/></span><div><b>Build-focused</b><small>Projects & practical learning</small></div></div><div className="mini-stat panel"><span className="stat-icon"><Sparkles/></span><div><b>Growth mindset</b><small>Curiosity into capability</small></div></div></div>
        </div>
      </section>

      <section className="section-wrap" id="skills">
        <SectionTitle eyebrow="02 / TOOLKIT" title="My technical toolkit" text="A growing set of technologies and practical skills I use to build and support digital solutions."/>
        <div className="skills-grid">{skills.map((s, i) => <motion.div className="skill-card panel" key={s.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><div className="skill-card-top"><span className="skill-icon"><s.icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{s.title}</h3><div className="tag-list">{s.items.map(item=><span className="tag" key={item}>{item}</span>)}</div></motion.div>)}</div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <SectionTitle eyebrow="03 / SELECTED WORK" title="Projects with purpose" text="A selection of academic and personal projects that reflect my interest in practical software and AI-powered experiences."/>
        <div className="filter-row">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'filter active':'filter'}>{f}</button>)}</div>
        <div className="projects-grid">{shownProjects.map((p,i)=><motion.article layout className={`project-card panel ${p.accent}`} key={p.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
          <div className="project-visual"><span className="project-number">{p.number} / PROJECT</span><div className="visual-symbol">{p.number==='01'?<Cpu size={54}/>:p.number==='02'?<Layers size={54}/>:<Sparkles size={54}/>}</div><span className="visual-type">{p.type}</span></div>
          <div className="project-content"><div className="project-meta"><span>{p.status}</span><ArrowUpRight size={17}/></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tag-list">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="project-foot"><span>PROJECT OVERVIEW</span>{p.repoUrl ? <a className="text-link" href={p.repoUrl} target="_blank" rel="noreferrer">View GitHub repository <ArrowUpRight size={14}/></a> : <span className="text-link">Project details available on request</span>}</div></div>
        </motion.article>)}</div>
        <p className="project-note"><CheckCircle2 size={15}/> Repository links are provided where available; a live demo will be added after deployment.</p>
      </section>

      <section className="section-wrap" id="experience">
        <SectionTitle eyebrow="04 / EXPERIENCE & EDUCATION" title="Where I’ve learned and grown" text="A mix of hands-on technical work, operational exposure, and formal computer science education."/>
        <div className="journey-grid"><div className="journey-col"><h3 className="column-title"><BriefcaseBusiness size={18}/> EXPERIENCE</h3><div className="timeline">{experience.map((e,i)=><div className="timeline-item" key={e.role}><span className="timeline-dot"/><small>{e.period}</small><h4>{e.role}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div>)}</div></div><div className="journey-col"><h3 className="column-title"><GraduationCap size={19}/> EDUCATION</h3><div className="timeline">{education.map((e,i)=><div className="timeline-item" key={e.degree}><span className="timeline-dot"/><small>{e.year}</small><h4>{e.degree}</h4><p>{e.school}</p></div>)}</div><div className="learning-note panel"><Sparkles size={18}/><div><b>Currently growing</b><p>Deepening modern frontend development, software design, and practical problem-solving skills.</p></div></div></div></div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-banner"><div><span className="eyebrow">05 / GET IN TOUCH</span><h2>Have a project or opportunity<br/><span className="gradient-text">in mind?</span></h2><p>I’m open to conversations about software, web development, and IT opportunities.</p><a className="primary-btn" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a></div><div className="contact-orb"><div className="orb-inner"><Send size={38}/></div></div></div>
        <div className="contact-grid"><div className="contact-details"><h3>Let’s connect.</h3><p>For opportunities, collaborations, or a quick conversation, send me a message.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={15}/></a><div className="contact-social"><a href="https://github.com/rajmani1u4" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/manish-raj-730a14200/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></div>
          <form className="contact-form panel" onSubmit={submitContact}><div className="form-row"><label>Your name<input name="name" placeholder="Enter your name" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label></div><label>Subject<input name="subject" placeholder="What would you like to discuss?" required/></label><label>Message<textarea name="message" rows="4" placeholder="Write your message..." required/></label><button className="primary-btn" type="submit">Send message <ArrowUpRight size={16}/></button>{sent&&<small className="form-hint">Your email app should open with the message ready to send.</small>}</form>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M<span>R</span></span><span>MANISH RAJ<span className="brand-sub">DEVELOPER PORTFOLIO</span></span></a><span>Designed & built with curiosity.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    <div className="copyright">© {new Date().getFullYear()} Manish Raj. All rights reserved. <span>Built with React & Tailwind CSS.</span></div>
  </div>
}
export default App
