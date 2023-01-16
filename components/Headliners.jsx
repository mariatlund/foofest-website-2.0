import React from "react";
import HeadlinersCard from "./UI-components/HeadlinersCard.jsx";
import MetallicaImg from "../assets/headliners/metallica.webp";
import ToolImg from "../assets/headliners/tool.webp";
import ACDCImg from "../assets/headliners/acdc.webp";

// carousel: https://codepen.io/aybukeceylan/pen/RwrRPoO

function Headliners() {
  return (
    <section className="headliners">
      <h3>Headliners</h3>
      <h5>Fan favourites</h5>
      {/* <div className="headliners-container">
        <HeadlinersCard src={MetallicaImg} alt={"Metallica"} bandName={"Metallica"} day={"Day 7"} descr={"After releasing their new single “Lux Æterna”, the iconic metal band is back."} />
        <HeadlinersCard src={ToolImg} alt={"Tool"} bandName={"Tool"} day={"Day 2"} descr={"Returning with their latest album “Fear Inoculum”, Tool will take the stage."} />
        <HeadlinersCard src={ACDCImg} alt={"AC/DC"} bandName={"AC/DC"} day={"Day 5"} descr="The rock legends are back again after their 2020 revival with their album “POWER UP”." />
      </div> */}
      {/* <div className="carousel"> */}
      <div className="container">
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" checked />
        <input type="radio" name="slider" id="item-3" checked />

        <div className="cards">
          <label className="card" for="item-1" id="song-1">
            <img src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/12/mfn-tool.jpg" alt="song" />
            <h2>Tool</h2>
            <iframe
              title="Tool - The Pot"
              src="https://open.spotify.com/embed/track/1lATXTBJDHwawvT1UfxWu3?utm_source=generator&theme=0"
              width="90%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </label>
          <label className="card" for="item-2" id="song-2">
            <img src="https://www.rollingstone.com/wp-content/uploads/2020/10/10025-01E-JC-white_group_4559_sRGB.jpg?w=1581&h=1054&crop=1" alt="song" />
            <h2>AC/DC</h2>
            <iframe
              title="AC/DC - Back In Black"
              src="https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj?utm_source=generator&theme=0"
              width="90%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </label>
          <label className="card" for="item-3" id="song-3">
            <img src="https://www.billboard.com/wp-content/uploads/2020/05/03-metallica-press-2018-cr-Ross-Halfin-b-billboard-1548-1589834861.jpg" alt="song" />
            <h2>Metallica</h2>
            <iframe
              title="Metallica - Nothing Else Matters"
              src="https://open.spotify.com/embed/track/0nLiqZ6A27jJri2VCalIUs?utm_source=generator&theme=0"
              width="90%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </label>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Headliners;
