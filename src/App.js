import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CustomNavBar } from "./components/CustomNavBar";
import { JumbotronComponent } from "./components/JumbotronComponent";
import { LayoutSeleccionarMoneda } from "./components/LayoutSeleccionarMoneda";
import { Resultados } from "./components/Resultados";
import { ObtenerFechaActual } from "./ObtenerFechaActual";

export const BASE_URL = "https://api.exchangeratesapi.io/";

function App() {
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const [monedas, setMonedas] = useState([]);
  const [indexMonedaSeleccionada, setMonedaSeleccionada] = useState(null);

  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [obtenerLatest, setObtenerLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDates(ObtenerFechaActual());
    const fetchLatest = async () => {
      const url = await fetch(BASE_URL + "latest");
      const response = await url.json();
      setMonedas([response.base, ...Object.keys(response.rates)]);
    };

    try {
      setLoading(true);
      fetchLatest();
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.error(e);
    }
  }, []);

  const handleChange = (val) => {
    setObtenerLatest(val);
  };
  const handleDate = (date) => {
    setSelectedDate(date);
  };
  const handleMonedaSeleccionada = (e) => {
    setMonedaSeleccionada(e);
  };

  return (
    <BrowserRouter>
      <CustomNavBar />
      <Switch>
        <Route exact path="/Casa-de-Cambio/home">
          <JumbotronComponent />
          {loading ? (
            <div>Cargando...</div>
          ) : (
            <LayoutSeleccionarMoneda
              monedas={monedas}
              indexMonedaSeleccionada={indexMonedaSeleccionada}
              obtenerLatest={obtenerLatest}
              dates={dates}
              selectedDate={selectedDate}
              loading={loading}
              handleChange={handleChange}
              handleDate={handleDate}
              handleMonedaSeleccionada={handleMonedaSeleccionada}
            />
          )}
        </Route>

        <Route
          exact
          path="/Casa-de-Cambio/home/resultados"
          render={(props) => (
            <Resultados
              {...props}
              monedas={monedas}
              indexMonedaSeleccionada={indexMonedaSeleccionada}
              selectedDate={selectedDate}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
