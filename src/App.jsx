import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from "./auth/RequiredAuth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route
            path="home"
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
