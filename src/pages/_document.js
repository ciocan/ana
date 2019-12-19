import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

import 'normalize.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
      <html lang="en">
        <Head>
          <style>{`
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-size: 100%;
            }
          `}</style>
          <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="256x256" href="/ana.png" />
          <link rel="apple-touch-icon" href="/ana.png" />
          <meta name="theme-color" content="#2F4858" />
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
      </html>
    )
  }
}
