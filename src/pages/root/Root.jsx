import { Outlet } from 'react-router-dom'
import Header from './Header'
import Container from './Container'

export default function Root() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
