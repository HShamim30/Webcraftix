import { useScrollAnimation } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Smartphone, 
  Code, 
  Target, 
  MessageSquare, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const reasons = [
  {
    icon: Search,
    title: 'SEO-Ready From Day One',
    description: 'Every website we build is optimized for search engines from the start. No retrofitting needed.',
    highlight: 'Higher Google Rankings'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    description: 'We design for mobile first, ensuring your site looks and works perfectly on every device.',
    highlight: 'Perfect on All Devices'
  },
  {
    icon: Code,
    title: 'Clean, Scalable Code',
    description: 'Well-structured codebase that\'s easy to maintain and extend as your business evolves.',
    highlight: 'Future-Proof'
  },
  {
    icon: Target,
    title: 'Business-Focused',
    description: 'We understand your goals. Every decision we make is aligned with your business outcomes.',
    highlight: 'Results-Driven'
  },
  {
    icon: MessageSquare,
    title: 'Fast Communication',
    description: 'Direct access to your developer. Quick responses, clear updates, no middlemen.',
    highlight: '24hr Response Time'
  },
  {
    icon: Cpu,
    title: 'Future-Proof Tech',
    description: 'We use modern, well-supported technologies that will serve you for years to come.',
    highlight: 'Latest Standards'
  },
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechStart',
    content: 'Webcraftix delivered beyond our expectations. Our new website increased conversions by 150%.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, GreenLeaf',
    content: 'Professional, fast, and the results speak for themselves. Highly recommended!',
    rating: 5
  }
]

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Why Webcraftix
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What Sets Us Apart
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            We combine technical excellence with business understanding to deliver 
            websites that actually drive results.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* Testimonials */}
        <div className={`mt-20 fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trusted by Growing Businesses
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Let's Work Together
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary-500/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
          {reason.highlight}
        </span>
      </div>
      
      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        <reason.icon size={28} />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {reason.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {reason.description}
      </p>
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
        "{testimonial.content}"
      </p>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">
          {testimonial.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </div>
  )
}
