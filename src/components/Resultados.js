import { React, useEffect, useState } from "react";
import { BASE_URL } from "../App";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export const Resultados = ({
  monedas,
  indexMonedaSeleccionada,
  selectedDate,
}) => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDate, setShowDate] = useState([]);

  useEffect(() => {
    if (selectedDate === null) {
      const fetchLatest = async () => {
        const url = await fetch(
          BASE_URL + "latest?base=" + monedas[indexMonedaSeleccionada - 1]
        );
        const response = await url.json();
        try {
          setResultados(response);
          setLoading(false);
        } catch (e) {
          setLoading(true);
          console.error(e);
        }
      };
      fetchLatest();
    } else {
      let dd = String(selectedDate.getDate()).padStart(2, "0");
      let mm = String(selectedDate.getMonth() + 1).padStart(2, "0");
      let yyyy = selectedDate.getFullYear();

      let date = `${yyyy}-${mm}-${dd}`;
      setShowDate(`${dd}-${mm}-${yyyy}`);

      const fetchDate = async () => {
        const url = await fetch(
          BASE_URL + `${date}?base=` + monedas[indexMonedaSeleccionada - 1]
        );
        const response = await url.json();
        try {
          setResultados(response);
          setLoading(false);
        } catch (e) {
          setLoading(true);
          console.error(e);
        }
      };
      fetchDate();
    }
  }, []);

  return (
    <>
      <Container>
        {loading || resultados === [] ? (
          <div>Cargando resultados...</div>
        ) : (
          <Container>
            {selectedDate === null ? (
              <h1>Resultados más recientes para {resultados.base}: </h1>
            ) : (
              <h1>
                Resultados para {resultados.base} a la fecha {showDate}
              </h1>
            )}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Moneda</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(resultados.rates).map((moneda) => {
                  return (
                    <tr key={moneda}>
                      <td>{moneda}</td>
                      <td>{resultados.rates[moneda]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        )}
      </Container>
    </>
  );
};
