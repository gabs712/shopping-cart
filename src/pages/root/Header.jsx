import { ShoppingBasket } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
            <ShoppingBasket className="stroke-slate-100" />
          </button>
        </div>
      </div>
    </header>
  )
}
