import { React, Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export const JumbotronComponent = () => {
  return (
    <Fragment>
      <Container fluid>
        <Jumbotron fluid className="bg-primary text-white">
          <Container fluid>
            <h1>Hola!</h1>
            <p className="lead">
              Esta aplicación muestra tasas de cambio para monedas extranjeras.
            </p>
            <hr className="my-4" />
          </Container>
        </Jumbotron>
        <Container fluid>
          <p>Selecciona a continuación una moneda:</p>
        </Container>
      </Container>
    </Fragment>
  );
};
