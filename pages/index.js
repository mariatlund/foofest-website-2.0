import Splash from "../components/Splash";
import Lineup from "../components/Lineup";
import Headliners from "../components/Headliners";
import { useState } from "react";

export default function Home(props) {
  const lineup = props.lineupData;
  // filter and sort settings
  const [lineupSettings, setLineupSettings] = useState({
    filterBy: "all",
    sortBy: "none",
    activeArray: lineup,
  });

  // add each band genre to an array
  let allGenres = [];
  lineup.forEach((band) => {
    allGenres.push(band.genre);
  });
  // remove duplicates
  let genres = [];
  allGenres.forEach((item) => {
    if (!genres.includes(item)) {
      genres.push(item);
    }
  });

  // FILTERING
  function setFilter(event) {
    const filter = event.target.value;
    setLineupSettings({ ...lineupSettings, filterBy: filter });
    console.log("setFilter:", filter);
    filterList();
  }

  function filterList() {
    let filteredLineup = [];
    lineup.forEach((band) => {
      if (band.genre === lineupSettings.filterBy) {
        filteredLineup.push(band);
      }
    });
    setLineupSettings({ ...lineupSettings, activeArray: filteredLineup });
  }

  return (
    <>
      <Splash />
      <Headliners />
      <Lineup lineup={props.lineupData} setFilter={setFilter} activeArray={lineupSettings.activeArray} />
    </>
  );
}

// FETCHING LINEUP DATA
export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/bands");
  const lineupData = await res.json();
  return {
    props: { lineupData },
  };
}

/*
// FETCTHING AREA DATA
export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/available-spots");
  const areaData = await res.json();
  return {
    props: { areaData },
  };
}
*/
