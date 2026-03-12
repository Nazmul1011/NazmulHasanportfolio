// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// --- public site
import Navbar from "./components/Navbar";
import { FooterHome } from "./pages/home/footerHome";
import Home from "./pages/home/home.jsx";
import Help from "./pages/help/Help.jsx";
import ContactUs from "./pages/Contact.jsx";
import Methodology from "./pages/home/Methodology.jsx";
import MobileMethodology from "./pages/home/MobileMethodology.jsx";
import useScrollReveal from "./components/useScrollReveal.js";

// ---------------- Layouts ----------------
function DefaultLayout() {
  useScrollReveal();
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="reveal">
    <FooterHome />
      </div>
      
    </div>
  );
}

// ---------------- App Router ----------------
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public site (Navbar + Footer) */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<div>Feature</div>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/mobile-methodology" element={<MobileMethodology />} />
        </Route>

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="p-6 text-center text-slate-600">
              Page not found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
