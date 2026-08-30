import { Link } from "react-router-dom";
import ArticleSection from "../components/ArticleSection";
import Infobox from "../components/Infobox";
import LastEditedFooter from "../components/LastEditedFooter";
import MediaFigure from "../components/MediaFigure";
import ProjectTable from "../components/ProjectTable";
import {
  aLevelResults,
  gcseResults,
  introParagraphs,
  modules,
  profile,
  softSkills,
  technicalSkills,
} from "../data/portfolio";

const moduleYears = [
  { year: "Year 1", label: "First Year Modules", total: "82%" },
  { year: "Year 2", label: "Second Year Modules", total: "78%" },
  { year: "Year 3", label: "Third Year Modules", total: "-" },
];

const italicisedModuleNames = new Set([
  "Vector Calculus",
  "Introduction to Visual Computing",
]);

export default function HomePage() {
  return (
    <>
      <main className="page-shell page-shell--with-footer">
        <article className="article">
        <header className="article-header">
          <h1>{profile.name}</h1>
          <div className="article-tabs">
            <span className="article-tab article-tab--active">Article</span>
            <a href={profile.cv} target="_blank" rel="noreferrer">View CV</a>
          </div>
        </header>

        <p className="hatnote">
          <em>
            &quot;Idris&quot; redirects here. For the British actor, see{" "}
            <a
              href="https://en.wikipedia.org/wiki/Idris_Elba"
              target="_blank"
              rel="noreferrer"
            >
              Idris Elba
            </a>
            .
          </em>
        </p>

        <Infobox />

        <div className="lead">
          <p>
            <strong>{profile.name}</strong>
            {introParagraphs[0]}
          </p>

          {introParagraphs.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <nav className="contents" aria-label="Contents">
          <div className="contents__title">Contents</div>
          <ol>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#references">References</a></li>
          </ol>
        </nav>

        <ArticleSection id="projects" title="Projects">
          <p>
            Idris has worked on a wide range of compelling personal software projects, the majority of which can be viewed on his <a href="https://github.com/idris-p" target="_blank" rel="noreferrer">GitHub profile</a>. His projects enable him to explore how simple concepts can be combined to form advanced and creative systems.
          </p>
          <ProjectTable />
        </ArticleSection>

        <ArticleSection id="career" title="Career">
          <h3>Computacenter</h3>
          <div className="computacenter-figure">
            <MediaFigure
              src="/images/workshop.jpeg"
              alt="Workshop at Computacenter"
              caption="Idris presenting at a workshop in front of students while working with Computacenter."
            />
          </div>
          <p>
            Between July 2025 and July 2026, Idris worked as a Software Developer at <a href="https://en.wikipedia.org/wiki/Computacenter" target="_blank" rel="noreferrer">Computacenter</a> for his university course's year-in-industry. Computacenter is an IT services company that specialises in sourcing and transforming technology and hardware for its customers. The main part of the business focuses on technology sales, however during his placement Idris worked within the Solution Center team; a technical team of developers responsible for building software prototypes and creating innovative demonstrations of emerging technologies.<br></br><br></br>
            During the placement, Idris worked on a range of projects, exposing him to a variety of different technologies. Most notably, he worked on: an automated <a href="https://en.wikipedia.org/wiki/SharePoint" target="_blank" rel="noreferrer">SharePoint</a> translation tool, developed using <a href="https://en.wikipedia.org/wiki/Microsoft_Azure" target="_blank" rel="noreferrer">Azure</a>, <a href="https://en.wikipedia.org/wiki/PowerShell" target="_blank" rel="noreferrer">PowerShell</a>, and <a href="https://en.wikipedia.org/wiki/Microsoft_Power_Automate" target="_blank" rel="noreferrer">Power Automate</a>, with the goal of improving knowledge sharing across international teams; Cece, an interactive virtual human showcasing Computacenter's AI capabilities, using <a href="https://en.wikipedia.org/wiki/Nvidia" target="_blank" rel="noreferrer">NVIDIA</a> Riva, <a href="https://en.wikipedia.org/wiki/Large_language_model" target="_blank" rel="noreferrer">LLMs</a>, <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noreferrer">RAG</a>, the <a href="https://en.wikipedia.org/wiki/Unreal_Engine" target="_blank" rel="noreferrer">Unreal Engine</a> MetaHuman framework, and <a href="https://en.wikipedia.org/wiki/Docker_(software)" target="_blank" rel="noreferrer">Docker</a>; an AI-powered knowledge article generator, using 30,000+ anonymised IT tickets to identify common issues and automatically produce knowledge articles on how to solve them.<br></br><br></br>
            Other software projects Idris worked on worth mentioning include: an AI-powered hardware end-of-service-life retriever, a system load generator in PowerShell that simulates computer usage of various intensities, automated <a href="https://en.wikipedia.org/wiki/Geekbench" target="_blank" rel="noreferrer">Geekbench</a> benchmarking scripts, a machine-learning stock price predictor built with <a href="https://en.wikipedia.org/wiki/PyTorch" target="_blank" rel="noreferrer">PyTorch</a> and MLX to compare the performance of distributed <a href="https://en.wikipedia.org/wiki/Mac_(computer)" target="_blank" rel="noreferrer">Apple Macs</a> against the <a href="https://en.wikipedia.org/wiki/Nvidia_DGX" target="_blank" rel="noreferrer">NVIDIA DGX Spark</a>, and a repository archiver tool.<br></br><br></br>
            His role often extended beyond software development. He regularly worked with <a href="https://en.wikipedia.org/wiki/Computer_hardware" target="_blank" rel="noreferrer">hardware</a> and <a href="https://en.wikipedia.org/wiki/Computer_network" target="_blank" rel="noreferrer">networking</a>, supported his team in preparing for live customer demonstrations, and had opportunities to represent the company at workshops, careers fairs, schools, and technology showcases.
          </p>

          <blockquote className="wiki-quote">
            <p>“Idris has been a valuable member of the team over the last 13 months, and it will be sad to see him go.<br></br>During this time, Idris made a significant impact on several projects. The most notable for me was the work completed on our ticket data. Over 30,000 records were anonymised and then analysed using ServiceNow AI tools to identify common issues. The results were categorised to highlight trends and identify opportunities for new Knowledge Articles. These articles were then created using AI and automation before being translated. This was a complex piece of work and a significant achievement.<br></br>We wish Idris every success in the future.”</p>
            <footer>
              <cite>Manager's Comments</cite>
            </footer>
          </blockquote>

          <h3>A-level Mathematics Tutoring</h3>
          <p>
            During his first two years of study at university, Idris worked part-time as an <a href="https://en.wikipedia.org/wiki/A-level" target="_blank" rel="noreferrer">A-level</a> Mathematics tutor, offering guidance to help students deepen their understanding of subject material. The role formed part of the university's student-led tutoring scheme, which gives students the opportunity to gain teaching experience by assigning them to local sixth-form students. In this position, he demonstrated strong leadership skills and responsibility by helping students improve their exam performance, with more than 80% achieving a better grade than predicted.
          </p>

          <h3>Transport for London</h3>
          <p>
            During the summer of 2024, Idris spent a month doing work experience with <a href="https://en.wikipedia.org/wiki/Transport_for_London" target="_blank" rel="noreferrer">Transport for London</a> (TfL). He collaborated with the Critical Infrastructure Delivery (CID) team, gaining insight into the maintenance and management of London Underground's tube stations and railway lines. He was also introduced to OpSim, a software tool for simulating the operation of timetabled underground trains.
          </p>
        </ArticleSection>

        <ArticleSection id="education" title="Education">
          <h3>The University of Manchester</h3>
          <p>
            Idris studies <strong>Computer Science and Mathematics (BSc Hons)</strong> at <a href="https://en.wikipedia.org/wiki/University_of_Manchester" target="_blank" rel="noreferrer">The University of Manchester</a>, a joint-honours programme.
            He is currently undertaking his third year of study, having completed his first two years with a strong academic record, as well as a year-in-industry with Computacenter. He is expected to graduate in July 2027 with a first-class degree.
          </p>
          {moduleYears.map((moduleYear) => (
            <div className="table-scroll" key={moduleYear.year}>
              <table className="wikitable modules-table">
                <caption>{moduleYear.label}</caption>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Semester</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {modules
                    .filter((module) => module.year === moduleYear.year)
                    .map((module) => (
                      <tr key={module.name}>
                        <td>
                          {italicisedModuleNames.has(module.name) ? (
                            <em>{module.name}*</em>
                          ) : (
                            module.name
                          )}
                        </td>
                        <td>{module.subject}</td>
                        <td>{module.semester}</td>
                        <td>{module.grade}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={3}>TOTAL</th>
                    <td>{moduleYear.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))}

          <p className="modules-table-footnote">
            *Modules in <em>italics</em> were self-studied and not officially assessed.
          </p>

          <h3>Beths Grammar School</h3>
          <p>Idris attended <a href="https://en.wikipedia.org/wiki/Beths_Grammar_School" target="_blank" rel="noreferrer">Beths Grammar School</a> from Year 7 through to Year 13. Most notably, he obtained a clean-sweep of A*s in his A-levels whilst scoring 288/300 in A-level Mathematics. He was awarded the Senior Leadership Award to celebrate his academic success.</p>
          <div className="beths-results-layout">
            <div className="beths-results-layout__tables">
              <section className="beths-results-group" aria-labelledby="a-level-results-title">
                <h4 id="a-level-results-title">A-levels</h4>
                <div className="table-scroll">
                  <table className="wikitable results-table">
                    <thead>
                      <tr><th>Subject</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                      {aLevelResults.map((result, index) => (
                        <tr key={`${result.subject}-${index}`}>
                          <td>{result.subject}</td>
                          <td>{result.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="beths-results-group" aria-labelledby="gcse-results-title">
                <h4 id="gcse-results-title">GCSEs</h4>
                <div className="table-scroll">
                  <table className="wikitable results-table">
                    <thead>
                      <tr><th>Subject</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                      {gcseResults.map((result, index) => (
                        <tr key={`${result.subject}-${index}`}>
                          <td>{result.subject}</td>
                          <td>{result.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <div className="beths-results-layout__figures" aria-label="Beths Grammar School highlights">
                <MediaFigure
                  src="/images/four_a_stars.jpg"
                  alt="Four A*s in A-levels"
                  caption="Idris after achieving A*A*A*A* in his A-levels in 2023."
                />
                <MediaFigure
                  src="/images/sla.jpg"
                  alt="Senior Leadership Award"
                  caption="The Senior Leadership Award."
                />
              </div>
          </div>
        </ArticleSection>

        <ArticleSection id="skills" title="Skills">
          <div className="skills-grid">
            <div>
              <h3>Technical skills</h3>
              <ul>{technicalSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div>
              <h3>Soft skills</h3>
              <ul>{softSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="references" title="References">
          <ol className="references-list">
            <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></li>
            <li><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub profile</a></li>
            <li><a href={profile.cv} target="_blank" rel="noreferrer">Curriculum vitae</a></li>
          </ol>
          <p className="categories">
            <strong>Categories:</strong> <Link to="/">Software developers</Link> · <Link to="/">Computer Science and Mathematics students</Link> · <Link to="/">The University of Manchester students</Link>
          </p>
        </ArticleSection>
        </article>
      </main>
      <LastEditedFooter />
    </>
  );
}
