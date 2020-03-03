import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CocktailDetails from "./Components/CocktailDetails";
import ListCocktails from "./Components/ListCocktails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/category" component={CocktailDetails} />
          <Route path="/cocktails/:cat" component={ListCocktails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
