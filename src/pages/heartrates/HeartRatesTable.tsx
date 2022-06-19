import { FC, MouseEvent, useState } from 'react';
import { styled, Stack } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { dateTimeToDate } from '../../utils/date';

const StyledTableCell = styled(TableCell, 
  {shouldForwardProp: (prop) => prop !== "bold"})<{bold?: boolean}>(({ bold }) => ({
    fontWeight: bold ? 600: 0,
    padding: 11,
}))

export const HeartRatesTable:FC<{data: [], tableRows: number}> = ({data, tableRows}) => {
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
                <StyledTableCell bold>Date</StyledTableCell>
                <StyledTableCell bold align="center">Minimum (bpm)</StyledTableCell>
                <StyledTableCell bold align="center">Maximum (bpm)</StyledTableCell>
                <StyledTableCell bold align="center">Average (bpm)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ dateTime, minimum, maximum, meanAverage}, i, arr) => 
                (
                    (i >= (page * tableRows) && i < (tableRows * (page + 1))) &&
                <TableRow key={dateTimeToDate(dateTime)}>
                  <StyledTableCell component="th" scope="row">
                    {dateTimeToDate(dateTime)}
                  </StyledTableCell>
                  <StyledTableCell align="center">{minimum}</StyledTableCell>
                  <StyledTableCell align="center">{maximum}</StyledTableCell>
                  <StyledTableCell align="center">{meanAverage}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
    
          </Table>
        </TableContainer>
        <Stack>
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
        </Stack>
        </>
      );
}


