// src/app/components/fonts.js
import localFont from "next/font/local";

// Load the font outside of any client components
const myFont = localFont({
  src: "./NeutralFace.ttf",
});

export { myFont };
