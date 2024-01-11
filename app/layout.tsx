"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { useStore } from "zustand";
import "./global.sass";
import { Master } from "./store";

const metadata = {
  title: "Bugra || Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useStore(Master);

  return (
    <html
      lang="en"
      className={`scrollbar-${theme} transition-colors duration-300`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Bugra Isik, Web Development, Next.js, Portfolio"
        />
        <meta
          name="description"
          content="Bu kişisel web sitesinde web geliştirme projelerimi ve deneyimlerimi paylaşıyorum. Projelerimi inceleyin ve benimle iletişime geçmekten çekinmeyin."
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Buğra Işık" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <link
          rel="shortcut icon"
          href="favicon-196x196.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon-180x180.png" />
      </head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
