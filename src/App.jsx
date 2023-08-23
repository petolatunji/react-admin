import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'

import User from './pages/user/User'
import Product from './pages/product/Product'

function App() {
  const Layout = () => {
    return (
      <div className='bg-slate-50'>
        <Navbar />

        <div className='flex'>
          <div className='max-w-max xl:w-[250px] px-1 py-5 '>
            <Menu />
          </div>

          <div className=' w-full px-1 py-5'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
