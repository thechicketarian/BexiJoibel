import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import About from "./pages/About/index";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectPage from "./pages/Projects/ProjectPage.jsx";

//css
import "./App.css";
import "./index.css";

function App() {
  useEffect(() => {
    console.log(String.raw`
       ___-------___
   _-~~             ~~-_
_-~                     ~-_
/                           \
|   ____               ____   |
|  / __ \   Turtle    / __ \  |
| | /  \ |  Mode On  | /  \ | |
| | \__/ |           | \__/ | |
|  \____/             \____/  |
 \                           /
  ~-_                   _-~
     ~--___       ___--~
           -----~

bx/flo
Engineering × Design × Art
Powered by arroz, plátano, y pollo frito
  `);
  }, []);

  return (
    <BrowserRouter>
    <div className="layout">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
