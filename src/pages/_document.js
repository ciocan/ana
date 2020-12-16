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

          <link
            rel="preload"
            href="/fonts/texgyreadventor-regular-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/texgyreadventor-italic-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/texgyreadventor-bold-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/texgyreadventor-bolditalic-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
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
          <style
            dangerouslySetInnerHTML={{
              __html: `
                      @font-face {
                        font-family: 'tex_gyre_adventor_regular';
                        src: url('/fonts/texgyreadventor-regular-webfont.woff') format('woff');
                        font-display: fallback;
                      }
                      @font-face {
                        font-family: 'tex_gyre_adventor_italic';
                        src: url('/fonts/texgyreadventor-italic-webfont.woff') format('woff');
                        font-display: fallback;
                      }
                      @font-face {
                        font-family: 'tex_gyre_adventor_bold';
                        src: url('/fonts/texgyreadventor-bold-webfont.woff') format('woff');
                        font-display: fallback;
                      }
                      @font-face {
                        font-family: 'tex_gyre_adventor_bold_italic';
                        src: url('/fonts/texgyreadventor-bolditalic-webfont.woff') format('woff');
                        font-display: fallback;
                      }
          
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
