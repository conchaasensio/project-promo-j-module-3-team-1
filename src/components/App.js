import React from "react";
import "../stylesheets/common/_app.scss";
// import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/card" component={Card} />
      </Switch>
    </div>
  );
}
// const [data, setData] = useState({});
// useEffect(() => {
//   // hacemos la llamada al servidor
//   fetch("https://api.rand.fun/number/integer")
//     .then((response) => response.json())
//     .then((responseData) => {
//       // y cuando responde el servidor guardamos los datos en el estado
//       setData(responseData);
//     });
// }, []); // y con este array vacío le decimos a React que solo ejecute este useEffect una vez

// return <div>Número aleatorio: {data.result}</div>;

export default App;
