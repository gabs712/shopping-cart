import { Outlet } from 'react-router-dom'
import Header from './Header'
import Container from './Container'

export default function Root() {
  return (
    <>
      {/* TODO: Add show item in card quantity */}
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
