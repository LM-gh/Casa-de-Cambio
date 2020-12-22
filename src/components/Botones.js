import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export const Botones = ({
  indexMonedaSeleccionada,
  obtenerLatest,
  selectedDate,
  handleChange,
}) => {
  const linkTo = "/Casa-de-Cambio/home/resultados";
  return (
    <Fragment>
      <Row className="py-3">
        <Col>
          <Link
            to={linkTo}
            onClick={(e) => [
              obtenerLatest.length === 0 && selectedDate === null
                ? (e.preventDefault(),
                  alert(
                    "Selecciona una fecha o marcá la opción de obtener tasa más reciente"
                  ))
                : null,
              indexMonedaSeleccionada === null &&
              (selectedDate !== null || obtenerLatest.length !== 0)
                ? (e.preventDefault(), alert("Selecciona una moneda!"))
                : null,
            ]}
          >
            <Button variant="outline-primary">Obtener cambios</Button>
          </Link>
        </Col>
        <Col>
          <ToggleButtonGroup
            type="checkbox"
            value={obtenerLatest}
            onChange={handleChange}
            size="sm"
          >
            <ToggleButton
              value={1}
              variant="outline-primary"
              className="btn-optional"
            >
              Obtener sólo la tasa más reciente
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
    </Fragment>
  );
};
