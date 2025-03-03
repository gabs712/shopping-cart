import PropTypes from 'prop-types'
import Card from './Card'
import { useOutletContext } from 'react-router-dom'

function CenteredMsg({ text }) {
  return (
    <main className="grid h-[85vh] place-content-center text-slate-600 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
      {text}
    </main>
  )
}

export default function Products() {
  const { data, error, loading, increaseQuantity, decreaseQuantity } =
    useOutletContext()

  if (error) {
    return <CenteredMsg text={error.msg} />
  }

  if (loading) {
    return <CenteredMsg text={'loading...'} />
  }

  return (
    <main className="mx-auto grid max-w-screen-lg grid-cols-[repeat(auto-fill,minmax(8.3rem,1fr))] gap-x-20 gap-y-5 px-7 py-10">
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          quantity={item.quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </main>
  )
}

CenteredMsg.propTypes = {
  text: PropTypes.string.isRequired,
}
