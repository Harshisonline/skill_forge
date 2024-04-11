"use client";
import "@styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import ProfileButton from "./ProfileButton";
const Header = () => {
  const isUserLoggedIn = true;
  return (
    <div>
      <header>
        {/* <Image src="./public/Logo.svg" alt="logo" width="100" height="100" /> */}
        <div>
          <svg
            className="logo"
            width="162"
            height="63"
            viewBox="0 0 162 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.321064 31.376V26.48H5.84106V27.44L9.05706 30.176V24.464L0.321064 19.472V8.72L1.80906 6.8H13.0891L14.9131 9.056V13.952H9.05706V12.224H5.84106V16.88L14.9131 21.68V31.376L7.04106 36.704L0.321064 31.376ZM22.4104 16.88L25.6264 14.96V6.8H31.4824V17.504L27.7384 19.568L31.4824 21.68V30.896L25.6264 35.168V24.464L22.4104 22.448V34.88L16.8904 31.376V6.8H22.4104V16.88ZM33.5078 6.8H39.3638V30.896L33.5078 35.168V6.8ZM33.5078 5.552V0.559996H39.3638V5.552H33.5078ZM46.8784 27.488L50.0944 30.224V24.896H55.9504V30.896L48.0304 36.704L41.3584 31.376V6.8H46.8784V27.488ZM63.4947 27.488L66.7107 30.224V24.896H72.5667V30.896L64.6467 36.704L57.9747 31.376V6.8H63.4947V27.488Z"
              fill="white"
            />
            <path
              d="M85.5286 35.792L80.0086 31.376V9.104L82.0726 6.8H92.4406L94.6006 8.96V15.68H88.7446V12.512H85.5286V17.216H88.6486V23.072H85.5286V35.792ZM109.01 6.8L111.17 8.96V30.896L103.25 36.704L96.5779 31.376V9.104L98.6419 6.8H109.01ZM102.098 12.512V27.488L105.314 30.224V12.512H102.098ZM125.915 6.8L127.739 9.056V17.504L123.995 19.568L127.739 21.68V31.376L121.883 35.168V24.464L118.667 22.448V35.36L113.147 31.376V8.72L114.635 6.8H125.915ZM118.667 12.224V16.88L121.883 14.96V12.224H118.667ZM138.453 25.712H136.389V20.576H144.309V30.896L136.389 36.704L129.717 31.376V9.104L131.781 6.8H142.149L144.309 8.96V15.68H138.453V12.512H135.237V27.488L138.453 30.224V25.712ZM151.806 23.072V27.488L155.022 30.224V24.896H160.878V30.896L152.958 36.704L146.286 31.376V9.104L148.35 6.8H158.718L160.878 8.96V15.68H155.022V12.512H151.806V17.216H154.926V23.072H151.806Z"
              fill="#F44336"
            />
          </svg>
        </div>
        <div>{isUserLoggedIn ? <ProfileButton /> : <></>}</div>
      </header>
    </div>
  );
};

export default Header;