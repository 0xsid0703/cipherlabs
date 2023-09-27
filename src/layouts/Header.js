/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import DexLogo from "../assets/imgs/dex-logo.svg";
import Logo from "../assets/imgs/logo.svg";
import CipherLabsLogo from "../assets/imgs/CipherLabs.svg";
import Menu from "../assets/imgs/menu.svg";
import Close from "../assets/imgs/close.svg";

import clsx from "clsx";

const Header = () => {
  const [curTab, setCurTab] = useState(2);
  const [toggle, setToggle] = useState(false)
  const [isGreater, setIsGreater] = useState(
    window.innerHeight > window.innerWidth ? true : false
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerHeight > window.innerWidth) setIsGreater(true);
      else setIsGreater(false);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const ref = useRef();
  const ref1 = useRef();

  useEffect(() => {
    if (!toggle) {
      ref.current.style.transform =
        "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      ref.current.style.opacity = 1;
      ref.current.style["transform-style"] = "preserve-3d";

      ref1.current.style.transform =
        "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      ref1.current.style.opacity = 0;
      ref1.current.style["transform-style"] = "preserve-3d";
      // sleep (1)
      // document.getElementById("menu").style.display = "none"
    } else {
      ref.current.style.transform =
        "translate3d(0px, 0px, 0px) scale3d(100, 100, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      ref.current.style.opacity = 1;
      ref.current.style["transform-style"] = "preserve-3d";

      ref1.current.style.transform =
        "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      ref1.current.style.opacity = 1;
      ref1.current.style["transform-style"] = "preserve-3d";
      // sleep (1)
      // document.getElementById("menu").style.display = "block"
    }
  }, [toggle]);
  return (
    <div className="">
      <header className="flex flex-row justify-between px-5 py-5 border-b border-[#454258] bg-[#171722]">
        <Link to="/" className="w-[20%] flex flex-row items-center gap-[14px] self-center hover:cursor-pointer">
          <img src={Logo} />
          <img src={CipherLabsLogo} />
        </Link>
        <img src={DexLogo} />
        <div className="w-[20%] flex flex-row items-center justify-end">
          <img className="hover:cursor-pointer" src={Menu} onClick={() => setToggle(!toggle)} />
        </div>
      </header>
      <div
        className={clsx(
          "absolute z-[9] left-0 right-0 bottom-0 w-screen h-screen bg-primary",
          toggle === false ? "invisible" : "visible"
        )}
        ref={ref1}
        id="menu1"
        style={{
          top: "-100vh",
          transitionProperty: "opacity",
          transitionDuration: "1s",
        }}
      >
        <img
          className="absolute top-[26px] right-6 lg:right-[27px] 2xl:right-[29px] hover:cursor-pointer"
          src={Close}
          onClick={() => setToggle(!toggle)}
        />
        <div className="flex flex-col justify-center px-1 py-1 h-full">
          <Link
            to="/dydx/v3/volumn"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
            style={{
              textShadow: "0px 0px 100px #000",
              transformStyle: "preserve-3d",
              opacity: toggle ? 1 : 0,
              transform: toggle
                ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transitionProperty: "transform, opacity",
              transitionDuration: "1s",
              transitionDelay: toggle ? "1s" : "0s",
            }}
          >
            dYdX
          </Link>
          <Link
            to="/about-us"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
            style={{
              textShadow: "0px 0px 100px #000",
              transformStyle: "preserve-3d",
              opacity: toggle ? 1 : 0,
              transform: toggle
                ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transitionProperty: "transform, opacity",
              transitionDuration: "1s",
              transitionDelay: toggle ? "1s" : "0s",
            }}
            onClick={() => setToggle(!toggle)}
          >
            About Us
          </Link>
          <Link
            to="/terms-of-use"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
            style={{
              textShadow: "0px 0px 100px #000",
              transformStyle: "preserve-3d",
              opacity: toggle ? 1 : 0,
              transform: toggle
                ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transitionProperty: "transform, opacity",
              transitionDuration: "1s",
              transitionDelay: toggle ? "1s" : "0s",
            }}
            onClick={() => setToggle(!toggle)}
          >
            Terms Of Use
          </Link>
          <Link
            to="/privacy-policy"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
            style={{
              textShadow: "0px 0px 100px #000",
              transformStyle: "preserve-3d",
              opacity: toggle ? 1 : 0,
              transform: toggle
                ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transitionProperty: "transform, opacity",
              transitionDuration: "1s",
              transitionDelay: toggle ? "1s" : "0s",
            }}
            onClick={() => setToggle(!toggle)}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div
        className="fixed z-[7] rounded-full bg-primary"
        style={{
          left: "auto",
          top: isGreater ? "-1.5vh" : "-1.5vw",
          right: isGreater ? "-1.5vh" : "-1.5vw",
          bottom: "auto",
          width: isGreater ? "3vh" : "3vw",
          height: isGreater ? "3vh" : "3vw",
          transitionProperty: "transform, opacity",
          transitionDuration: "0.5s",
          transitionDelay: toggle ? "0s" : "1s",
        }}
        ref={ref}
      ></div>
    </div>
  )
}

export default Header