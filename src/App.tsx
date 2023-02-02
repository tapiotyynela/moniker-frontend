import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./App.css";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import GameHistory from "./pages/GameHistory/GameHistory";
import Friends from "./pages/Friends/Friends";
import AddWords from "./pages/AddWords/AddWords";
import NewGame from "./pages/NewGame/NewGame";
import Game from "./pages/Game/Game";
import Round from "./pages/Round/Round";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/stats"
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
          <Route
            path="/gameHistory"
            element={
              <PrivateRoute>
                <GameHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <PrivateRoute>
                <Friends />
              </PrivateRoute>
            }
          />
          <Route
            path="/addWords"
            element={
              <PrivateRoute>
                <AddWords />
              </PrivateRoute>
            }
          />
          <Route
            path="/newGame"
            element={
              <PrivateRoute>
                <NewGame />
              </PrivateRoute>
            }
          />
          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
          <Route
            path="/round"
            element={
              <PrivateRoute>
                <Round />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
