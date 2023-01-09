import React from "react";
import Image from "next/image";
import textImage from "../assets/colour-graphic.png";
import { useMediaQuery } from "usehooks-ts";

function Splash() {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <div className="hero">
      <section className="SplashContainer">
        <h1>The best damned festival</h1>
        {matches ? <Image src={textImage} className={"smallImage"} width={"1164"} height={"1164"} /> : <Image src={textImage} className={"bigImage"} width={"1164"} height={"1164"} />}
      </section>
      <div className="hero-text">
        <div className="date-location">
          <h3>January 2023</h3>
          <h2>Copenhagen</h2>
        </div>
        <div className="lineup-sponsor">
          <h4>Headliners & lineup ↓</h4>
          <h5>Sponsored by KEA</h5>
        </div>
      </div>
    </div>
  );
}

export default Splash;
