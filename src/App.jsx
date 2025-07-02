
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import img from"./assets/download.png"
import SearchByName from "./components/SearchByName/SearchByName";
import JoinUs from "./components/JoinUs/JoinUs";
import MovieSliders from "./components/MovieSliders/MovieSliders";
import ActorCard from "./components/ActorCards/ActorCard";
import Home from "./Pages/Home/Home";
import DownlaodPage from "./Pages/DownlaodPage/DownlaodPage";
import ActorSlider from "./components/ActorSlider/ActorSlider";
export default function App() {
  return (
    <>
    {/* <Home/> */}
    <Navbar position="static"/>
    <ActorCard/>
    <DownlaodPage/>
    </>
  );
}
