import React from "react";
import Image from "next/image";
import textImage from "../assets/colour-graphic.png";
import { useMediaQuery } from "usehooks-ts";

function Splash() {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <section className="SplashContainer">
      <h1>The best damned festival</h1>
      {/* <div className="text-bg"></div> */}
      {/* <h1>28:13:45:14</h1> */}

      {matches ? <Image src={textImage} className={"smallImage"} width={"1164"} height={"1164"} /> : <Image src={textImage} className={"bigImage"} width={"1164"} height={"1164"} />}
    </section>
  );
}

export default Splash;
