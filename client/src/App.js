import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import components for each route
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/profiles/Profiles";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Information from "./pages/profiles/information/Information";
import AddPerson from "./pages/profiles/operation/add/AddPerson";
import UpdatePerson from "./pages/profiles/operation/update/UpdatePerson";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} />}
          />
          <Route
            path="/profiles"
            element={<ProtectedRoute element={<Profiles />} />}
          />

          <Route path="/profiles/:category/:id" element={<ProtectedRoute element={<Information />} />}  />
          <Route path="/profiles/:category/add" element={<ProtectedRoute element={<AddPerson />} />}  />
          <Route path="/profiles/:category/update/:id" element={<ProtectedRoute element={<UpdatePerson />} />}  />



          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRoute({ element }) {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default App;
