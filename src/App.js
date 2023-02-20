import { Routes, Route } from "react-router-dom";

import Main from "./layout/Main";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import "./assets/style/reset.css";
import "./assets/style/portfolio.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </>
  );
}

export default App;
