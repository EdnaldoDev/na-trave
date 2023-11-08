import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Component, useState } from "react";


export const PrivateRouter = ({ component: Component, isAuth, ...rest }) => {
    return isAuth ? <Component title='Pefil'/> : <Navigate to='/login'/>
};

export function RoutesPath() {
    const [isAuth, setIsAutj]=useState((JSON.parse(localStorage.getItem('auth'))?.token || false))

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login title='Login'/>} />
      <Route path="/signUp" element={<SignUp title='Sign Up'/>} />
      <Route path="/dashboard" element={<Dashboard title='Dashboard'/>} />
      <Route path="/profile" element={<PrivateRouter component={Profile} isAuth={isAuth} />}/>
    </Routes>
  );
}
