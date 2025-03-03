import { ShoppingBasket } from 'lucide-react'
import PropTypes from 'prop-types'
import useTogglePopup from '../../hooks/useTogglePopup'
import getTotalQuantity from './utils/getTotalQuantity'

export default function Cart({ data }) {
  const { isOpen, cartRef, toggleOpen } = useTogglePopup()

  return (
    <div
      ref={cartRef}
      aria-expanded={isOpen}
      aria-controls="popup"
      className="relative"
    >
      <button onClick={toggleOpen} className="flex items-center bg-slate-700">
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-125">
          <ShoppingBasket
            aria-label="Shopping cart"
            className="size-6 stroke-slate-100"
          />
          <div className="absolute bottom-0 right-0 translate-x-1 translate-y-1.5 will-change-transform">
            <p className="sr-only" id="cart-label">
              Number of items in cart:
            </p>
            <div className="grid size-3.5 place-content-center rounded-full bg-brandHighlight/80">
              <p
                className="whitespace-nowrap text-[.7rem] font-bold text-white"
                aria-live="polite"
                aria-labelledby="cart-label"
              >
                {data ? getTotalQuantity(data) : 0}
              </p>
            </div>
          </div>
        </div>
      </button>
      <CartPopup isOpen={isOpen} data={data} />
    </div>
  )
}

function CartPopup({ isOpen, data }) {
  return (
    <div
      id="popup"
      className={`${isOpen ? '' : 'hidden'} absolute left-7 top-9 w-72 -translate-x-full rounded-sm bg-slate-100/90 px-2 py-2 shadow`}
    >
      <div className="h-96 overflow-y-auto">
        <div></div>
      </div>
      <div className="mt-3 flex justify-end">
        <button className="text-md rounded-md bg-brandHighlight px-3 py-1 font-bold text-white transition-opacity hover:opacity-95 active:opacity-80">
          Purchase
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  data: PropTypes.array,
}

CartPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array,
}
