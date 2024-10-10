// src/app/components/fonts.js
import localFont from "next/font/local";

// Load the font outside of any client components
const NeutralFace = localFont({
  src: "../fonts/NeutralFace.ttf",
});

const NeutralFaceBold = localFont({
  src: "../fonts/NeutralFaceBold.ttf",
});

const Furore = localFont({
  src: "../fonts/Furore.otf",
});

const Nikea = localFont({
  src: "../fonts/NIKEA.otf",
});

const FontspringBold = localFont({
  src: "../fonts/FontspringBold.otf",
});

const Bitsumishi = localFont({
  src: "../fonts/Bitsumishi.otf",
});

const BunkenTechSansProMed = localFont({
  src: "../fonts/BunkenTechSansPro-Med.ttf",
});

const BunkenTechSansProLight = localFont({
  src: "../fonts/BunkenTechSansPro-Light.ttf",
});

const Thedus = localFont({
  src: "../fonts/Thedus-Wide.otf",
});

const ThedusLight = localFont({
  src: "../fonts/Thedus-CondensedLight.otf",
});

export {
  NeutralFace,
  NeutralFaceBold,
  Nikea,
  Furore,
  FontspringBold,
  Bitsumishi,
  BunkenTechSansProMed,
  BunkenTechSansProLight,
  Thedus,
  ThedusLight,
};
