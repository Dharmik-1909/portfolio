import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import profileImage from './assets/images/profile-photo.png'



const profile = {
  name: 'Dharmik Chuahan',
  role: 'Web Developer',
  eyebrow: "I'M A WEB DEVELOPER",
  tagline: 'I build clean, fast, and reliable web experiences.',
  bio:
    "I'm a front-end focused web developer with a passion for building " +
    'accessible, performant interfaces. I enjoy turning complex problems ' +
    'into simple, elegant solutions using React and modern web tooling.',
  availability: 'Available for freelance work',
  email: 'dharmikchauhan1920@gmail.com',
  phone: '+91 9824640227',
  location: 'Rajkot,Gujarat',
  profileImage,
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/', icon: 'bi-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'bi-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/', icon: 'bi-twitter-x' },
  ],
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Client Satisfaction', value: '100%' },
  ],
}

const skills = [
  { name: 'HTML', percentage: 95, icon: 'bi-filetype-html' },
  { name: 'CSS', percentage: 90, icon: 'bi-filetype-css' },
  { name: 'JavaScript', percentage: 90, icon: 'bi-filetype-js' },
  { name: 'React.js', percentage: 88, icon: 'bi-braces' },
  { name: 'Next.js', percentage: 80, icon: 'bi-layers' },
  { name: 'TypeScript', percentage: 78, icon: 'bi-filetype-tsx' },
  { name: 'Node.js', percentage: 75, icon: 'bi-hdd-network' },
  { name: 'Tailwind CSS', percentage: 82, icon: 'bi-palette' },
  { name: 'Git', percentage: 85, icon: 'bi-git' },
]

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description:
      'A full-featured online store with product catalog, cart, and checkout flow built for performance and scalability.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQFceEmDlDLFhA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687908969665?e=2147483647&v=beta&t=7INvW8QI80Q6PQ0Z-ZseVKjvmBqMRXVQEJquST7ZB-g',
    technologies: ['React', 'Node.js', 'Bootstrap'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Productivity',
    description:
      'A collaborative task board with drag-and-drop organization, due dates, and team assignment features.',
    image: 'https://anvil.works/learn/examples/img/task-manager-app/new-task-manager-project.png',
    technologies: ['React', 'JavaScript', 'REST API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Crypto Dashboard',
    category: 'Data Visualization',
    description:
      'A real-time dashboard for tracking cryptocurrency prices, trends, and portfolio performance.',
    image: 'https://s3-alpha.figma.com/hub/file/3796326052/bf483fcd-bc37-4ce6-a36c-cf27b9ece928-cover.png',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
]

function App() {
  return (
    <>
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
