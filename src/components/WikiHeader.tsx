import { Link } from "react-router-dom";

export default function WikiHeader() {
  return (
    <header className="wiki-header">
      <div className="wiki-header__inner">
        <Link to="/" className="brand" aria-label="Portfolio home">
          <div>
            <div className="brand__title">
              P<span className="brand__title-middle">ORTFOLI</span>O
            </div>
          </div>
        </Link>

        <div className="wiki-search" role="search">
          <input aria-label="Search portfolio" placeholder="Search Portfolio" readOnly />
          <button type="button">Search</button>
        </div>
      </div>
    </header>
  );
}
