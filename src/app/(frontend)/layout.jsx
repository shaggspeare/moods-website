import React from 'react';
import './index.scss';
import { register } from 'swiper/element/bundle';
import Script from 'next/script';

// register Swiper custom elements
register();

function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      {/* meta begin */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/* meta end */}

      {/* favicon begin */}
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* favicon end */}

      {/* public assets begin */}
      <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
      <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
      <title>Moods</title>
      {/* public assets end */}
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}

export default RootLayout;