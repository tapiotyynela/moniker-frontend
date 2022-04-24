import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useNavigate } from "react-router-dom";
import {useAuth} from './hooks/useAuth'
import './App.css';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import GameHistory from './pages/GameHistory/GameHistory';
import Friends from './pages/Friends/Friends';
import AddWords from './pages/AddWords/AddWords';
import NewGame from './pages/NewGame/NewGame';

const App = () => {
  const RequireAuth = ({ children }: any) => {
    const { authed } = useAuth();
  
    return authed === true ? children : <Navigate to="/login" replace />;
  }
  return (
      <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/gameHistory" element={<GameHistory />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/addWords" element={<AddWords />} />
            <Route path="/newGame" element={<NewGame />} />
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
