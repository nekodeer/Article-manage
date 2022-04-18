import { useRoutes } from "react-router-dom"
import App from "./App"
import Edit from "./pages/Edit"
import Login from "./pages/Login"
import Means from "./pages/Means"
import Register from "./pages/Register"
import List from "./pages/List"

export default function Router(){
  const element = useRoutes([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'list',
          element:<List/>
        },
        {
          path:'edit',
          element:<Edit/>
        },
        {
          path:'edit/:id',
          element:<Edit/>
        },
        {
          path:'means',
          element:<Means/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ])

  return element
}