import React, { Component, useState, useEffect } from "react";
import Card from "./Card";

// CardList class based component
// This component is not used
export class CardListClass extends Component {
  // Removed
  constructor(props) {
    super(props);
    // useState
    this.state = {
      activeCases: 0,
      recoveredCases: 0,
      deaths: 0,
      totalActiveCases: 0,
      totalRecoveredCases: 0,
      totalDeaths: 0,
    };
  }
  // useEffect
  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/all").then((res) => {
      res.json().then((json) => {
        let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
        // updateState
        this.setState({
          activeCases: todayCases,
          recoveredCases: todayRecovered,
          deaths: todayDeaths,
          totalActiveCases: cases,
          totalRecoveredCases: recovered,
          totalDeaths: deaths,
        });
      });
    });
  }
  // Function Body
  render() {
    const { activeCases, recoveredCases, deaths, totalActiveCases, totalDeaths, totalRecoveredCases } = this.state;
    return (
      <div>
        <Card color="#cc1034" title="Coronavirus Cases" mainText={activeCases} footerText={totalActiveCases} />
        <Card color="#7fd922" title="Recovered" mainText={recoveredCases} footerText={totalRecoveredCases} />
        <Card color="#FA5575" title="Deaths" mainText={deaths} footerText={totalDeaths} />
      </div>
    );
  }
}
// Works same as class based component but used hooks
// and effects for life cycle methods
function CardList() {
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
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all").then((res) => {
        res.json().then((json) => {
          let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
          updateCases({
            activeCases: todayCases,
            recoveredCases: todayRecovered,
            deaths: todayDeaths,
            totalActiveCases: cases,
            totalRecoveredCases: recovered,
            totalDeaths: deaths,
          });
        });
    });
    return ()=>{ // Unmounting
        console.log("unmounted");
    }
  },[]) // note we are not passing an empty array, suggesting it doesn't depend on any values

  // Dummy effect used to show case onUpdate lifecycle hook
  useEffect(()=>{
    console.log("I am called on update of any depency");
    console.log("In this case cases.activeCases");
  },[cases.activeCases])
  // extarct the values from the state object cases
  const { activeCases, recoveredCases, deaths, totalActiveCases, totalDeaths, totalRecoveredCases } = cases;
  // render card for each information
  return (
    <div>
      <Card color="#cc1034" title="Coronavirus Cases" mainText={activeCases} footerText={totalActiveCases} />
      <Card color="rgb(62, 109, 21)" title="Recovered" mainText={recoveredCases} footerText={totalRecoveredCases} />
      <Card color="rgb(199, 39, 70)" title="Deaths" mainText={deaths} footerText={totalDeaths} />
    </div>
  );
}

export default CardList;
