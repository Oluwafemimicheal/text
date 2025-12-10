import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import AuthLayout from "./layout/AuthLayout";
import Contact from "./pages/Contact"

const routerPages = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
       path: "/", 
       element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
       },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Profile/>
      }
    ]
  },
  {
    path: "*",
    element: <div>404 Page not found</div>
  }
])


export default routerPages;