import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Fotter from "./components/Fotter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";


function App() {
  return <div className="App ">
    <Navbar/>
    <main>
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="courses">
        <Courses/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="fotter">
        <Fotter/>
      </div>



    </main>
    
   
   
    
  </div>;
}

export default App;