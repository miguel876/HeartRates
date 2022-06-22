import { styled, AppBar as A, Typography, Button as B, Toolbar as T } from '@mui/material';

export const AppBar = styled(A)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
  }));

export const Logo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    width: '100%',
    color: theme.palette.primary.dark
}))
    


export const ButtonsMenu = styled('div')`
    width: 100%;
    text-align: right;
`

export const Button = styled(B)`
    size: 14px;
`

export const Toolbar = styled(T)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 !important;
`

export const DrawerContainer = styled('div')`
    padding: 20px 30px;
`
