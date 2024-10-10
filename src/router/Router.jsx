import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/home/Home";
import DashboardLayout from "../root/dashboardLayout/DashboardLayout";
import Dashboard from "../root/dashboardLayout/dashboard/Dashboard";
import AddProducts from "../root/dashboardLayout/addProducts/AddProducts";
import Products from "../pages/products/Products";
import ProductsDetails from "../pages/productsDetails/ProductsDetails";
import EditProducts from "../pages/EditProducts/EditProducts";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: '/products/:id',
          element: <ProductsDetails/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element:  <Dashboard/>
        },
        {
          path: 'add-products',
          element: <AddProducts/>
        },
        {
          path: 'edit',
          element: <EditProducts/>
        },
        {
          path: 'edit/:id',
          element: <UpdateProduct/>
        }
       
      ]
    }
    
  ]);