import Head from "next/head";

const PwaHead: React.FC = () => (
  <Head>
    <link rel="manifest" href="/manifest.json" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
    />
    <meta name="application-name" content="RIV.THINGS" />
    <meta name="theme-color" content="#101010" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="RIV.THINGS" />
    <link
      rel="apple-touch-icon"
      href="/icons/maskable/maskable_icon_x192.png"
    />
  </Head>
);

export default PwaHead;
