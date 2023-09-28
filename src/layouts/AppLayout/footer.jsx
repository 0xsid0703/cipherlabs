import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center w-full border-t border-header px-[22px] py-5 backdrop-blur-[2px] bg-header">
      <a
        href="https://www.linkedin.com/company/cipher-labs-xyz"
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-6 h-6 bg-[url('/imgs/landing/linkedin.svg')] hover:bg-[url('/imgs/landing/hover-linkedin.svg')]"></div>
      </a>
      <div className="flex flex-row gap-4">
        <Link to="/terms-of-use">
          <p className="text-sm font-medium text-footer hover:text-secondary">
            Terms Of Use
          </p>
        </Link>
        <p className="text-sm font-medium text-[#667085]">•</p>
        <Link to="/privacy-policy">
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
        <div className="w-6 h-6 bg-[url('/imgs/landing/twitter.svg')] hover:bg-[url('/imgs/landing/hover-twitter.svg')]"></div>
      </a>
    </footer>
  );
};

export default Footer;
