import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookingModal from "../components/Common/BookingModal";

const MainLayout = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="bg-white text-dark antialiased overflow-x-hidden min-h-screen flex flex-col">
      <div id="loading-bar"></div>
      <Navbar onBookAppointment={openBooking} />
      <main className="flex-1">
        <Outlet context={{ openBooking }} />
      </main>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default MainLayout;