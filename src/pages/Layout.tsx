import { Container } from '@mui/material'
import { Surface } from '../styles/base'
import { Header } from './Header'
import { Homepage } from './Homepage'

export const Layout = () => {
  return (
    <Surface container spacing={2}>
      <Container fixed>
        <Header />
        <Homepage />
      </Container>
    </Surface>
  )
}
