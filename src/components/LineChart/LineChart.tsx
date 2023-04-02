import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
import { Chart as ChartJS } from "chart.js/auto";
import { ChartData } from "../../pages/CartPage/CartPage";

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price',
      }

    },
  };

const LineChart = ({ chartData } : {chartData: ChartData}) => {
  return (
    <div className="chart">
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default LineChart;
