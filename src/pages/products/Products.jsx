import PropTypes from 'prop-types'
import useFetchData from '../../hooks/useFetchData'
import Card from './Card'

function CenteredMsg({ text }) {
  return (
    <main className="grid h-[85vh] place-content-center text-slate-600 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
      {text}
    </main>
  )
}

export default function Products() {
  const { data, error, loading } = useFetchData(
    'https://fakestoreapi.com/products',
  )

  if (error) {
    return <CenteredMsg text={error.msg} />
  }

  if (loading) {
    return <CenteredMsg text={'loading...'} />
  }
  console.log(data)

  return (
    <main>
      {data.map((item) => (
        <Card
          key={item.id}
          imageUrl={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </main>
  )
}

CenteredMsg.propTypes = {
  text: PropTypes.string.isRequired,
}
