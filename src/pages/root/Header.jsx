import PropTypes from 'prop-types'
import { ShoppingBasket } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Header({ itemsInCart = 0 }) {
  const pages = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
  ]

  return (
    <header className="flex min-h-11 items-center bg-slate-700 px-3.5 py-3">
      <div className="flex w-full items-center justify-between">
        <p className="bold text-lg font-bold text-brandHighlight">ShopingApp</p>
        <div className="flex gap-6">
          <nav>
            <ul className="flex gap-3">
              {pages.map((page) => (
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-white text-slate-200 ${
                      isActive
                        ? 'underline decoration-2 underline-offset-4 decoration-brandHighlight'
                        : ''
                    }`
                  }
                  key={page.name}
                  to={page.link}
                >
                  {page.name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <button className="mr-2 flex items-center bg-slate-700">
            <div className="relative transition-transform ease-in-out hover:scale-125">
              <ShoppingBasket
                aria-label="Shopping cart"
                className="stroke-slate-100 size-6"
              />
              <div className="absolute bottom-0 right-0 translate-y-1.5 will-change-transform translate-x-1">
                <p className="sr-only" id="cart-label">
                  Number of items in cart:
                </p>
                <div className="grid size-3.5 place-content-center rounded-full bg-brandHighlight/80">
                  <p
                    className="text-[.7rem] whitespace-nowrap font-bold text-white"
                    aria-live="polite"
                    aria-labelledby="cart-label"
                  >
                    {itemsInCart > 99 ? 99 : itemsInCart}
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  itemsInCart: PropTypes.number,
}
