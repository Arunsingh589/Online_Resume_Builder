import Achievement from "./Home/Achievement"
import Footer from "./Home/Footer"
import Guide from "./Home/Guide"
import Hero from "./Home/Hero"
import Navbar from "./Home/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Resume/About";
import Achievements from "./Resume/Achievements";
import Experience from "./Resume/Experience";
import Education from "./Resume/Education";
import Project from "./Resume/Project";
import Skill from "./Resume/Skill";
import Certificate from "./Resume/Certificate";
import ResumeTemplate from "./Resume/ResumeTemplate";
import ResumeBuilder from "./Resume/ResumeBuilder";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Guide />
              <Achievement />
              <Footer />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              {/* <About />
              <Achievements />
              <Experience />
              <Education />
              <Project />
              <Skill />
              <Certificate /> */}
              {/* <ResumeTemplate /> */}
              <ResumeBuilder />
            </>
          }
        />
      </Routes>

    </Router>
  )
}

export default App
