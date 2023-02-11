import Navbar from '@/components/navbar'
import Main from '@/components/home'
import Experience from '@/components/social'
import About from '@/components/about'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Experience />
    </div>
  )
}
