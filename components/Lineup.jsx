import React, { useEffect } from "react";
import LineupMenu from "./UI-components/LineupMenu";
import LineupCard from "./UI-components/LineupCard";

function Lineup(props) {
  // // filter and sort settings
  // const lineupSettings = {
  //   filterBy: "all",
  //   sortBy: "none",
  //   activeArray: props.lineup,
  // };

  // // add each band genre to an array
  // let allGenres = [];
  // props.lineup.forEach((band) => {
  //   allGenres.push(band.genre);
  // });
  // // remove duplicates
  // let genres = [];
  // allGenres.forEach((item) => {
  //   if (!genres.includes(item)) {
  //     genres.push(item);
  //   }
  // });

  // // FILTERING
  // function setFilter(event) {
  //   const filter = event.target.value;
  //   lineupSettings.filterBy = filter;
  //   console.log("setFilter:", filter);
  //   filterList();
  // }

  // function filterList() {
  //   let filteredLineup = [];
  //   props.lineup.forEach((band) => {
  //     if (band.genre === lineupSettings.filterBy) {
  //       filteredLineup.push(band);
  //     }
  //   });
  //   lineupSettings.activeArray = filteredLineup;
  // }
  let lineupTop = [];
  lineupTop = props.lineup.slice(3, 14);
  let lineupMiddle = ["A Perfect Circle", "Tool", "Terminalist", "Raised Fist", "Refused"];
  let lineupBottom = [];
  lineupBottom = props.lineup.slice(16, 36);

  return (
    // <section className="lineup">
    //   <div className="lineup-menu">
    //     <h2>Lineup</h2>
    //     <div className="lineup-menu-actions">
    //       <label htmlFor="filter">Filter</label>
    //       <select name="filter" id="filter" onChange={props.setFilter}>
    //         <option value="All">All</option>
    //         <option value="Rock">Rock</option>
    //         <option value="Hard Rock">Hard Rock</option>
    //         <option value="Heavy Metal">Heavy Metal</option>
    //         <option value="Alternative Rock">Alternative Rock</option>
    //         <option value="Alternative Metal">Alternative Metal</option>
    //         <option value="Grunge">Grunge</option>
    //         <option value="Hardcore Punk">Hardcore Punk</option>
    //       </select>
    //       <label htmlFor="sort">Sort</label>
    //       <select name="sort" id="sort">
    //         <option value="alpha">A-Z</option>
    //         <option value="metal">Z-A</option>
    //       </select>
    //     </div>
    //   </div>
    //   <section className="lineup-list">
    //     <div className="lineup-showing">
    //       <h4>Bands</h4>
    //       <h5>Showing all</h5>
    //     </div>
    //     {props.activeArray.map((band) => (
    //       <LineupCard name={band.name} genre={band.genre} />
    //     ))}
    //   </section>
    // </section>

    <section className="lineup">
      <div className="lineup-showing">
        <h4>Lineup</h4>
        <h5>Featured bands</h5>
      </div>
      <section className="lineup-list">
        <div className="primary-bands">
          {lineupTop.map((band) => (
            <h2>{band.name}</h2>
          ))}
        </div>
        <div className="secondary-bands">
          {lineupMiddle.map((band) => (
            <h3>{band}</h3>
          ))}
        </div>
        <div className="tertiary-bands">
          {lineupBottom.map((band) => (
            <h4>{band.name}</h4>
          ))}
        </div>

        {/* {props.activeArray.map((band) => (
        <LineupCard name={band.name} genre={band.genre} />
      ))} */}
      </section>
    </section>
  );
}

export default Lineup;
