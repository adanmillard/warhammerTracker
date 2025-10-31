import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import LandingPage from './pages/LandingPage.tsx'
import Profile from './pages/Profile.tsx'
import Collection from './pages/Collection.tsx'
import Layout from './components/Layout.tsx'
import RouterProtector from './components/RouteProtector.tsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          element: <LandingPage />,
          index: true
        },
        {
          path: "/profile",
          element: (
            <RouterProtector>
              < Profile />
            </RouterProtector >
          ),
        },
        {
          path: "/collections",
          element: (
            <RouterProtector>
              <Collection />
            </RouterProtector >
          )
        }
      ]
    },
])

  return (

    <div>
      <RouterProvider router={router} />
     </div>

  )
}

export default App
