import React from "react";
import Image from "next/image";
import textImage from "../assets/colour-graphic.png";

function Splash() {
  return (
    <section className="SplashContainer">
      <h1>The best damned festival</h1>
      {/* <div className="text-bg"></div> */}
      {/* <h1>28:13:45:14</h1> */}

      <Image src={textImage} className={"textImage"} width={"1164"} height={"1164"} />
    </section>
  );
}

export default Splash;
