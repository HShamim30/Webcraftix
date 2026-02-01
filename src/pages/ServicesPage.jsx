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
  Check,
  Zap,
  Code2,
  Smartphone,
  BarChart3,
  Lock,
  RefreshCw,
  MessageCircle
} from 'lucide-react'

const services = [
  {
    id: 'custom-website',
    icon: Globe,
    title: 'Custom Website Development',
    shortDesc: 'Tailored solutions built from the ground up.',
    description: 'We create bespoke websites that perfectly align with your brand identity and business objectives. Every element is custom-designed and coded to deliver a unique digital experience.',
    features: [
      'Pixel-perfect custom designs',
      'Responsive across all devices',
      'SEO-optimized structure',
      'Fast loading performance',
      'Secure & scalable architecture',
      'Easy content management'
    ],
    benefits: [
      { icon: Zap, text: 'Lightning-fast performance' },
      { icon: Smartphone, text: 'Mobile-first approach' },
      { icon: Lock, text: 'Enterprise-grade security' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'startup-website',
    icon: Rocket,
    title: 'Startup & Business Websites',
    shortDesc: 'Launch-ready websites that establish credibility.',
    description: 'Perfect for founders and businesses who need a professional online presence fast. We deliver polished, conversion-focused websites that help you stand out in competitive markets.',
    features: [
      'Quick turnaround time',
      'Conversion-optimized layouts',
      'Brand-aligned design',
      'Lead capture integration',
      'Analytics & tracking setup',
      'Social media integration'
    ],
    benefits: [
      { icon: BarChart3, text: 'Conversion-focused design' },
      { icon: RefreshCw, text: 'Quick iterations' },
      { icon: MessageCircle, text: 'Direct communication' }
    ],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: 'landing-pages',
    icon: Search,
    title: 'SEO-Optimized Landing Pages',
    shortDesc: 'High-converting pages built for search engines.',
    description: 'Landing pages designed to rank high on Google and convert visitors into customers. Every element is optimized for both search engines and user experience.',
    features: [
      'Keyword-optimized content',
      'Schema markup implementation',
      'Core Web Vitals optimized',
      'A/B testing ready',
      'Conversion tracking',
      'Fast page speed scores'
    ],
    benefits: [
      { icon: Search, text: 'Higher search rankings' },
      { icon: BarChart3, text: 'Increased conversions' },
      { icon: Zap, text: '90+ PageSpeed scores' }
    ],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'mern-stack',
    icon: Layers,
    title: 'MERN Stack Web Applications',
    shortDesc: 'Full-stack applications with modern architecture.',
    description: 'Powerful web applications built with MongoDB, Express, React, and Node.js. Scalable solutions designed to handle growth while maintaining excellent performance.',
    features: [
      'React.js frontend',
      'Node.js & Express backend',
      'MongoDB database',
      'RESTful API design',
      'JWT authentication',
      'Real-time capabilities'
    ],
    benefits: [
      { icon: Code2, text: 'Modern tech stack' },
      { icon: RefreshCw, text: 'Highly scalable' },
      { icon: Lock, text: 'Secure by default' }
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    shortDesc: 'Beautiful interfaces that users love.',
    description: 'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that keep users engaged and drive them toward your goals.',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interactive prototypes',
      'Usability testing',
      'Design handoff documentation'
    ],
    benefits: [
      { icon: Palette, text: 'Stunning visuals' },
      { icon: Smartphone, text: 'Intuitive UX' },
      { icon: BarChart3, text: 'Higher engagement' }
    ],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'performance-security',
    icon: ShieldCheck,
    title: 'Performance & Security Optimization',
    shortDesc: 'Speed optimization and security hardening.',
    description: 'Make your existing website faster and more secure. We audit, optimize, and fortify your site to deliver exceptional performance and protect your business.',
    features: [
      'Performance audit & optimization',
      'Security vulnerability assessment',
      'CDN & caching setup',
      'SSL/HTTPS implementation',
      'Database optimization',
      'Monitoring & alerts'
    ],
    benefits: [
      { icon: Zap, text: 'Faster load times' },
      { icon: Lock, text: 'Enhanced security' },
      { icon: BarChart3, text: 'Better SEO rankings' }
    ],
    gradient: 'from-amber-500 to-yellow-500'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience to create a strategic roadmap.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers create stunning mockups that align with your brand and user expectations.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers bring designs to life with clean, efficient, and scalable code.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support to ensure continued success.'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions That Drive{' '}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              From stunning designs to powerful applications, we deliver comprehensive 
              web solutions tailored to your business needs.
            </p>
            <a
              href="https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceDetailCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'd%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

function ServiceDetailCard({ service, index }) {
  const [ref, isVisible] = useScrollAnimation()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      id={service.id}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? 'visible' : ''}`}
    >
      <div className={`${isEven ? '' : 'lg:order-2'} fade-${isEven ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}>
          <service.icon size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {service.description}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                <Check size={12} className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
        >
          Get Started
          <ArrowRight size={18} />
        </a>
      </div>

      <div className={`${isEven ? '' : 'lg:order-1'} fade-${isEven ? 'right' : 'left'} ${isVisible ? 'visible' : ''}`}>
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-20`}></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
            <div className="space-y-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center`}>
                    <benefit.icon size={24} className={`text-${service.gradient.split('-')[1]}-500`} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref}>
      <div className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
          Our Process
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          How We Work
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          A proven process that delivers results every time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <ProcessCard key={index} step={step} index={index} isVisible={isVisible} />
        ))}
      </div>
    </div>
  )
}

function ProcessCard({ step, index, isVisible }) {
  return (
    <div
      className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-6xl font-bold text-gray-100 dark:text-gray-800 absolute top-4 right-4">
        {step.step}
      </div>
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {step.description}
        </p>
      </div>
    </div>
  )
}
