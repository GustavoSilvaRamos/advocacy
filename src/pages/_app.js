import React from "react";

import "../css/tailwind.css";
import "../css/main.css";
import GoogleFonts from "next-google-fonts";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={
          router.route === "/" ? "Exsign Studio" : "%s | Exsign Studio"
        }
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
