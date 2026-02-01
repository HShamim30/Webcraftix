import { useScrollAnimation } from '../hooks/useAnimations'
import { ExternalLink, Monitor, Smartphone } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow SaaS',
    category: 'Web Application',
    description: 'A modern SaaS dashboard with real-time analytics, user management, and seamless integrations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Artisan E-Commerce',
    category: 'Online Store',
    description: 'High-converting e-commerce platform with optimized checkout flow and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'GreenLeaf Wellness',
    category: 'Business Website',
    description: 'SEO-optimized wellness brand website with appointment booking and content management.',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80',
    tags: ['React', 'SEO', 'CMS'],
  },
  {
    title: 'FinanceHub Pro',
    category: 'Landing Page',
    description: 'High-conversion landing page for a fintech startup with lead capture and A/B testing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Landing Page', 'Conversion', 'Analytics'],
  },
]

export default function Portfolio() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Projects That Deliver Results
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Take a look at some of our recent work. Each project is crafted with 
            attention to detail and a focus on performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {project.category}
          </span>
          <div className="flex gap-2">
            <Monitor size={16} className="text-gray-400" />
            <Smartphone size={16} className="text-gray-400" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
