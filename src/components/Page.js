/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', description = '', twitter='/twitter-image.jpg', ...other }, ref) => (
  <>
    <Head>
      <title>{title}</title>
      
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:url" content="https://www.cipherlabs.xyz" />
      <meta property="og:title" content={title}/>
      <meta property="og:image" content="/assets/opengraph-image.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:image" content={twitter}/>
      <meta
        property="og:description"
        content={description}
      />
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
