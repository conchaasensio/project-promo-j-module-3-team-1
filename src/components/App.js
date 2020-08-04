import React from 'react';
import '../stylesheets/common/_app.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Card from './Card';

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

export default App;
