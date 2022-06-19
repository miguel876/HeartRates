import { FC } from 'react'
import { CardContent } from '@mui/material';
import { Card as C } from '../styles/base'

export const Card:FC<{ children: any}> = ({ children }) => {
  return (
    <C variant="outlined">
      <CardContent>
        {children}
      </CardContent>
    </C>
  )
}
