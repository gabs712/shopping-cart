import PropTypes from 'prop-types'

export default function Card({ item, increaseQuantity, decreaseQuantity }) {
  return (
    <div>
      <div className="grid h-52 place-content-center overflow-hidden">
        <img src={item.image} className="h-44" alt="" />
      </div>
      <div>
        <div className="min-h-[2lh] flex items-center text-sm">
          <p title={item.title} className="line-clamp-2 font-bold">
            {item.title}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <form className="flex border rounded-md justify-between px-2 w-[4.3rem]">
            <button
              onClick={() => {
                decreaseQuantity(item.id)
              }}
              type="button"
              className="bold"
            >
              -
            </button>
            <p aria-live="polite">{item.quantity}</p>
            <button
              onClick={() => {
                increaseQuantity(item.id)
              }}
              type="button"
              className="bold"
            >
              +
            </button>
          </form>
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {'$' + item.price}
          </p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
}
