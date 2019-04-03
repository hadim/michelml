import Head from "next/head";
import assetUrl from "../utils/assetUrl";
import normalize from "../utils/normalizecss";

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
    <style dangerouslySetInnerHTML={{ __html: normalize }} />
  </Head>
);

export default GenericHead;
