import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Overview from "./pages/dashboard/Overview";
import CreateAd from "./pages/dashboard/CreateAd";
import VendorAds from "./pages/dashboard/VendorAds";
import VenLogin from "./pages/auth/VenLogin";
import Vensignup from "./pages/auth/Vensignup";
import Hero from "./pages/user/Hero";
import Popup from "./pages/user/Popup";
import VendorProfile from "./pages/dashboard/VendorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/popup" element={<Popup />} />

        <Route element={<RootLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/adverts" element={<Adverts />} />
          <Route path="/adverts/:id" element={<SingleAd />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/venlogin" element={<VenLogin />} />
        <Route path="/vensignup" element={<Vensignup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="vendor-profile" element={<VendorProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
