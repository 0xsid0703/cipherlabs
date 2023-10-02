/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', description = '', twitter = '/assets/twitter-image.jpg', ...other }, ref) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />

      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image" content={twitter} key="twitter:image" />

      <meta property="og:url" content="https://www.cipherlabs.xyz" key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content="/assets/opengraph-image.png" key="og:image" />
    </Head>

    {/* <div ref={ref} {...other}> */}
    {children}
    {/* </div> */}
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
