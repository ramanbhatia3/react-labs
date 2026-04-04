import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function Layouts() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/class-11' element={<Class11 />}></Route>
            <Route path='/class-12' element={<Class12 />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return (
    <div style={{height: "100vh"}}>
      <Header />
      <div style={{height: "90vh"}}>
        <Outlet /> {/* <Slots /> */}
      </div>
      Footer | Contact Us
    </div>
  )
}

function Header() {
  return (
    <div>
      <Link to={"/"}>Allen </Link>
      <Link to={"/class-11"}>Class 11 </Link>
      <Link to={"/class-12"}>Class 12 </Link>
    </div>
  )
}

function ErrorPage() {
  return (
    <div>
      Page Not Found!
    </div>
  )
}

function Landing() {
  return (
    <div>
      Welcome!
    </div>
  )
}

function Class11() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime excepturi labore accusamus aliquid rem asperiores necessitatibus tempore dolorum dolorem assumenda quis fuga consectetur incidunt, temporibus et debitis officia beatae at!
    </div>
  )
}

function Class12() {
  const navigate = useNavigate()

  function redirectUser(){
    navigate("/")
  }

  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum voluptatem, accusamus ipsum ad adipisci molestias, vero sint voluptatum repudiandae quidem, sunt iure quia. Exercitationem ullam corrupti quasi praesentium, ipsum perferendis voluptatum ratione animi, molestias dolorum consequatur placeat ab numquam perspiciatis tempore provident eveniet, omnis rerum! Beatae fugit quod ducimus! Nisi.

      <button onClick={redirectUser}>Go back to Landing Page</button>
    </div>
  )
}

export default Layouts