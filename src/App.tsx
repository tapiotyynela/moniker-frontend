import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import {useAuth} from './hooks/useAuth'
import './App.css';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import GameHistory from './pages/GameHistory/GameHistory';
import Friends from './pages/Friends/Friends';
import AddWords from './pages/AddWords/AddWords';
import NewGame from './pages/NewGame/NewGame';
import Game from './pages/Game/Game';
import Round from "./pages/Round/Round";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const RequireAuth = ({ children }: any) => {
    const auth = useAuth()
    return auth?.user ? children : <Navigate to="/login" replace />;
  }
  
  return (
      <div className="App">
          <ToastContainer/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={
             <RequireAuth>
               <Home />
            </RequireAuth>} />
              <Route path="/stats" element={<RequireAuth>
                <Stats /></RequireAuth>} />
              <Route path="/gameHistory" element={<RequireAuth>
                <GameHistory /> </RequireAuth>} />
              <Route path="/friends" element={<RequireAuth>
                <Friends /></RequireAuth>} />
              <Route path="/addWords" element={<RequireAuth>
                <AddWords /></RequireAuth>} />
              <Route path="/newGame" element={<RequireAuth><NewGame /></RequireAuth>} />
              <Route path="/game" element={<RequireAuth><Game /></RequireAuth>} />
              <Route path="/round" element={<RequireAuth><Round /></RequireAuth>} />
          </Routes>
      </div>
  );
}

export default App;
