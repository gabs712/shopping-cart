import PropTypes from 'prop-types'
import useQuantity from '../../hooks/useQuantity'

export default function Card({ imageUrl, title, price }) {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity()

  return (
    <div>
      <div className="grid h-52 place-content-center overflow-hidden">
        <img src={imageUrl} className="h-44" alt="" />
      </div>
      <div>
        <div className="min-h-[2lh] flex items-center text-sm">
          <p title={title} className="line-clamp-2 font-bold">
            {title}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <form className="flex border rounded-md justify-between px-2 w-[4.3rem]">
            <button onClick={decreaseQuantity} type="button" className="bold">
              -
            </button>
            <p aria-live="polite">{quantity}</p>
            <button onClick={increaseQuantity} type="button" className="bold">
              +
            </button>
          </form>
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {'$' + price}
          </p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
