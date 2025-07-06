import React from "react"
import Layout from "./Layout"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Product from './components/pages/Products'
import UserProfile from './components/pages/UserProfile'
import Register from './components/pages/Register'
import Cart from './components/pages/Cart'
import Feed from "./components/pages/Feed"
import Mypets from "./components/pages/Mypets"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="products" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="feed" element={<Feed />}/>
      <Route path = "userprofile" element={<UserProfile />}/>
      <Route path = "mypets" element={<Mypets />}/>
    </Route>
  )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
