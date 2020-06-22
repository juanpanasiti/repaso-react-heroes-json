import React, { Component } from "react";
import Navigation from "./shared/Navigation";
import heroesJson from "../data/heroes.json";
import Heroe from "./Heroe";

class ListaHeroes extends Component {
  constructor() {
    super();
    this.state = {
      heroesJson,
    };
  }
  render() {
    const url = window.location.href;
    let parametro = "";
    this.props.match.params.clave
      ? (parametro = this.props.match.params.clave)
      : (parametro = "");

    //armar lista de heroes

    const heroes = this.state.heroesJson.map((heroe, i) => {
      if (url.includes("heroes-dc")) {
        if (heroe.casa === "DC") {
          return (
            <Heroe
              key={heroe.id}
              nombre={heroe.nombre}
              idHeroe={heroe.id}
              poderes={heroe.poderes}
              img={heroe.img}
            />
          );
        } else {
          return null;
        }
      } else if (url.includes("heroes-marvel")) {
        if (heroe.casa === "Marvel") {
          return (
            <Heroe
              key={heroe.id}
              nombre={heroe.nombre}
              idHeroe={heroe.id}
              poderes={heroe.poderes}
              img={heroe.img}
            />
          );
        } else {
          return null;
        }
      } else if (url.includes("/buscar/")) {
          
        if (this.checkInclude(parametro,heroe)) {
          return (
            <Heroe
              key={heroe.id}
              nombre={heroe.nombre}
              idHeroe={heroe.id}
              poderes={heroe.poderes}
              img={heroe.img}
            />
          );
        } else {
          return null;
        }
      } else {
        return (
          <Heroe
            key={heroe.id}
            nombre={heroe.nombre}
            idHeroe={heroe.id}
            poderes={heroe.poderes}
            img={heroe.img}
          />
        );
      }
    }); //const heroes
    return (
      <div>
        <Navigation></Navigation>
        {heroes}
      </div>
    );
  }

  checkInclude(busqueda, heroe){

    const busq = busqueda.toLowerCase()
    const nombre = heroe.nombre.toLowerCase()
    const bio = heroe.bio.toLowerCase()
    const poderes = heroe.poderes
    if(nombre.includes(busq)){
      return true
    }
    if(bio.includes(busq)){
      return true
    }
    for(let poder of poderes){
      if (poder.toLowerCase().includes(busq)) {
        return true
      }
    }
    return false
  }//checkInclude()
}

export default ListaHeroes;
