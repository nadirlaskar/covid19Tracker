(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),r=a(6),n=a.n(r),s=(a(13),a(7)),l=a(1),i=a(2),d=a(4),u=a(3),m=(a(14),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.mainText,o=e.footerText,r=e.color;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"main-text",style:{color:r}},"+ ".concat(a.toLocaleString())),c.a.createElement("div",{className:"footer-text"},"".concat(o.toLocaleString()," total")))}}]),a}(o.Component));function v(e){return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(1)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(1)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(1)+"K":Math.abs(Number(e))}o.Component;var h=function(){var e=Object(o.useState)({activeCases:0,recoveredCases:0,deaths:0,totalActiveCases:0,totalRecoveredCases:0,totalDeaths:0}),t=Object(s.a)(e,2),a=t[0],r=t[1];Object(o.useEffect)((function(){return fetch("https://disease.sh/v3/covid-19/all").then((function(e){e.json().then((function(e){var t=e.cases,a=e.recovered,o=e.deaths,c=e.todayCases,n=e.todayDeaths,s=e.todayRecovered;r({activeCases:c,recoveredCases:s,deaths:n,totalActiveCases:v(t),totalRecoveredCases:v(a),totalDeaths:v(o)})}))})),function(){console.log("unmounted")}}),[]),Object(o.useEffect)((function(){console.log("I am called on update of any depency"),console.log("In this case cases.activeCases")}),[a.activeCases]);var n=a.activeCases,l=a.recoveredCases,i=a.deaths,d=a.totalActiveCases,u=a.totalDeaths,h=a.totalRecoveredCases;return c.a.createElement("div",null,c.a.createElement(m,{color:"rgba(204, 16, 52, 0.64)",title:"Coronavirus Cases",mainText:n,footerText:d}),c.a.createElement(m,{color:"rgba(62, 109, 21, 0.59)",title:"Recovered",mainText:l,footerText:h}),c.a.createElement(m,{color:"rgb(208, 167, 174)",title:"Deaths",mainText:i,footerText:u}),c.a.createElement("h2",{style:{display:"inline-block",color:"rgba(51, 51, 51, 0.2)",margin:"0 32px"}},"Worldwide"))};var b=function(){return c.a.createElement("div",{style:{padding:16}},c.a.createElement("h1",{style:{color:"#3333",margin:18}},"Covid19 Tracker"),c.a.createElement(h,null))};n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7eb96a7e.chunk.js.map