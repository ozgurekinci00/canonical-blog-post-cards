import { parseContent } from "./parseContent";

export function PostComponent({ item }) {
  const { link, image, title, author, authorLink, header, headerLink, date } =
    parseContent(item);

  return (
    <div className="col-4 p-card--highlighted">
      <header>
        <a href={headerLink}>
          <h5>{header}</h5>
        </a>
      </header>
      <hr className="is-muted" />

      <a href={link}>
        <img src={image} alt="Article" />
      </a>
      <div className="p-heading-container">
        <h3 className="p-heading--4">
          <a href={link}>{title}</a>
        </h3>
      </div>
      <em>
        By <a href={authorLink}>{author}</a> on {date}
      </em>

      <hr className="is-muted" />
      <p>Article</p>
    </div>
  );
}
