import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from './components/home/Home';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>

    </Provider >
  );
}

export default App;
