import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import useFirstLoad from '../../hooks/useFirstLoad'
import getNavStyles from './utils/getNavStyles'
import Cart from './Cart'

export default function Header({ dataInfo }) {
  const { isFirstLoad, disableFirstLoad } = useFirstLoad()

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
    <header className="sticky top-0 flex min-h-11 items-center bg-slate-700 px-3.5 py-3 will-change-contents">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="bold text-lg font-bold text-brandHighlight">ShopingApp</p>
        <div className="flex gap-6">
          <nav>
            <ul className="flex gap-3">
              {pages.map((page) => (
                <li key={page.name}>
                  <NavLink
                    className={({ isActive }) =>
                      getNavStyles(isActive, isFirstLoad)
                    }
                    to={page.link}
                    onClick={disableFirstLoad}
                  >
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Cart dataInfo={dataInfo} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  dataInfo: PropTypes.object.isRequired,
}
