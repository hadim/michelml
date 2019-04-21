import Head from "next/head";
import assetUrl from "../utils/assetUrl";

const GenericHead = ({ name }) => (
  <Head>
    <title>Michel ML - {name}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={assetUrl("static/favicons/apple-touch-icon.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={assetUrl("static/favicons/favicon-32x32.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={assetUrl("static/favicons/favicon-16x16.png")}
    />
    <link rel="manifest" href={assetUrl("static/favicons/site.webmanifest")} />
    <link
      rel="mask-icon"
      href={assetUrl("static/favicons/safari-pinned-tab.svg")}
      color="#0078d7"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="theme-color" content="#fff" />
    <link rel="preload" href={assetUrl("static/styles.css")} as="style" />
    <link rel="stylesheet" href={assetUrl("static/styles.css")} />
    <script
      defer
      src="https://www.googletagmanager.com/gtag/js?id=UA-138306187-1"
    />
    <script src={assetUrl("static/google_analytics.js")} />
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script src={assetUrl("static/google_ads.js")} />
  </Head>
);

export default GenericHead;
