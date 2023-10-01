/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'

import Link from "../../components/Link"

const linkedinIcon = "/assets/imgs/landing/linkedin.svg";
const hover_linkedinIcon = "/assets/imgs/landing/hover-linkedin.svg";
const twitterIcon = "/assets/imgs/landing/twitter.svg";
const hover_twitterIcon = "/assets/imgs/landing/hover-twitter.svg";

const Footer = () => {
  
  const [hoverLink, setHoverLink] = useState (false)
  const [hoverX, setHoverX] = useState (false)

  return (
    <footer className="flex flex-row justify-between items-center w-full">
      <a
        href="https://www.linkedin.com/company/cipher-labs-xyz"
        target="_blank"
        rel="noreferrer"
      >
        {/* <div className="w-6 h-6 bg-[url('/imgs/landing/linkedin.svg')] hover:bg-[url('/imgs/landing/hover-linkedin.svg')]"></div> */}
        <img 
          className="w-6 h-6"
          src={hoverLink?hover_linkedinIcon:linkedinIcon}
          onMouseEnter={() => setHoverLink (true)}
          onMouseLeave={() => setHoverLink (false)}
        />
      </a>
      <div className="flex flex-row gap-4">
        <Link to="/terms-of-use" className="cursor-pointer">
          <p className="text-sm font-medium text-footer hover:text-secondary">
            Terms Of Use
          </p>
        </Link>
        <p className="text-sm font-medium text-[#667085]">•</p>
        <Link to="/privacy-policy" className="cursor-pointer">
          <p className="text-sm font-medium text-footer hover:text-secondary">
            Privacy Policy
          </p>
        </Link>
      </div>
      <a
        href="https://twitter.com/cipherlabsxyz"
        target="_blank"
        rel="noreferrer"
      >
        {/* <div className="w-6 h-6 bg-[url('/imgs/landing/twitter.svg')] hover:bg-[url('/imgs/landing/hover-twitter.svg')]"></div> */}
        <img 
          className="w-6 h-6"
          src={hoverX?hover_twitterIcon:twitterIcon}
          onMouseEnter={() => setHoverX (true)}
          onMouseLeave={() => setHoverX (false)}
        />
      </a>
    </footer>
  );
};

export default Footer;
