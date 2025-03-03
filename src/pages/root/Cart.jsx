import { ShoppingBasket } from 'lucide-react'
import PropTypes from 'prop-types'
import useTogglePopup from '../../hooks/useTogglePopup'
import getTotalQuantity from './utils/getTotalQuantity'
import getAddedItems from './utils/getAddedItems'
import CountButton from './CountButton'
import getTotalPrice from './utils/getTotalPrice'

export default function Cart({ dataInfo }) {
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
                {dataInfo.data ? getTotalQuantity(dataInfo.data) : 0}
              </p>
            </div>
          </div>
        </div>
      </button>
      <CartPopup isOpen={isOpen} dataInfo={dataInfo} />
    </div>
  )
}

function CartPopup({ isOpen, dataInfo }) {
  const data = dataInfo.data

  return (
    <div
      id="popup"
      className={`${isOpen ? '' : 'hidden'} absolute left-7 top-9 w-72 -translate-x-full rounded-sm bg-slate-100/95 shadow`}
    >
      <div className="h-96 overflow-y-auto px-2 pt-3">
        <div className="flex flex-col gap-2.5">
          {data &&
            getAddedItems(data).map((item) => (
              <div className="flex gap-4 rounded bg-white p-3" key={item.id}>
                <div className="flex-shrink-0 ">
                  <img
                    className="h-12 w-8 overflow-hidden object-contain object-center"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col justify-between overflow-hidden">
                  <div
                    className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-semibold text-slate-700"
                    title={item.title}
                  >
                    {item.title}
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-800">
                        {'$' + item.price}
                      </div>
                      <form className="flex items-center gap-2 ">
                        <CountButton
                          className={'mb-0.5'}
                          char={'-'}
                          onClick={() => dataInfo.decreaseQuantity(item.id)}
                        />
                        <p
                          className="mt-0.5 text-xs"
                          id="cartCounter"
                          aria-live="polite"
                        >
                          {item.quantity}
                        </p>
                        <CountButton
                          className={'text-xs'}
                          char={'+'}
                          onClick={() => dataInfo.increaseQuantity(item.id)}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between px-2 pb-2">
        <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-900">
          Total: ${dataInfo.data ? getTotalPrice(dataInfo.data) : 0.0}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (dataInfo.data) {
              dataInfo.clearAllQuantities()
            }
          }}
          className="text-md rounded-md bg-brandHighlight px-3 py-1 font-bold text-white transition-opacity hover:opacity-95 active:opacity-80"
        >
          Purchase
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  dataInfo: PropTypes.object.isRequired,
}

CartPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dataInfo: PropTypes.object.isRequired,
}
