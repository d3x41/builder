import React from 'react';
import { builder } from '@builder.io/react';

// Replace with your Public API Key
builder.init('YOUR_API_KEY');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
