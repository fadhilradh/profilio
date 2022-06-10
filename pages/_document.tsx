import Document, { Head, Html, Main, NextScript } from 'next/document'

class BaseDocument extends Document {
  // Server-rendered, non-interactive
  render() {
    return (
      <Html>
        <Head>
          {process.env.GA_ENABLED === 'true' && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
            ></script>
          )}
          {process.env.GA_ENABLED === 'true' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.GA_ID}', {
                      page_path: window.location.pathname
                    });
                  `,
              }}
            />
          )}
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BaseDocument
