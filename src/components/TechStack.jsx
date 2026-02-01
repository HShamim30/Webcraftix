import { useScrollAnimation } from '../hooks/useAnimations'
import { useState, useEffect } from 'react'

const techStack = {
  frontend: [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Next.js', color: '#000000', icon: '▲' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'Tailwind', color: '#06B6D4', icon: '🎨' },
    { name: 'Framer', color: '#0055FF', icon: '✨' },
  ],
  backend: [
    { name: 'Node.js', color: '#339933', icon: '🟢' },
    { name: 'Express', color: '#000000', icon: '🚂' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'PostgreSQL', color: '#4169E1', icon: '🐘' },
    { name: 'GraphQL', color: '#E10098', icon: '◈' },
  ],
  tools: [
    { name: 'Docker', color: '#2496ED', icon: '🐳' },
    { name: 'Git', color: '#F05032', icon: '📦' },
    { name: 'AWS', color: '#FF9900', icon: '☁️' },
    { name: 'Vercel', color: '#000000', icon: '▲' },
    { name: 'Figma', color: '#F24E1E', icon: '🎯' },
  ],
}

export default function TechStack() {
  const [ref, isVisible] = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-primary-500/30 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        ></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="inline-block bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Technology
            </span>
            <br />
            <span className="text-white">We Master</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building digital experiences with the most powerful tools in the industry
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex justify-center gap-4 mb-16">
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/50 scale-110'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Large Featured Card */}
          <div className="col-span-2 row-span-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {activeCategory === 'frontend' ? 'Frontend Excellence' : 
                   activeCategory === 'backend' ? 'Backend Power' : 'Developer Tools'}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {activeCategory === 'frontend' ? 'Creating stunning, responsive interfaces that users love' : 
                   activeCategory === 'backend' ? 'Building robust, scalable server-side solutions' : 
                   'Streamlining development with cutting-edge tools'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {techStack[activeCategory].slice(0, 3).map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Cards */}
          {techStack[activeCategory].map((tech, idx) => (
            <TechCard key={idx} tech={tech} index={idx} />
          ))}

          {/* Stats Card */}
          <div className="col-span-2 lg:col-span-1 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center items-center">
              <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400 text-center">Uptime Guarantee</div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="col-span-2 lg:col-span-1 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center items-center">
              <div className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                &lt;1s
              </div>
              <div className="text-gray-400 text-center">Load Time</div>
            </div>
          </div>
        </div>

        {/* Floating Tech Orbs */}
        <div className="relative h-64 hidden lg:block">
          <FloatingOrb tech={{ name: 'React', icon: '⚛️', color: '#61DAFB' }} style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <FloatingOrb tech={{ name: 'Node', icon: '🟢', color: '#339933' }} style={{ left: '25%', top: '60%', animationDelay: '1s' }} />
          <FloatingOrb tech={{ name: 'Docker', icon: '🐳', color: '#2496ED' }} style={{ left: '45%', top: '30%', animationDelay: '2s' }} />
          <FloatingOrb tech={{ name: 'AWS', icon: '☁️', color: '#FF9900' }} style={{ left: '65%', top: '70%', animationDelay: '0.5s' }} />
          <FloatingOrb tech={{ name: 'MongoDB', icon: '🍃', color: '#47A248' }} style={{ left: '80%', top: '40%', animationDelay: '1.5s' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
        }
      `}</style>
    </section>
  )
}

function TechCard({ tech, index }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative group h-full">
        <div 
          className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: `${tech.color}40` }}
        ></div>
        <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50"
            style={{ backgroundColor: tech.color }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
              {tech.icon}
            </div>
            <div className="text-white font-bold text-lg text-center">
              {tech.name}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1s' }}></div>
        </div>
      </div>
    </div>
  )
}

function FloatingOrb({ tech, style }) {
  return (
    <div
      className="absolute"
      style={{
        ...style,
        animation: `float 6s ease-in-out infinite`,
      }}
    >
      <div className="relative group cursor-pointer">
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"
          style={{ backgroundColor: tech.color }}
        ></div>
        <div className="relative bg-black/50 backdrop-blur-xl rounded-full p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110">
          <div className="text-4xl">{tech.icon}</div>
        </div>
      </div>
    </div>
  )
}