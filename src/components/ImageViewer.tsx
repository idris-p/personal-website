import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ImgHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type ViewerImage = {
  src: string;
  alt: string;
  caption: string;
};

const ImageViewerContext = createContext<((image: ViewerImage) => void) | null>(null);

export function ImageViewerProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<ViewerImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setImage(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      previousFocusRef.current?.focus();
    };
  }, [image]);

  const openImage = (nextImage: ViewerImage) => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setImage(nextImage);
  };

  return (
    <ImageViewerContext.Provider value={openImage}>
      {children}
      {image && (
        <div
          className="image-viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setImage(null);
          }}
        >
          <div
            className="image-viewer__dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged image"
          >
            <button
              ref={closeButtonRef}
              className="image-viewer__close"
              type="button"
              aria-label="Close enlarged image"
              onClick={() => setImage(null)}
            >
              {"\u00d7"}
            </button>
            <figure className="image-viewer__figure">
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          </div>
        </div>
      )}
    </ImageViewerContext.Provider>
  );
}

type EnlargeableImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> &
  ViewerImage;

export function EnlargeableImage({
  src,
  alt,
  caption,
  className,
  onClick,
  onKeyDown,
  ...props
}: EnlargeableImageProps) {
  const openImage = useContext(ImageViewerContext);

  if (!openImage) {
    throw new Error("EnlargeableImage must be rendered inside ImageViewerProvider.");
  }

  const open = () => openImage({ src, alt, caption });
  const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    onKeyDown?.(event);
    if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      open();
    }
  };

  return (
    <img
      {...props}
      className={["image-viewer__trigger", className].filter(Boolean).join(" ")}
      src={src}
      alt={alt}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Enlarge image: ${alt}`}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) open();
      }}
      onKeyDown={handleKeyDown}
    />
  );
}
