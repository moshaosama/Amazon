import { useState } from "react";
import Chart from "react-apexcharts";

function Hello() {
  const [state, setState] = useState({
    options: {
      xaxis: {
        catogries: [1, 2, 3, 4, 5],
      },
    },
    series: [
      {
        name: "Mosha",
        data: [20, 20, 20, 30, 30],
      },
    ],
  });
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="500"
      />
    </>
  );
}

export default Hello;
