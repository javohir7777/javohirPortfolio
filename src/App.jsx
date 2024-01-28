import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/Experience";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import ProjectDisplay from "./pages/project-display/ProjectDisplay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="project/:id" element={<ProjectDisplay />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
