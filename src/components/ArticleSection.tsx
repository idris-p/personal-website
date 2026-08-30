import { useEffect, useState, type ReactNode } from "react";

const mobileSectionQuery = "(max-width: 520px)";

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia(mobileSectionQuery).matches;
}

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function ArticleSection({ id, title, children }: Props) {
  const [isMobile, setIsMobile] = useState(isMobileViewport);
  const [isExpanded, setIsExpanded] = useState(() => !isMobileViewport());
  const contentId = `${id}-section-content`;

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileSectionQuery);
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      setIsExpanded(!event.matches);
    };

    mediaQuery.addEventListener("change", handleViewportChange);
    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  return (
    <section className="article-section" id={id}>
      <h2>
        {isMobile ? (
          <button
            className="article-section__toggle"
            type="button"
            aria-expanded={isExpanded}
            aria-controls={contentId}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            <span
              className={`article-section__arrow${isExpanded ? " article-section__arrow--expanded" : ""}`}
              aria-hidden="true"
            />
            <span>{title}</span>
          </button>
        ) : (
          title
        )}
      </h2>
      <div id={contentId} className="article-section__content" hidden={isMobile && !isExpanded}>
        {children}
      </div>
    </section>
  );
}
