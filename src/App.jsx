import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" component={Home} exact></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
