import { FC } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  labels: string[],
    datasets: {
        label: string,
        data: never[],
        borderColor: string,
        backgroundColor: string
    }[];
}

export const Chart:FC<{chartData: ChartProps, options: {}}> = ({ chartData, options }) => <Line options={options} data={chartData} />
