import { ImageResponse } from "next/og";
import { profiles } from "@/content/profile";

const profile = profiles.fa;

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The default fonts Satori ships with have no Arabic/Persian glyph
// coverage, so Persian text would render as blank boxes. We fetch just
// the glyphs actually used (via Google Fonts' `text=` param, which also
// keeps the request tiny) and embed them directly in the generated image.
async function loadPersianFont(text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Vazirmatn:wght@800&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("Could not find a loadable font source for the OG image");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage() {
  const text = `${profile.handle} ${profile.name} ${profile.role} ${profile.affiliation}`;
  const fontData = await loadPersianFont(text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#071416",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(67,234,211,0.25), transparent 55%), radial-gradient(circle at 85% 15%, rgba(67,135,255,0.22), transparent 55%), radial-gradient(circle at 50% 100%, rgba(155,108,255,0.18), transparent 55%)",
        }}
      >
        <div style={{ fontSize: 28, color: "#43EAD3", letterSpacing: 4, display: "flex" }}>
          {profile.handle.toUpperCase()}
        </div>
        <div style={{ marginTop: 24, fontSize: 68, fontFamily: "Vazirmatn", fontWeight: 800, color: "#DCFFF7", display: "flex", maxWidth: 900 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 34, fontFamily: "Vazirmatn", color: "#79AAA4", display: "flex" }}>
          {profile.role} · {profile.affiliation}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Vazirmatn", data: fontData, weight: 800, style: "normal" }] }
  );
}
