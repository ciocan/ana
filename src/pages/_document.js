import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            html { height: 100%; }
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-size: 100%;
              min-height: 100%;

              @font-face {
                font-family: "TeX Gyre Regular";
                src: url("/fonts/texgyreadventor-regular.otf") format("opentype");
              }
              @font-face {
                font-family: "TeX Gyre Italic";
                src: url("/fonts/texgyreadventor-italic.otf") format("opentype");
              }
              @font-face {
                font-family: "TeX Gyre Bold";
                src: url("/fonts/texgyreadventor-bold.otf") format("opentype");
              }
              @font-face {
                font-family: "TeX Gyre Bold Italic";
                src: url("/fonts/texgyreadventor-bolditalic.otf") format("opentype");
              }
            }
          `}</style>
          <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="256x256" href="/ana.png" />
          <link rel="apple-touch-icon" href="/ana.png" />
          <meta name="theme-color" content="#2F4858" />
          <meta name="application-name" content="AnaState.com" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-startup-image" href="/ana.png" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
