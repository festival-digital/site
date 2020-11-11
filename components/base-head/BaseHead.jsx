import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const BaseHead = ({
  title, description, keywords, imageUrl,
  ...ctx
}) => {
  console.log("aqui", ctx, title);
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />

      <meta name="keywords" content={[...keywords, title].join(', ')} />
      <meta name="language" content="en-us" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />
      <meta name="google-site-verification" content="sp0qWcycnK5mTfCpK-jc28N353zHU2nbuPYp5jTCEvE" />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LN2KMNDRQS" />
      <script
        dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LN2KMNDRQS');
        `}}
      />
    </Head>
  );
};

BaseHead.propTypes = {
  keyword: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

BaseHead.defaultProps = {
  keywords: [],
  imageUrl: '',
  description: '',
  title: '',
};

export default BaseHead;