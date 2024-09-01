"use client";

import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="description"
        content="Vantablack's 3rd project showcasing a modern portfolio."
      />
      <meta name="author" content="Sergio Allushaj" />
      <meta property="og:title" content="Vantablack - Portfolio 3.0" />
      <meta
        property="og:description"
        content="Vantablack's 3rd project showcasing a modern portfolio."
      />
      <meta property="og:image" content="https://example.com/og-image.jpg" />
      <meta property="og:url" content="https://example.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vantablack - Portfolio 3.0" />
      <meta
        name="twitter:description"
        content="Vantablack's 3rd project showcasing a modern portfolio."
      />
      <meta
        name="twitter:image"
        content="https://example.com/twitter-image.jpg"
      />
      <link href="https://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      {/* SMOOTH SCROLL */}
    </Head>
  );
}
