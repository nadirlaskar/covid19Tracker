import React, { Component, useState, useEffect } from "react";
import Card from "./Card";
import { formatMillions } from "./utils";
import "./cardList.css";

// Works same as class based component but used hooks
// and effects for life cycle methods
function CardList({ country = "Worldwide" }) {
  // Create a state variable and save it to variables cases and updateCases
  let [cases, updateCases] = useState({
    activeCases: 0,
    recoveredCases: 0,
    deaths: 0,
    totalActiveCases: 0,
    totalRecoveredCases: 0,
    totalDeaths: 0,
  });

  // This effect the serves the same purpouse as componentDidMount of class component
  useEffect(() => {
    let isCountry = country !== "Worldwide";
    let dataSource = isCountry ? "countries" : "all";
    fetch(`https://disease.sh/v3/covid-19/${dataSource}`).then((res) => {
      res.json().then((json) => {
        if (isCountry) {
          json = json.find((x) => x.country == country) ?? cases;
        }
        let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
        updateCases({
          activeCases: todayCases,
          recoveredCases: todayRecovered,
          deaths: todayDeaths,
          totalActiveCases: formatMillions(cases),
          totalRecoveredCases: formatMillions(recovered),
          totalDeaths: formatMillions(deaths),
        });
      });
    });
    return () => {
      // Unmounting
      console.log("unmounted");
    };
  }, []); // note we are not passing an empty array, suggesting it doesn't depend on any values

  // Dummy effect used to show case onUpdate lifecycle hook
  useEffect(() => {
    console.log("I am called on update of any depency");
    console.log("In this case cases.activeCases");
  }, [cases.activeCases]);
  // extarct the values from the state object cases
  const { activeCases, recoveredCases, deaths, totalActiveCases, totalDeaths, totalRecoveredCases } = cases;
  // render card for each information
  return (
    <div className="cardList">
      <h2>
        {country.toUpperCase()}
      </h2>
      <Card
        color="rgba(204, 16, 52, 0.64)"
        title="Coronavirus Cases"
        mainText={activeCases}
        footerText={totalActiveCases}
      />
      <Card
        color="rgba(62, 109, 21, 0.59)"
        title="Recovered"
        mainText={recoveredCases}
        footerText={totalRecoveredCases}
      />
      <Card color="rgb(208, 167, 174)" title="Deaths" mainText={deaths} footerText={totalDeaths} />
    </div>
  );
}

export default CardList;
