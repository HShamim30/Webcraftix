import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import WhyChoose from '../components/WhyChoose'
import Portfolio from '../components/Portfolio'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <WhyChoose />
      <Portfolio />
      <CTA />
    </>
  )
}
