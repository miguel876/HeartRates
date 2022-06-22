import { useEffect } from 'react';
import { useGet } from '../../hooks/useFetch';
import { Filters } from './Filters';
import { HeartRatesChart } from './dashboard/HeartRatesChart';
import { HeartRatesTable } from './dashboard/HeartRatesTable';
import { Stack } from '@mui/material';
import { Link } from '../../components/Link';
import { useDispatch } from 'react-redux';
import { add } from '../../store/slices/dataSlice';
import properties from '../../properties.json'
import { Card } from './../../components/Card';

const linkStyle = {
  position: 'absolute', 
  bottom: 5, 
  right: 20
}

export const HeartRatesDashboard = () => {
    const { data: d } = useGet(properties.endpoint)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(add(d))
      }, [d, dispatch])

  return (
      <Stack spacing={2} sx={{width: '100%'}}>
        <Stack direction={'row'}>
          <Filters />
        </Stack>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{width: '100%'}}>
        <Card >
          <HeartRatesChart />
          <Link to="/chart" sx={linkStyle}>See details</Link>
        </Card>
        <Card>
          <HeartRatesTable tableRows={5} />
          <Link to="/table" sx={linkStyle}>See details</Link>
        </Card>
      </Stack>
      </Stack>
  )
}
