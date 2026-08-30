import { profile } from "../data/portfolio";
import { EnlargeableImage } from "./ImageViewer";

export default function Infobox() {
  return (
    <aside className="infobox" aria-label={`${profile.name} summary`}>
      <div className="infobox__title">{profile.name}</div>

      <EnlargeableImage
        className="infobox__image"
        src={profile.headshot}
        alt={`${profile.name} headshot`}
        caption={profile.descriptor}
      />
      <div className="infobox__subtitle">{profile.descriptor}</div>

      <div className="infobox__section-title">Personal information</div>
      <dl className="infobox__facts">
        <div>
          <dt>Full name</dt>
          <dd>{profile.name}</dd>
        </div>
        <div>
          <dt>Based in</dt>
          <dd>
            <a href={profile.basedIn.url} target="_blank" rel="noreferrer">
              {profile.basedIn.label}
            </a>
          </dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{profile.role}</dd>
        </div>
      </dl>

      <table className="infobox-history">
        <tbody>
          <tr>
            <th className="infobox-history__section" colSpan={2}>
              Education
            </th>
          </tr>
          <tr className="infobox-history__columns">
            <th scope="col">Years</th>
            <th scope="col">School</th>
          </tr>
          {[...profile.education].reverse().map((item) => (
            <tr key={`${item.years}-${item.institution}`}>
              <td>{item.years}</td>
              <td>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.institution}
                </a>
              </td>
            </tr>
          ))}

          <tr>
            <th className="infobox-history__section" colSpan={2}>
              Career
            </th>
          </tr>
          <tr className="infobox-history__columns">
            <th scope="col">Years</th>
            <th scope="col">Company</th>
          </tr>
          {[...profile.career].reverse().map((item) => (
            <tr key={`${item.years}-${item.organisation}`}>
              <td>{item.years}</td>
              <td>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.organisation}
                </a>
                <span>{item.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="infobox__socials">
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span> · </span>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span> · </span>
        <a href={profile.links.email}>Email</a>
        <span> · </span>
        <a href={profile.cv} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </aside>
  );
}
