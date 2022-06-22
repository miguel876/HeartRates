import { HeartRatesTable } from './../dashboard/HeartRatesTable';
import { Filters } from '../Filters';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetFilters } from '../../../store/slices/dataSlice';
import { Card } from '../../../styles/base';
import { DetailStack } from './../../../styles/base';

export const HeartRatesTableDetail = () => {
  const dispatch = useDispatch(); 
    
  // Reset filters on detail page
    useEffect(() => {
      dispatch(resetFilters())
    }, [dispatch])

  return (
    <>
    <DetailStack direction={'row'}>
      <Filters />
    </DetailStack>
    <Card>
      <HeartRatesTable tableRows={10}/>
    </Card>
    </>
  )
}
