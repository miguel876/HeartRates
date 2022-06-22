import { FC } from 'react'
import { CardContent } from '@mui/material';
import { Card as C } from '../styles/base'

export const Card:FC<{ children: any}> = ({ children, ...rest }) => {
  return (
    <C variant="outlined" sx={{ width: { lg: 1 } }}>
      <CardContent>
        {children}
      </CardContent>
    </C>
  )
}
