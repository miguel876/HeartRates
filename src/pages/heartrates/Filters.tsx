import { FC } from 'react';
import { Box, MenuItem, FormControl, Select, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterTime, filterType } from '../../store/slices/dataSlice';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterProps {
  time?: number,
  type?: string
}

export const Filters:FC<{sx?: {} }> = ({ sx }) => {
  const dispatch = useDispatch()
  const { time, type } = useSelector((state: { heartRates: FilterProps}) => state.heartRates) as FilterProps
 
  return (
    <Box sx={{ minWidth: 120, width: '100%', ...sx }}>
      <Stack direction='row' >
      <FilterListIcon fontSize='small' />
        <Stack spacing={2} sx={{width: { xs: 1, md: 1/3}, marginLeft: 2}} direction={'row'}>
        <FormControl variant="standard" fullWidth>
          <Select
            id="time"
            value={time}
            name="time"
            label="Time Period"
            onChange={(event: any) => dispatch(filterTime(event.target.value))}
            size="small"
            sx={{ fontSize: 12 }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#fff',
                },
              },
            }}
          >      
            <MenuItem value={0}>Full time period</MenuItem>
            <MenuItem value={1}>Last month</MenuItem>
            <MenuItem value={2}>Last 2 months</MenuItem>
            <MenuItem value={3}>Last 3 months</MenuItem>
          </Select>
          </FormControl>

          <FormControl variant="standard" fullWidth>
          <Select
            id="type"
            value={type}
            label="Type"
            name="type"
            onChange={(event: any) => dispatch(filterType(event.target.value))}
            size="small"
            sx={{ fontSize: 12 }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#fff',
                },
              },
            }}
          >
            <MenuItem value={'all'}>All rates types</MenuItem>
            <MenuItem value={'max'}>Maximum</MenuItem>
            <MenuItem value={'min'}>Minimum</MenuItem>
            <MenuItem value={'avg'}>Average</MenuItem>
          </Select>
        </FormControl>
        </Stack>
        </Stack>
    </Box>
  );
}