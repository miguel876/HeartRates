import { FC, MouseEvent, useState } from 'react';
import { styled, Stack, Skeleton } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { dateTimeToDate } from '../../../utils/date';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell, 
  {shouldForwardProp: (prop) => prop !== "bold"})<{bold?: boolean}>(({ bold }) => ({
    fontWeight: bold ? 600: 0,
    padding: 11,
}))

const colHeight = 46;
const bgcolor = 'rgba(0,0,0,0.04)'

export const HeartRatesTable:FC<{tableRows: number}> = ({tableRows}) => {
  const data = useSelector((state: { heartRates: { filteredData: []}}) => state.heartRates.filteredData) as []

    const [page, setPage] = useState<number>(0);

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
      };

    return (
        <>
        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ backgroundColor: '#fff'}}>
            <TableHead >
              <TableRow>
                {
                  data.length > 0 ?
                    <>
                    <StyledTableCell bold align="center">Date</StyledTableCell>
                    <StyledTableCell bold align="center">Minimum (bpm)</StyledTableCell>
                    <StyledTableCell bold align="center">Maximum (bpm)</StyledTableCell>
                    <StyledTableCell bold align="center">Average (bpm)</StyledTableCell>
                    </>
                  :
                  <TableCell colSpan={4} sx={{ padding: 0, border: 'none'}}><Skeleton animation="wave" width="100%" height={colHeight} sx={{ bgcolor }} /></TableCell>
                }
              </TableRow>
            </TableHead>
            <TableBody>
              
              {
                data.length > 0 ?
                  data.map(({ dateTime, minimum, maximum, meanAverage}, i) => 
                    (
                        (i >= (page * tableRows) && i < (tableRows * (page + 1))) &&

                    <TableRow key={dateTime}>
                      <StyledTableCell component="th" scope="row">
                        {dateTimeToDate(dateTime)}
                      </StyledTableCell>
                      <StyledTableCell align="center">{minimum}</StyledTableCell>
                      <StyledTableCell align="center">{maximum}</StyledTableCell>
                      <StyledTableCell align="center">{meanAverage}</StyledTableCell>
                    </TableRow>
                  ))
                  :
                  <TableRow>
                    <TableCell colSpan={4} sx={{ border: 'none'}}>
                      <Skeleton animation="wave" width="100%" height={colHeight * tableRows} sx={{ bgcolor }} />
                    </TableCell>
                  </TableRow>
              }
            </TableBody>
    
          </Table>
        </TableContainer>
        <Stack>
        {
          data.length > 0 ?  
            <TablePagination
              colSpan={3}
              count={data.length}
              rowsPerPage={tableRows}
              page={page}
              onPageChange={handleChangePage}
              labelRowsPerPage={''}
              rowsPerPageOptions={[]}
              sx={{ borderBottom: 'none'}}
            />
            :
            <Skeleton animation="wave" width="100%" height={colHeight} sx={{ bgcolor: 'rgba(0,0,0,0.04)' }} />
        }
        </Stack>
        </>
      );
}


