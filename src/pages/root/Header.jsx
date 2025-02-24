import { ShoppingBasket } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex min-h-11 items-center bg-slate-700 px-3.5 py-3">
      <div className="flex w-full items-center justify-between">
        <p className="bold text-lg font-bold text-blue-400">ShopingApp</p>
        <div className="flex gap-6">
          <nav className="flex gap-3 text-slate-200">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
          </nav>
          <button className="mr-2 flex items-center bg-slate-700">
            <ShoppingBasket className="stroke-slate-100" />
          </button>
        </div>
      </div>
    </header>
  )
}
