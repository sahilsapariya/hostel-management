import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import components for each route
import Home from "./pages/Home";
import Inventory from "./pages/inventory/Inventory";
import Profiles from "./pages/profiles/Profiles";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Information from "./pages/profiles/information/Information";
import AddPerson from "./pages/profiles/operation/add/AddPerson";
import UpdatePerson from "./pages/profiles/operation/update/UpdatePerson";
import Rooms from "./pages/rooms/Rooms";
import AddRoom from "./pages/rooms/AddRoom";
import Room from "./pages/rooms/Room";
import UpdateRoom from "./pages/rooms/UpdateRoom";
import AddItem from "./pages/inventory/AddItem";
import UpdateItems from "./pages/inventory/UpdateItems";
import ItemInfo from "./pages/inventory/ItemInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/inventory"
            element={<ProtectedRoute element={<Inventory />} />}
          />
          <Route
            path="/inventory/add"
            element={<ProtectedRoute element={<AddItem />} />}
          />
          <Route
            path="/inventory/update/:id"
            element={<ProtectedRoute element={<UpdateItems />} />}
          />
          <Route
            path="/inventory/information/:id"
            element={<ProtectedRoute element={<ItemInfo />} />}
          />

          <Route
            path="/rooms"
            element={<ProtectedRoute element={<Rooms />} />}
          />
          <Route
            path="/rooms/:id"
            element={<ProtectedRoute element={<Room />} />}
          />
          <Route
            path="/rooms/add"
            element={<ProtectedRoute element={<AddRoom />} />}
          />
          <Route
            path="/rooms/update/:id"
            element={<ProtectedRoute element={<UpdateRoom />} />}
          />

          <Route
            path="/profiles"
            element={<ProtectedRoute element={<Profiles />} />}
          />

          <Route
            path="/profiles/:category/:id"
            element={<ProtectedRoute element={<Information />} />}
          />
          <Route
            path="/profiles/:category/add"
            element={<ProtectedRoute element={<AddPerson />} />}
          />
          <Route
            path="/profiles/:category/update/:id"
            element={<ProtectedRoute element={<UpdatePerson />} />}
          />

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
