import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Account from './components/Account/Account'
import History from './components/History/History'
import Products from './components/Products/Products'

// Import router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/account',
    element: <div><Account/></div>
  },
  {
    path: '/history',
    element: <div><History/></div>
  },
  {
    path: '/products',
    element: <div><Products/></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
