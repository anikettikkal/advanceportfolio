import { StrictMode } from 'react'
import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/HomePage/Home.jsx"
import Contact from "./pages/ContactPage/Contact.jsx"
import About from './pages/About/About.jsx'
import Layout from './Layout.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"about",
        element:<About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
