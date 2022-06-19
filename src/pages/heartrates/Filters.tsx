import { Dispatch, FC, SetStateAction } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Stack } from '@mui/material';

interface FilterProps {
  time?: number,
  type?: string
}

export const Filters:FC<{filters: FilterProps, setFilters: Dispatch<SetStateAction<{ time: number, type: string}>>, sx?: {} }> = ({ filters: { time, type}, setFilters, sx }) => {
  const handleChange = (event: any) => {
    setFilters((filters) => ({...filters, [event.target.name]: event.target.value}));
  };

  return (
    <Box sx={{ minWidth: 120, ...sx }}>
      <Stack direction='row' >
        <Stack spacing={2} sx={{width: 1/3}} direction={{ xs: 'column', sm: 'row' }}>
        <FormControl variant="standard" fullWidth>
          <Select
            id="time"
            value={time}
            name="time"
            label="Time Period"
            onChange={handleChange}
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
            onChange={handleChange}
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