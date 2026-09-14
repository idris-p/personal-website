import { Link } from "react-router-dom";
import ArticleSection from "../../components/ArticleSection";
import { EnlargeableImage } from "../../components/ImageViewer";
import LastEditedFooter from "../../components/LastEditedFooter";
import MediaFigure from "../../components/MediaFigure";

export default function RushHourPage() {
  return (
    <>
      <main className="page-shell page-shell--with-footer">
        <article className="article project-article">
        <header className="article-header">
          <h1>Rush Hour</h1>
          <div className="article-tabs"><Link to="/">Main article</Link></div>
        </header>
        <br />

        <aside className="project-infobox">
          <div className="infobox__title">Rush Hour</div>
          <EnlargeableImage
            src="/images/projects/rush_hour.png"
            alt="The Rush Hour desktop main menu"
            caption="The Rush Hour game main menu."
          />
          <div className="infobox__subtitle">The Rush Hour game main menu</div>
          <div className="infobox__section-title">Information</div>
          <dl className="infobox__facts">
            <div><dt>Year</dt><dd>July 2026</dd></div>
            <div><dt>Technologies</dt><dd>TypeScript, HTML Canvas</dd></div>
          </dl>
          <div className="project-links">
            <a href="https://rush-hour-speedrun.vercel.app" target="_blank" rel="noreferrer">Live site</a>
          </div>
        </aside>

        <p>
          Rush Hour is a <a href="https://en.wikipedia.org/wiki/Speedrunning" target="_blank" rel="noreferrer">speedrunning</a> <a href="https://en.wikipedia.org/wiki/Video_game" target="_blank" rel="noreferrer">video game</a> based on traversing the <a href="https://en.wikipedia.org/wiki/London_Underground" target="_blank" rel="noreferrer">London Underground</a> network. The player must navigate through a series of stations and lines, with the goal of reaching the target station from a source station in the shortest time possible.
        </p>

        <ArticleSection id="motivation" title="Motivation">
          <p>
            The motivation behind Rush Hour was for Idris to create a game that combined his interest in speedrunning with his fascination with London's transport systems. He wanted to create a game that was both challenging and informative, allowing players to learn about the London Underground while also testing their speedrunning skills.
          </p>
        </ArticleSection>

        <ArticleSection id="reception" title="Reception">
          <p>
            The game received mixed feedback from players upon the release of the first prototype. On one hand, many players appreciated the game for its unique concepts and found it be very enjoyable to play. One player even admitted to playing it for several hours on end.
          </p>
          <div className="rush-hour-feedback">
            <MediaFigure
              src="/images/projects/rush_hour_positive.png"
              alt="Positive feedback from a player who enjoyed playing Rush Hour."
              caption="Positive feedback from a player who enjoyed playing Rush Hour."
            />
          </div>
          <p>
            On the other hand, some players found the game's controls to be too difficult and frustrating, particularly when it came to selecting which direction to travel in. This feedback was taken into account and used to improve the game in a future update.
          </p>
          <div className="rush-hour-feedback">
            <MediaFigure
              src="/images/projects/rush_hour_negative.png"
              alt="Negative feedback from a player who found Rush Hour frustrating."
              caption="Negative feedback from a player who found Rush Hour frustrating."
            />
          </div>
        </ArticleSection>

        <ArticleSection id="gallery" title="Gallery">
          <p>Gameplay screenshots:</p>
          <div className="rush-hour-gallery">
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour.png"
                alt="The Rush Hour desktop main menu"
                caption="The game's main menu."
              />
              <figcaption>The game's main menu.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour1.png"
                alt="Rush Hour desktop movement tutorial at Stanmore station"
                caption="The game's tutorial."
              />
              <figcaption>The game's tutorial.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour2.png"
                alt="A timed Rush Hour journey in progress at Euston station"
                caption="Gameplay at Euston station."
              />
              <figcaption>Gameplay at Euston station.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour3.png"
                alt="Rush Hour round completion summary"
                caption="Screenshot after completing a round."
              />
              <figcaption>Screenshot after completing a round.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour4.png"
                alt="A completed Rush Hour route across several Underground lines"
                caption="Reviewing route after completing a round."
              />
              <figcaption>Reviewing route after completing a round.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour5.png"
                alt="Rush Hour final results screen"
                caption="Final results screen."
              />
              <figcaption>Final results screen.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour6.jpeg"
                alt="The Rush Hour mobile main menu"
                caption="The game's main menu on mobile."
              />
              <figcaption>The game's main menu on mobile.</figcaption>
            </figure>
            <figure className="media-figure project-gallery-placeholder">
              <EnlargeableImage
                src="/images/projects/rush_hour7.jpeg"
                alt="Rush Hour mobile movement tutorial"
                caption="The game's tutorial on mobile."
              />
              <figcaption>The game's tutorial on mobile.</figcaption>
            </figure>
          </div>
        </ArticleSection>

        <p><Link to="/">← Back to Idris Popoola</Link></p>
        </article>
      </main>
      <LastEditedFooter />
    </>
  );
}
