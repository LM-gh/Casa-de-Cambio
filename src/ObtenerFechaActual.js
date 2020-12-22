export const ObtenerFechaActual = () => {
  let today = new Date();

  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  let dates = {
    ddmmyyyyToday: `${dd}-${mm}-${yyyy}`,
    yyyymmddToday: `${yyyy}-${mm}-${dd}`,
    min: `04-01-1999`, // <-  format '%Y-%m-%d
  };

  return dates;
};
