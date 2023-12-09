import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components for each route
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/profiles" Component={Profiles} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
