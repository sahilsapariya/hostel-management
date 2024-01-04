import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

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
import Bills from "./pages/bills/Bills";
import BillInfo from "./pages/bills/BillInfo";
import AddBill from "./pages/bills/AddBill";
import UpdateBill from "./pages/bills/UpdateBill";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState(document.querySelector(".active")?.innerHTML);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {() => localStorage.getItem("token") && <Navbar />} */}
        <Sidebar
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
          setActiveMenu={setActiveMenu}
        />

        <Navbar
          setIsSidebarActive={setIsSidebarActive}
          activeMenu={activeMenu}
        />

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
            path="/bills"
            element={<ProtectedRoute element={<Bills />} />}
          />
          <Route
            path="/bill/add"
            element={<ProtectedRoute element={<AddBill />} />}
          />
          <Route
            path="/bill/update/:id"
            element={<ProtectedRoute element={<UpdateBill />} />}
          />
          <Route
            path="/bill/information/:id"
            element={<ProtectedRoute element={<BillInfo />} />}
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
