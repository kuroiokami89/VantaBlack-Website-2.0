// src/app/components/fonts.js
import localFont from "next/font/local";

// Load the font outside of any client components
const NeutralFace = localFont({
  src: "../fonts/NeutralFace.ttf",
});

const NeutralFaceBold = localFont({
  src: "../fonts/NeutralFaceBold.ttf",
});

export { NeutralFace, NeutralFaceBold };
