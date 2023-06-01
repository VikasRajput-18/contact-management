import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }: any) => {
  const chartData = {
    labels: ["Cases", "Deaths", "Recovered", "Active"],
    datasets: [
      {
        label: "Total",
        data: [data?.cases, data?.deaths, data?.recovered, data?.active],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
      {
        label: "Today",
        data: [
          data?.todayCases,
          data?.todayDeaths,
          data?.todayRecovered,
          0, // Placeholder for active cases since it's not provided separately for today
        ],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Line data={chartData} options={chartOptions} className="chartInMob" />
  );
};

export default LineChart;
