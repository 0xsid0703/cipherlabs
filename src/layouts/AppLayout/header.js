/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useRouter } from 'next/router'
import Link from "../../components/Link"
import useWindowSize from "../../hooks/useWindowSize";

const logoIcon = "/assets/imgs/landing/logo.svg";
const CipherLabsIcon = "/assets/imgs/landing/CipherLabs.svg";
const menuIcon = "/assets/imgs/landing/menu.svg";
const closeIcon = "/assets/imgs/landing/close.svg";
const dydxIcon = "/assets/imgs/dydx/dydx-icon.svg";
const dydxLogo = "/assets/imgs/dydx/dydx-logo.svg";
const vrtxIcon = "/assets/imgs/vrtx/vrtx-icon.svg"
const vrtxLogo = "/assets/imgs/vrtx/vrtx-logo.png"


import { PATHS } from "../../constant";

export default function Header() {
  const router = useRouter()
  const [toggle, setToggle] = useState(false);
  const size = useWindowSize()
  const [isGreater, setIsGreater] = useState(
    Number(size.height) > Number(size.width) ? true : false
  );
  const [below600, setBelow600] = useState(false)
  const ref = useRef();
  const ref1 = useRef();

  const isDydx = router.pathname.startsWith(PATHS.DYDX)
  const isVRTX = router.pathname.startsWith(PATHS.VRTX)
  const isAnalytics = router.pathname.startsWith(PATHS.ANALYTICS)

  useEffect(() => {
    setBelow600(size.width < 600)
    setIsGreater (Number(size.height) > Number(size.width))
  }, [size.width, size.height])

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
    <>
      <header className={clsx(`fixed flex flex-row justify-between items-center w-full border-b border-header px-[22px] py-5 backdrop-blur-[2px] ${isAnalytics ? "bg-v3-secondary" : "bg-header"}`)}>
        <Link to="/" className="flex flex-row gap-[14px] hover:cursor-pointer w-[10%]">
          <img src={logoIcon} className="min-w-6" />
          {!below600 && <img src={CipherLabsIcon} className="min-w-[124px]" />}
        </Link>
        {isDydx && <img className="cursor-pointer" src={below600 ? dydxLogo : dydxIcon} />}
        {isVRTX && <img className="cursor-pointer" src={below600 ? vrtxLogo : vrtxIcon} />}
        <div className="flex flex-row justify-end w-[10%] h-6 text-right">
          <img
            className="hover:cursor-pointer h-6"
            src={menuIcon}
            onClick={() => setToggle(!toggle)}
          /></div>
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
          src={closeIcon}
          onClick={() => setToggle(!toggle)}
        />
        <div className="flex flex-col justify-center px-1 py-1 h-full">
          <Link
            to="/dydx"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto cursor-pointer"
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
            dYdX
          </Link>
          <Link
            to="/vertex"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto cursor-pointer"
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
            Vertex
          </Link>
          <Link
            to="/about-us"
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto cursor-pointer"
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
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto cursor-pointer"
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
            className="text-accent hover:text-secondary text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto cursor-pointer"
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
      />
    </>
  );
}