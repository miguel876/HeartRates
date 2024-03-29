import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { Chart } from '../../../components/Chart';
import { dateTimeToDate } from '../../../utils/date';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Heart Rates (bpm)',
    },
    
  },
};

export const HeartRatesChart = () => { 
  const { filteredData: data, type} = useSelector((state: { heartRates: { filteredData: [], type: string}}) => state.heartRates) as {filteredData: [], type: string}

    const chartData = {
        labels: data && data?.map(({dateTime}) => dateTimeToDate(dateTime)),
        datasets: [
          {
            id: 'min',
            label: 'Minimum',
            data: data && data?.map(({minimum}) => minimum),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            id: 'max',
            label: 'Maximum',
            data: data?.map(({maximum}) => maximum),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            id: 'avg',
            label: 'Average',
            data: data?.map(({meanAverage}) => meanAverage),
            borderColor: 'rgb(10, 229, 168)',
            backgroundColor: 'rgba(10, 229, 168, 0.5)',
          },
        ].filter(({ id }) => type === 'all' || id === type),
     
      };   

    return (
      data.length > 0 ?
        <Chart chartData={chartData} options={options} />
      :  
        <Skeleton animation="wave" width="100%" height={300} sx={{ bgcolor: 'rgba(0,0,0,0.04)' }} />
    )
}
