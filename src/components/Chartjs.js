import { useState } from "react";
import Chart from "react-apexcharts";
function Hello() {
  const [state, setState] = useState({
    options: {},
    series: [20, 20, 23, 30, 40, 50],
    label: ["A", "B", "C", "D", "E"],
  });
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width={"800px"}
      />
    </>
  );
}

export default Hello;
