import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/home/Home";
import DashboardLayout from "../root/dashboardLayout/DashboardLayout";
import Dashboard from "../root/dashboardLayout/dashboard/Dashboard";
import AddProducts from "../root/dashboardLayout/addProducts/AddProducts";
import Products from "../pages/products/Products";


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
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout />, // Dashboard layout
      children: [
        {
          path: "",
          element:  <Dashboard/>
        },
        {
          path: 'add-products',
          element: <AddProducts/> // Example child route
        }
        // You can add more dashboard routes here
      ]
    }
    
  ]);