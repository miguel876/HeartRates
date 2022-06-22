import { Container } from '@mui/material'
import { Routes } from '../routes'
import { Surface } from '../styles/base'
import { Header } from './Header'

export const Layout = () => {
  return (
    <Surface container spacing={2}>
      <Container fixed>
        <Header />
        <Routes />
      </Container>
    </Surface>
  )
}
