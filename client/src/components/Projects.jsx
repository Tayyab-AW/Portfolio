import Card from "./Card";
import { projects } from "../data/Projects";

const Projects = () => {

  return (
    <section
      id="projects"
      className="project py-[80px] lg:py-[150px] bg-primary"
    >
      <div className="container max-w-[1070px] px-[17px] m-auto md:px-[40px]">
        <div className="project-content flex flex-col m-0 p-0 items-center text-center lg:items-start">
          <p className="mb-[10px] text-[17px] font-bold uppercase text-[#147efb]">
            portfolio
          </p>
          <h3 className="mb-[60px] text-[25px] font-bold">
            Each project is a unique piece of development 🧩
          </h3>
          <div className="projects-grid flex flex-col gap-x-[50px] gap-y-[50px] items-center">
            {projects.map((project) => (
              // Only do this if items have no stable IDs
              <Card
                key={project.index}
                techStack={project.techStack}
                projectHosting={project.Hosting}
                projectImg={project.Img}
                projectName={project.Name}
                projectDate={project.Date}
                projectDescription={project.Description}
                repoName={project.repoName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
