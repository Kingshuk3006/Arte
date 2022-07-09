import Article from '../components/Home/Article/Article'
import Artwork from '../components/Home/Artwork'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero/Hero'
import Nearyou from '../components/Home/Nearyou'
import Referenes from '../components/Home/Referenes'
import Tutorial from '../components/Home/Tutorial'

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden bg-[#0F0F0F]'>
    <Hero/>
    <Article/>
    <Nearyou/>
    <Referenes/>
    <Artwork/>
    <Tutorial/>
    <Footer/>
    </div>
  )
}
