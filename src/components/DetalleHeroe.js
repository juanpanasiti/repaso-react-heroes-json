import React, { Component } from "react";
import Navigation from "./shared/Navigation";
import heroesJson from "../data/heroes.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

class DetalleHeroe extends Component {
  constructor() {
    super();
    this.state = {
      heroesJson,
    };
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {

    const paramId = this.props.match.params.id;
    const heroe = heroesJson.filter(
        (heroe) => heroe.id === paramId
      )[0];
      const imgSrc = "/img/" + heroe.img;
      const listaPoderes = heroe.poderes.map((poder, i) => {
        return <li>{poder}</li>;
      }); //const heroes
    return (
      <div>
        <Navigation></Navigation>

        <Container style={{ marginTop: "10px" }}>
          <Row>
            <Col md={4} style={{ borderRight: "1px solid #cecece" }}>
              <Row>
                <Image className="" variant="top" src={imgSrc} />
              </Row>
              <Row>
                <p className="">
                  Bio: <br />
                  {heroe.bio}
                </p>
              </Row>
            </Col>

            <Col>
              <div className="">
                <h1>{heroe.nombre}</h1>
                <h2>{heroe.casa}</h2>
                <h4>Aparición: {heroe.aparicion}</h4>
                <ul>
                    {listaPoderes}
                </ul>
                <button onClick={this.goBack}>Volver</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetalleHeroe;
