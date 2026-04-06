import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Math", "Science"],
  datasets: [{
    label: "Marks",
    data: [85, 90]
  }]
};

<Bar data={data} />