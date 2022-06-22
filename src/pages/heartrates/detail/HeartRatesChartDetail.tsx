import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../../store/slices/dataSlice';
import { Card } from '../../../styles/base'
import { HeartRatesChart } from '../dashboard/HeartRatesChart';
import { Filters } from '../Filters';
import { DetailStack } from './../../../styles/base';

export const HeartRatesChartDetail = () => {
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(resetFilters())
      }, [dispatch])

  return (
    <>
      <DetailStack direction={'row'}>
        <Filters />
      </DetailStack>
      <Card >
        <HeartRatesChart />
      </Card>
    </>
  )
}
