import { Fragment } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";

const technologyLinks: Record<string, string> = {
  TypeScript: "https://en.wikipedia.org/wiki/TypeScript",
  "HTML Canvas": "https://en.wikipedia.org/wiki/Canvas_element",
  React: "https://en.wikipedia.org/wiki/React_(software)",
  "C++": "https://en.wikipedia.org/wiki/C%2B%2B",
  raylib: "https://en.wikipedia.org/wiki/Raylib",
  "Node.js": "https://en.wikipedia.org/wiki/Node.js",
  "Tailwind CSS": "https://en.wikipedia.org/wiki/Tailwind_CSS",
  Python: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  FastAPI: "https://en.wikipedia.org/wiki/FastAPI",
  Docker: "https://en.wikipedia.org/wiki/Docker_(software)",
  Java: "https://en.wikipedia.org/wiki/Java_(programming_language)",
  Firebase: "https://en.wikipedia.org/wiki/Firebase",
  "React Native": "https://en.wikipedia.org/wiki/React_Native",
  Tkinter: "https://en.wikipedia.org/wiki/Tkinter",
  PIL: "https://en.wikipedia.org/wiki/Python_Imaging_Library",
  NumPy: "https://en.wikipedia.org/wiki/NumPy",
};

const descriptionLinks: Record<string, string> = {
  "London Underground": "https://en.wikipedia.org/wiki/London_Underground",
  "Super Mario Bros.": "https://en.wikipedia.org/wiki/Super_Mario_Bros.",
  pseudocode: "https://en.wikipedia.org/wiki/Pseudocode",
  "Formula One": "https://en.wikipedia.org/wiki/Formula_One",
  chess: "https://en.wikipedia.org/wiki/Chess",
};

const linkedDescriptionTerms = new RegExp(
  `(${Object.keys(descriptionLinks).map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

function ProjectDescription({ description }: { description: string }) {
  let chessLinked = false;

  return description.split(linkedDescriptionTerms).map((part, index) => {
    const href = descriptionLinks[part];
    if (part === "chess") {
      if (chessLinked) return part;
      chessLinked = true;
    }

    return href ? (
      <a href={href} target="_blank" rel="noreferrer" key={`${part}-${index}`}>
        {part}
      </a>
    ) : (
      part
    );
  });
}

export default function ProjectTable() {
  const linkedTechnologies = new Set<string>();

  return (
    <div className="table-scroll">
      <table className="wikitable projects-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Technologies</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.slug}>
              <td>
                {project.hasWikiPage ? (
                  <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                ) : project.repositoryUrl ? (
                  <a href={project.repositoryUrl}>{project.name}</a>
                ) : (
                  project.name
                )}
                <img
                  className="project-thumbnail"
                  src={project.thumbnail ?? "/images/projects/project-placeholder.svg"}
                  alt={`${project.name} thumbnail placeholder`}
                />
              </td>
              <td><ProjectDescription description={project.description} /></td>
              <td>
                {project.technologies.map((technology, index) => {
                  const isFirstOccurrence = !linkedTechnologies.has(technology);
                  linkedTechnologies.add(technology);
                  const href = technologyLinks[technology];

                  return (
                    <Fragment key={technology}>
                      {index > 0 && ", "}
                      {isFirstOccurrence && href ? (
                        <a href={href} target="_blank" rel="noreferrer">
                          {technology}
                        </a>
                      ) : (
                        technology
                      )}
                    </Fragment>
                  );
                })}
              </td>
              <td>{project.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
