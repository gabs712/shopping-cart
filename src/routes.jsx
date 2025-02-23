import Home from './pages/home/Home'
import Root from './pages/root/Root'
import Products from './pages/products/Products'

export default [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]
