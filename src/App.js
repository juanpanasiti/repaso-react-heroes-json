import React from "react";
import "./assets/css/App.css";
import { Switch, Route } from "react-router-dom";
import ListaHeroes from "./components/ListaHeroes";
import DetalleHeroe from "./components/DetalleHeroe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ListaHeroes></ListaHeroes>
        </Route>
        <Route exact path="/heroes-dc">
          <ListaHeroes></ListaHeroes>
        </Route>
        <Route exact path="/heroes-marvel">
          <ListaHeroes></ListaHeroes>
        </Route>

        <Route exact path="/detalle-heroe/:id" component={DetalleHeroe} />
        <Route exact path="/buscar/:clave" component={ListaHeroes} />
      </Switch>
    </div>
  );
}

export default App;
