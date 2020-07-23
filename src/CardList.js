import React, { Component, useState, useEffect } from "react";
import Card from "./Card";

class CardListOld extends Component {
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

function CardList() {
  let [state, updateState] = useState({
    activeCases: 0,
    recoveredCases: 0,
    deaths: 0,
    totalActiveCases: 0,
    totalRecoveredCases: 0,
    totalDeaths: 0,
  });
  // DidMount
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all").then((res) => {
        res.json().then((json) => {
          let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
          updateState({
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
  })
  // on Update
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all").then((res) => {
        res.json().then((json) => {
          let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
          updateState({
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
  },[state.activeCases])

  const { activeCases, recoveredCases, deaths, totalActiveCases, totalDeaths, totalRecoveredCases } = state;
  return (
    <div>
      <Card color="#cc1034" title="Coronavirus Cases" mainText={activeCases} footerText={totalActiveCases} />
      <Card color="#7fd922" title="Recovered" mainText={recoveredCases} footerText={totalRecoveredCases} />
      <Card color="#FA5575" title="Deaths" mainText={deaths} footerText={totalDeaths} />
    </div>
  );
}

export default CardList;
