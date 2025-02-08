import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key
builder.init('YOUR_API_KEY');

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Builder.io app!</h1>
      <BuilderComponent model="page" />
    </div>
  );
}

export async function getStaticProps() {
  const pages = await builder.getAll('page', {
    // We only need the data for the first page
    limit: 1,
  });

  return {
    props: {
      pages,
    },
  };
}
