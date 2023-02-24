import Navbar from '@/components/navbar'
import Main from '@/components/home'
import Experience from '@/components/techs'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      {/* <Projects /> */}
      <Experience />
    </div>
  )
}
