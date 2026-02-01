import { useEffect, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const codeLines = [
  { text: '// Building your digital success', color: 'text-gray-500' },
  { text: 'import { Growth, Performance } from "webcraftix";', color: 'text-purple-400' },
  { text: '', color: '' },
  { text: 'const Website = () => {', color: 'text-blue-400' },
  { text: '  const [conversions, setConversions] = useState(0);', color: 'text-cyan-400' },
  { text: '  const [seoRank, setSeoRank] = useState("top");', color: 'text-cyan-400' },
  { text: '', color: '' },
  { text: '  useEffect(() => {', color: 'text-yellow-400' },
  { text: '    // Optimized for growth', color: 'text-gray-500' },
  { text: '    Performance.optimize();', color: 'text-green-400' },
  { text: '    Growth.accelerate();', color: 'text-green-400' },
  { text: '  }, []);', color: 'text-yellow-400' },
  { text: '', color: '' },
  { text: '  return <YourSuccess />;', color: 'text-pink-400' },
  { text: '};', color: 'text-blue-400' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="fade-left visible space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              We Build Websites That{' '}
              <span className="gradient-text">Grow Your Business</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Premium web development for startups and businesses. We craft fast, 
              SEO-optimized websites that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/9769068742?text=Hi%20Webcraftix!%20I'm%20interested%20in%20starting%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
              >
                <Play size={20} />
                View Our Work
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">10</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="fade-right visible relative">
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400 font-mono">your-success.jsx</span>
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-gray-600 select-none">{i + 1}</span>
                    <span className={line.color || 'text-white'}>
                      {line.text}
                      {i === visibleLines - 1 && (
                        <span className="cursor-blink inline-block w-2 h-5 bg-white ml-1 -mb-1"></span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
