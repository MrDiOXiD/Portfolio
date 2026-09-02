import { ImageResponse } from "next/og";
import { profiles } from "@/content/profile";

const profile = profiles.en;

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// English text is plain Latin script — Satori's default fonts cover it,
// so unlike the fa version we skip the external Google Fonts fetch
// entirely. Faster to generate, no network dependency.
export default function OpengraphImage() {
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
        <div style={{ marginTop: 24, fontSize: 68, fontWeight: 800, color: "#DCFFF7", display: "flex", maxWidth: 900 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 34, color: "#79AAA4", display: "flex" }}>
          {profile.role} · {profile.affiliation}
        </div>
      </div>
    ),
    size
  );
}
