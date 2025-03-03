import { data, Outlet } from 'react-router-dom'
import Header from './Header'
import Container from './Container'
import useFetchData from '../../hooks/useFetchData'

export default function Root() {
  const dataInfo = useFetchData('https://fakestoreapi.com/products')

  return (
    <>
      <Header dataInfo={dataInfo} />
      <Container>
        <Outlet context={dataInfo} />
      </Container>
    </>
  )
}
