import "./App.css";

import Home from "./pages/Home/index";
import Guide from "./pages/Guide/index";
import Dashboard from "./pages/Dashboard/index";
import MenuComponent from "./components/MenuComponent/index"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App new_font">
        <MenuComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guia" element={<Guide />} />
            <Route path="/cidades" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
