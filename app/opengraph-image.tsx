import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #0f3d73, #0a2c54)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
          tarifly
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#cbd5e1", marginTop: 16 }}>
          viagem no seu ritmo
        </div>
      </div>
    ),
    size,
  );
}
