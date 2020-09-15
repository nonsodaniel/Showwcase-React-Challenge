import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from './components/home/Home';
import Profile from './components/profile/Profile';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:id" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>

    </Provider >
  );
}

export default App;
