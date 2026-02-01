import { useScrollAnimation } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'
import { Code2, Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Clean & Scalable Code',
    description: 'We write maintainable code that grows with your business. No shortcuts, no technical debt.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Lightning-fast load times that keep visitors engaged and improve your search rankings.',
  },
  {
    icon: TrendingUp,
    title: 'SEO-First Development',
    description: 'Built with search engines in mind from day one. Get found by the customers who matter.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security practices to protect your business and your customers.',
  },
]

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'visible' : ''}`}
        >
          <div className={`fade-left ${isVisible ? 'visible' : ''}`}>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              About Webcraftix
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              We Build Websites That Work as Hard as You Do
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We're not just developers—we're your technical partners. At Webcraftix, 
              we understand that your website is the foundation of your online presence. 
              That's why we focus on what actually matters: speed, search visibility, 
              and converting visitors into customers.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Every line of code we write is designed with your business goals in mind. 
              No bloated templates, no unnecessary complexity—just clean, efficient 
              solutions that deliver real results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Meet Our Team
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20Webcraftix."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className={`grid sm:grid-cols-2 gap-6 fade-right ${isVisible ? 'visible' : ''}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
