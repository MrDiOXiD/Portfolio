// A 16×20 solid-tone PNG, base64-inlined — used as the `blurDataURL` for
// every next/image with `placeholder="blur"`. Costs ~100 bytes inline in
// the HTML (no network request) and prevents the "blank box → pop" flash
// while the real (WebP) image streams in.
export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAIAAAALACogAAAAG0lEQVR4nGPk0tRgIAUwkaR6VMOohlENdNYAAKv7AINJ18OfAAAAAElFTkSuQmCC";
