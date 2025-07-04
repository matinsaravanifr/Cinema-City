
import Navbar from '../../components/Navbar/Navbar'
import ActorInfo from '../../components/ActorInfo/ActorInfo'
import MovieSliders from '../../components/MovieSliders/MovieSliders'
import ActorSlider from '../../components/ActorSlider/ActorSlider'
import Footer from '../../components/Footer/Footer'

export default function ActorPage() {
  return (
    <>
    <Navbar position="static"/>
    <ActorInfo/>
    <MovieSliders />
    <MovieSliders />
    <ActorSlider/>
    <Footer/>
    </>
  )
}
