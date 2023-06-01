import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home/Home';


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes