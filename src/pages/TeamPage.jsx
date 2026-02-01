import { useScrollAnimation } from '../hooks/useAnimations'
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Code2,
  Palette,
  Server,
  Smartphone,
  Award,
  Users,
  Coffee,
  Heart
} from 'lucide-react'
import Huzaifa from "../../Images/Formal.jpg";
import Yusuf from "../../Images/Yusuf.jpeg";
import Hamza from "../../Images/Formal.jpg";
import Takmil from "../../Images/Yusuf.jpeg";

const teamMembers = [
  {
    name: 'Huzaifa Shamim',
    role: 'Founder & Lead Developer',
    image: Huzaifa,
    bio: 'Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and user-centric design.',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    social: {
      linkedin: 'https://www.linkedin.com/in/huzaifa-shamim-ahmad/',
      github: 'https://github.com/HShamim30'
    }
  },
  {
    name: 'Yusuf Ali',
    role: 'UI/UX Design Lead',
    image: Yusuf,
    bio: 'Award-winning designer focused on creating intuitive digital experiences. Believes in the power of design thinking to solve complex problems.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
    social: {
      linkedin: 'https://www.linkedin.com/in/syed-yusuf-275323390/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: '#'
    }
  },
  {
    name: 'Hamza Shabbir',
    role: 'Senior Frontend Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Frontend specialist with expertise in React ecosystem. Obsessed with performance optimization and accessibility.',
    skills: ['React', 'Next.js', 'Tailwind', 'JavaScript'],
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Takmil Baddar',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Backend engineer specializing in API design and database architecture. Advocates for secure and scalable solutions.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    social: {
      linkedin: '#',
      github: '#'
    }
  }
]

const stats = [
  { icon: Award, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '40+', label: 'Happy Clients' },
  { icon: Coffee, value: '10K+', label: 'Cups of Coffee' },
  { icon: Heart, value: '100%', label: 'Passion' }
]

const values = [
  {
    icon: Code2,
    title: 'Quality Code',
    description: 'We write clean, maintainable code that stands the test of time.'
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Every pixel matters. We craft beautiful, functional interfaces.'
  },
  {
    icon: Server,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business, from startup to enterprise.'
  },
  {
    icon: Smartphone,
    title: 'User-First Approach',
    description: 'We design for real people, not just screens.'
  }
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              Meet Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The People Behind{' '}
              <span className="gradient-text">Webcraftix</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A passionate team of designers, developers, and strategists dedicated 
              to crafting exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamMembersSection />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ValuesSection />
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for talented individuals who share our passion 
            for creating exceptional digital experiences.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'm%20interested%20in%20joining%20your%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={24} />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

function StatsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4">
            <stat.icon size={28} />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {stat.value}
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function TeamMembersSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref}>
      <div className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
          Our Experts
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Talented Individuals, Exceptional Results
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Each member brings unique expertise and passion to every project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} isVisible={isVisible} />
        ))}
      </div>
    </div>
  )
}

function TeamMemberCard({ member, index, isVisible }) {
  return (
    <div
      className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            <a
              href={member.social.linkedin}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={member.social.twitter}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label={`${member.name}'s Twitter`}
            >
              <Twitter size={18} />
            </a>
            <a
              href={member.social.github}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {member.name}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {member.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ValuesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref}>
      <div className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
          Our Values
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          What Drives Us Every Day
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          These core values guide everything we do and every project we take on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 fade-in ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-6">
              <value.icon size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
