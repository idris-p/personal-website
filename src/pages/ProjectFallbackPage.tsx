import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function ProjectFallbackPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    if (project?.repositoryUrl) {
      window.location.replace(project.repositoryUrl);
    }
  }, [project]);

  if (!project) {
    return (
      <main className="page-shell">
        <article className="article">
          <h1>Project not found</h1>
          <p>The requested project does not exist.</p>
          <p><Link to="/">Return to Idris Popoola</Link></p>
        </article>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <article className="article">
        {project.repositoryUrl ? (
          <p>Redirecting to <a href={project.repositoryUrl}>{project.name} on GitHub</a>…</p>
        ) : (
          <>
            <h1>Project article not available</h1>
            <p><Link to="/">Return to Idris Popoola</Link></p>
          </>
        )}
      </article>
    </main>
  );
}
