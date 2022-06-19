import { Grid, styled, Card as C} from '@mui/material';

export const Surface = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    margin: 0
  }));

export const Card = styled(C)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%',
  padding: '20px 20px 40px',
  position: 'relative',
  
}));