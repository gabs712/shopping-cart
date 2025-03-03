import { ShoppingBasket } from 'lucide-react'
import PropTypes from 'prop-types'
import useTogglePopup from '../../hooks/useTogglePopup'

export default function Cart({ dataInfo }) {
  const { isOpen, cartRef, toggleOpen } = useTogglePopup()

  return (
    <div ref={cartRef} className="relative">
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
                className="whitespace-nowrap text-.7rem font-bold text-white"
                aria-live="polite"
                aria-labelledby="cart-label"
              >
                {/* {itemsInCart > 99 ? 99 : itemsInCart} */}
              </p>
            </div>
          </div>
        </div>
      </button>
      {isOpen && <CartPopup dataInfo={dataInfo} />}
    </div>
  )
}

function CartPopup({ dataInfo }) {
  return (
    <div className="absolute top-7 left-0" aria-live="polite">
      <div>test</div>
    </div>
  )
}

Cart.propTypes = {
  dataInfo: PropTypes.object.isRequired,
}

CartPopup.propTypes = {
  dataInfo: PropTypes.object.isRequired,
}
