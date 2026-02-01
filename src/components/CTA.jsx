import { useScrollAnimation } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmg0djJoMnY0aC0ydjJoLTR2LTJ6bTAtOGgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something That Grows Your Business
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ready to take your online presence to the next level? Let's discuss 
            your project and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890?text=Hi%20Webcraftix!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            We typically respond within a few hours
          </p>
        </div>
      </div>
    </section>
  )
}
