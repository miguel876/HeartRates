
import { useGet } from '../../hooks/useFetch';
import { Filters } from './Filters';
import { useState, useEffect, SetStateAction } from 'react';
import { HeartRatesChart } from './HeartRatesChart';
import { Card } from '../../styles/base';
import { HeartRatesTable } from './HeartRatesTable';
import { Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from './../../components/Link';

interface HeartRates {
    minimum: string,
    maximum: string,
    meanAverage: string,
    dateTime: string,
};

const linkStyle = {
  position: 'absolute', 
  bottom: 5, 
  right: 20
}

export const HeartRates = () => {
    const { data, isLoading } = useGet('http://localhost:3000/heartrate')
    const [ filters, setFilters ] = useState<{ time: number, type: string, data?: []}>({ time: 0, type: 'all' });
    const [ heartRates, setHeartRates ] = useState<[]>([]);

    useEffect(() => {
        setHeartRates(
          filters.time === 0 ? 
          data 
          :
          data.filter((val: HeartRates, _i, arr: HeartRates[]) => (new Date(arr[arr.length - 1].dateTime).getMonth() - new Date(val?.dateTime).getMonth()) < filters?.time) as SetStateAction<[]> )
      }, [data, filters.time])

  return (
      <Stack spacing={2} sx={{width: '100%', marginTop: 10}}>
        <Stack direction={'row'}>
          <FilterListIcon fontSize='small' />
          <Filters filters={filters} setFilters={setFilters} sx={{ width: '100%', marginLeft: 2}} />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{width: '100%'}}>
        <Card>
          <HeartRatesChart data={heartRates} type={filters.type} />
          <Link to="/chart" sx={linkStyle}>See more</Link>
        </Card>
        <Card>
          <HeartRatesTable data={heartRates} tableRows={5} />
          <Link to="/table" sx={linkStyle}>See more</Link>
        </Card>
      </Stack>
      </Stack>
  )
}
