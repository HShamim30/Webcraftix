import { useScrollAnimation } from '../hooks/useAnimations'
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  CheckCircle,
  Zap,
  Shield,
  HeartHandshake
} from 'lucide-react'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Get instant responses',
    value: '+91 9769068742',
    action: 'https://wa.me/9769068742?text=Hi%20Webcraftix!%20I%20would%20like%20to%20discuss%20a%20project.',
    actionText: 'Chat Now',
    gradient: 'from-green-500 to-emerald-500',
    primary: true
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries',
    value: 'webcraftix94@gmail.com',
    action: 'mailto:webcraftix94@gmail.com',
    actionText: 'Send Email',
    gradient: 'from-blue-500 to-cyan-500',
    primary: false
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Direct consultation',
    value: '+91 9769068742',
    action: '+91 9769068742',
    actionText: 'Call Us',
    gradient: 'from-violet-500 to-purple-500',
    primary: false
  }
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, while full web applications can take 4-8 weeks. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'What information do you need to start?',
    answer: 'We need to understand your business goals, target audience, design preferences, and any specific features you require. A brief overview of your brand and competitors also helps us deliver better results.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer maintenance packages that include updates, security patches, performance monitoring, and content changes. We\'re here to support your growth long after launch.'
  },
  {
    question: 'What\'s your payment structure?',
    answer: 'We typically work with a 50% upfront deposit and 50% upon completion. For larger projects, we can arrange milestone-based payments. All payment terms are discussed before starting.'
  }
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' }
]

const benefits = [
  { icon: Zap, text: 'Quick Response Time' },
  { icon: Shield, text: 'Confidential Discussions' },
  { icon: HeartHandshake, text: 'No Commitment Required' }
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind? We'd love to hear about it. 
              Reach out and let's create something amazing together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <benefit.icon size={18} className="text-primary-500" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactMethodsSection />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <WhatsAppCard />
            <InfoCard />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>

      {/* Map / Location Placeholder */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join 50+ businesses that trust Webcraftix with their digital success.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'm%20ready%20to%20start%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Start Your Project Today
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

function ContactMethodsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.action}
          target={method.action.startsWith('http') ? '_blank' : undefined}
          rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl fade-in ${isVisible ? 'visible' : ''} ${
            method.primary 
              ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-transparent text-white' 
              : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-primary-500'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
            method.primary 
              ? 'bg-white/20' 
              : `bg-gradient-to-br ${method.gradient}`
          } text-white`}>
            <method.icon size={28} />
          </div>
          
          <h3 className={`text-xl font-semibold mb-2 ${
            method.primary ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}>
            {method.title}
          </h3>
          
          <p className={`text-sm mb-4 ${
            method.primary ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {method.description}
          </p>
          
          <p className={`font-medium mb-6 ${
            method.primary ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}>
            {method.value}
          </p>
          
          <div className={`inline-flex items-center gap-2 font-semibold ${
            method.primary ? 'text-white' : 'text-primary-600 dark:text-primary-400'
          }`}>
            {method.actionText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>

          {method.primary && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                Recommended
              </span>
            </div>
          )}
        </a>
      ))}
    </div>
  )
}

function WhatsAppCard() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`fade-left ${isVisible ? 'visible' : ''}`}>
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <MessageCircle size={32} />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Chat With Us on WhatsApp
          </h2>
          
          <p className="text-white/90 text-lg mb-8">
            The fastest way to reach us. Get instant responses, discuss your project, 
            and receive a free consultation.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              'Instant response during business hours',
              'Free project consultation',
              'No commitment required',
              'Secure & confidential'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-white/80" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <a
            href="https://wa.me/9769068742?text=Hi%20Webcraftix!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Start WhatsApp Chat
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

function InfoCard() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`space-y-8 fade-right ${isVisible ? 'visible' : ''}`}>
      {/* Business Hours */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white">
            <Clock size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Business Hours
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Monday - Friday</span>
            <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Saturday</span>
            <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Sunday</span>
            <span className="font-medium text-gray-900 dark:text-white">Closed</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          * WhatsApp messages are monitored outside business hours
        </p>
      </div>

      {/* Location */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white">
            <MapPin size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Location
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We work remotely with clients worldwide. Our team is distributed across 
          multiple time zones to provide better support.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Serving clients globally from India, USA, UK, and beyond.
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Follow Us
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300`}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref}>
      <div className={`text-center max-w-3xl mx-auto mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Quick answers to questions you might have.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl fade-in ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
