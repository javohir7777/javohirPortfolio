import { Fragment,useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import "./Projects.css";
import { ProjectList } from "../../data/projectsList";
import Cards from "../../components/card/Cards";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <h1 className="text-center mt-5 mb-5 fw-bold">
            {" "}
            My Personal Projects
          </h1>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              {ProjectList.map((project, idx) => {
                return (
                  <Cards
                    id={idx}
                    name={project.name}
                    image={project.image}
                    link={project.link}
                    skills={project.skills}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Projects;
