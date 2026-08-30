import { EnlargeableImage } from "./ImageViewer";

type Props = {
  src: string;
  alt: string;
  caption: string;
};

export default function MediaFigure({ src, alt, caption }: Props) {
  return (
    <figure className="media-figure" style={{ textAlign: "center" }}>
      <EnlargeableImage
        src={src}
        alt={alt}
        caption={caption}
        style={{ width: "auto", display: "block", margin: "0 auto" }}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
