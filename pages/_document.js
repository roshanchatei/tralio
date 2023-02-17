import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="Tralio" content="One place stop for all portfolio solutions" />
        <meta charSet="utf-8" />
        <link rel="icon" href="https://i.imgur.com/VfrFwk1.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{margin: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
