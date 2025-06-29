
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import img from"./assets/download.png"
import SearchByName from "./components/SearchByName/SearchByName";
import JoinUs from "./components/JoinUs/JoinUs";
import CheckBox from "./components/CheckBox/CheckBox";
import MovieSliders from "./components/MovieSliders/MovieSliders";
import Cards from'./components/Cards/Cards'
export default function App() {
  return (
    <>

      <Navbar />
      <img className="w-full" src={img} alt="" />
      <SearchByName/>
      <MovieSliders/>
      <MovieSliders/>
      <JoinUs/>
      <Footer/>
      

    </>
  );
}
