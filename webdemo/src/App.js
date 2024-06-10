import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Default from "./layouts/default";
import Signup from "./pages/SignUp";
import "primereact/resources/themes/lara-light-cyan/theme.css";
<script src="https://cdn.tailwindcss.com"></script>;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
