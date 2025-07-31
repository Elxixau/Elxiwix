import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Aboutus from "./components/Aboutus";
import Experience from "./components/experience/Experience";
import AnimatedBackground from "./components/AnimatedBackground";
import ProjectList from "./components/projects/ProjectList";
import Bussiness from "./components/Bussiness";
import Service from "./components/Service";
import Bottom from "./components/Bottom";

export default function App() {
  
    

  return (
    <div className="">
      <AnimatedBackground />
      <Navbar/>
      <Jumbotron />
      <Aboutus />
      <Experience />
      <ProjectList />
      <Bussiness />
      <Service/>
      <Bottom/>
    </div>
  )
}