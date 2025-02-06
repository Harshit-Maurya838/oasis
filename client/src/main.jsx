import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './components/pages/home.pages.component.jsx'
import Page404 from './components/ui/404.ui.component.jsx'
import CategoriesPage from './components/pages/categories.pages.component.jsx'
import FilterTabs from './components/utils/filtertabs.utils.component.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Navigate to="/home" replace/>} />
      <Route path="home" element={<HomePage />} />
      <Route path="test" element={<FilterTabs enableText='All' filters={[
        'sofa',
        'Accent chair',
        'Lounge chair',
        'Coffee table',
        'Center table',
        'Flower pot',
        'lamp'
      ]}/>} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
