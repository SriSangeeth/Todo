import React from "react";
// import ReactDOM from "react-dom";

function Gn() {
  const dat = new Date(2020, 1, 10, 19);
  const hrs = dat.getHours();
  let timeofday;
  const hstyle = {
    "text-align": "center",
    backgroundColor: "black",
    color: "gold"
  };
  if (hrs < 12) {
    timeofday = "Morning";
    hstyle.color = "red";
  } else if (hrs > 12 && hrs < 16) {
    timeofday = "Afternoon";
  } else if (hrs >= 16 && hrs <= 18) {
    timeofday = "Evening";
    hstyle.color = "yellow";
  } else {
    timeofday = "Night";
    hstyle.color = "darkblue";
  }

  return <h1 style={hstyle}>Good {timeofday}</h1>;
}

export default Gn;
// ReactDOM.render(<Gn />,document.getElementById("root"))
