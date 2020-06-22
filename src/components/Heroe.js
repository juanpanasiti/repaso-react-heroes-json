import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class Heroe extends Component {
  render() {
      const imgSrc = "/img/" + this.props.img
      const linkDetalleHeroe = "/detalle-heroe/" + this.props.idHeroe
    const listaPoderes = this.props.poderes.map((poder, i) => {
      return <li>{poder}</li>;
    }); //const poderes
    return (
      <div>
        <hr />
        <Table bordered style={{ width: '25rem' }}>
          <thead>
            <th style={{color:'green'}}>{this.props.nombre}</th>
            <th style={{color:'red'}}>Poderes</th>
          </thead>
          <tbody>
            <tr>
              <td>
              <img src={imgSrc} className="card-img-top" alt="..." />
              </td>
              <td>
                <ul>{listaPoderes}</ul>
              </td>
            </tr>
            <tr>
              <td>
                  <a href={linkDetalleHeroe} className="btn btn-secondary">VER MAS</a>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Heroe;
