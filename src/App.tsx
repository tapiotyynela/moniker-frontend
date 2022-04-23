import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useNavigate } from "react-router-dom";
import {useAuth} from './hooks/useAuth'
import './App.css';

const App = () => {
  const Navigation = () => {
    return (
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    );
  };
  const RequireAuth = ({ children }: any) => {
    const { authed } = useAuth();
  
    return authed === true ? children : <Navigate to="/login" replace />;
  }
  return (
      <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={
              <RequireAuth>
                <Register />
              </RequireAuth>
            } />
          </Routes>
      </div>
  );
}

export default App;
