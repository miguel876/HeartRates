import { FC } from 'react'
import { Link as L } from 'react-router-dom';
import { Typography, styled, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledLink = styled(L)(({theme}) => ({
  display: 'flex',
  textDecoration: 'none',
  width: 'fit-content',
  '& > .MuiButton-root > *': {
    fontSize: 12,
    color: theme.palette.primary.dark,
    textTransform: 'capitalize',
  },
  '& > .MuiButton-root > .MuiSvgIcon-root': {
    marginLeft: 2,
  },
  '& > .MuiButton-root:hover': {
    backgroundColor: "rgba(0, 0, 0, 0.04)"
  }
}))

export const Link: FC<{ to: string, children: any, sx?: {}}> = ({to, children, sx}) => {
  return (
    <StyledLink to={to} sx={sx}>
      <Button variant="text">
        <Typography>{ children }</Typography>
        <ArrowForwardIosIcon />
      </Button>
      </StyledLink>
  )
}
