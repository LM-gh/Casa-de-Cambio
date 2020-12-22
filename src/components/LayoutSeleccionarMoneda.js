import { React, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Botones } from "./Botones";

export const LayoutSeleccionarMoneda = ({
  monedas,
  indexMonedaSeleccionada,
  obtenerLatest,
  dates,
  selectedDate,
  loading,
  handleChange,
  handleDate,
  handleMonedaSeleccionada,
}) => {
  const minDate = new Date();
  minDate.setDate("04");
  minDate.setYear("99");
  minDate.setMonth("01");

  return (
    <Fragment>
      <Container>
        <Row noGutters={true}>
          {Object.keys(monedas).map((moneda, index) => (
            <ToggleButtonGroup
              type="radio"
              value={moneda}
              onChange={handleMonedaSeleccionada}
              name={moneda}
              className="toggleButtonGroup"
              key={moneda}
            >
              <ToggleButton
                value={Number(index + 1)}
                key={moneda}
                variant="outline-primary"
                className="btn-custom"
              >
                {monedas[index]}
              </ToggleButton>
            </ToggleButtonGroup>
          ))}
        </Row>
      </Container>

      <Container fluid>
        <p>
          Seleccioná una fecha válida, desde 04-01-1999 al {dates.ddmmyyyyToday}
          , o marcá la opción para obtener los últimos cambios:
        </p>
      </Container>

      <Container>
        <DatePicker
          selected={selectedDate}
          onChange={handleDate}
          dateFormat="dd/MM/yyyy"
          minDate={minDate}
          maxDate={new Date()}
          isClearable
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
        />

        <Botones
          indexMonedaSeleccionada={indexMonedaSeleccionada}
          obtenerLatest={obtenerLatest}
          selectedDate={selectedDate}
          handleChange={handleChange}
        />
      </Container>
    </Fragment>
  );
};
