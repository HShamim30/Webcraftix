import { useScrollAnimation } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Rocket, 
  Search, 
  Layers, 
  Palette, 
  ShieldCheck,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    description: 'Tailored solutions built from the ground up. Your vision, brought to life with modern technology and pixel-perfect execution.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    gradient: 'from-blue-500 to-cyan-500',
    link: '/services#custom-website'
  },
  {
    icon: Rocket,
    title: 'Startup & Business Websites',
    description: 'Launch-ready websites that establish credibility and convert visitors. Perfect for founders who need to move fast.',
    features: ['Quick Turnaround', 'Brand Focused', 'Conversion Ready'],
    gradient: 'from-violet-500 to-purple-500',
    link: '/services#startup-website'
  },
  {
    icon: Search,
    title: 'SEO-Optimized Landing Pages',
    description: 'High-converting landing pages built with search engines in mind. Rank higher, get more traffic, close more deals.',
    features: ['Keyword Optimized', 'Fast Loading', 'A/B Ready'],
    gradient: 'from-emerald-500 to-teal-500',
    link: '/services#landing-pages'
  },
  {
    icon: Layers,
    title: 'MERN Stack Web Applications',
    description: 'Full-stack applications with React, Node.js, and MongoDB. Scalable architecture for growing businesses.',
    features: ['Modern Stack', 'API Driven', 'Scalable'],
    gradient: 'from-orange-500 to-red-500',
    link: '/services#mern-stack'
  },
  {
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    description: 'Beautiful interfaces that users love. We design experiences that feel intuitive and keep visitors engaged.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
    gradient: 'from-pink-500 to-rose-500',
    link: '/services#ui-ux-design'
  },
  {
    icon: ShieldCheck,
    title: 'Performance & Security',
    description: 'Speed optimization and security hardening. Protect your business while delivering blazing-fast experiences.',
    features: ['Speed Boost', 'Security Audit', 'Monitoring'],
    gradient: 'from-amber-500 to-yellow-500',
    link: '/services#performance-security'
  },
]

export default function Services() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need to Succeed Online
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            From concept to launch, we handle the technical complexity so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <Link
      to={service.link}
      ref={ref}
      className={`group relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in ${isVisible ? 'visible' : ''} overflow-hidden`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="relative">
        <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon size={28} />
        </div>
        
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white pr-8">
            {service.title}
          </h3>
          <ArrowUpRight size={20} className="text-gray-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, i) => (
            <span
              key={i}
              className={`px-3 py-1 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700`}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
