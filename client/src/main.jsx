import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './components/pages/home.pages.component.jsx'
import Page404 from './components/ui/404.ui.component.jsx'
import CategoriesPage from './components/pages/categories.pages.component.jsx';
import ProductDetails from './components/ui/productDetail.ui.component.jsx';
import ImageGallery from './components/utils/imgGallery.utils.component.jsx'
import UpdatePassword from './components/ui/updatePassword.ui.component.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Navigate to="/home" replace />} />
      <Route path="home" element={<HomePage />} />

      <Route path='/test' element={<ImageGallery />} />
      <Route path='/product/:id' element={<ProductDetails />} />

      <Route path="categories" element={<CategoriesPage />} />
      <Route path="SittingRoom" element={<CategoriesPage
        pageDesc={"Transform your sitting room with our elegant and functional seating options,perfect for every modern home."}
        pageTitle={"Sitting Room"}
        pageBaseUrl={'/products'}
        pageCategory={["Chairs","Sofas","Tables"]}
      />} />
      <Route path="Bedroom" element={<CategoriesPage
        pageDesc={"Transform your sitting room with our elegant and functional seating options,perfect for every modern home."}
        pageTitle={"Bedroom"}
        pageBaseUrl={'/products'}
        pageCategory={["Tables","Lighting"]}
      />} />
      <Route path="Accessories" element={<CategoriesPage
        pageDesc={"Transform your sitting room with our elegant and functional seating options,perfect for every modern home."}
        pageTitle={"Accessories"}
        pageBaseUrl={'/products'}
        pageCategory={["Lighting","Decor"]}
      />} />
      <Route path="Kitchen" element={<CategoriesPage
        pageDesc={"Transform your sitting room with our elegant and functional seating options,perfect for every modern home."}
        pageTitle={"Kitchen"}
        pageBaseUrl={'/products'}
        pageCategory={["Tables","Lighting"]}
      />} />
      <Route path="auth/resetpassword/:userid" element={<UpdatePassword />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
