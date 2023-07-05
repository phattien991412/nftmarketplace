import Head from "next/head";
import React from "react";

const SEO = () => {
  return (
    <Head>
      <title>NFT Marketplace</title>
      <meta name="title" content="NFT Marketplace" />
      <meta
        name="description"
        content="What is an NFT? What does NFT stand for? "
      />
      <link rel="icon" href={"/images/logo.webp"} />
      <link rel="apple-touch-icon" href={"/images/logo.webp"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="NFT Marketplace" />
      <meta
        property="og:description"
        content="What is an NFT? What does NFT stand for?"
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="NFT Marketplace" />
      <meta
        property="twitter:description"
        content="What is an NFT? What does NFT stand for?"
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      ></meta>
    </Head>
  );
};

export default SEO;
