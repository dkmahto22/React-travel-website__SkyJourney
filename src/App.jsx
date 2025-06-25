
import FlightResults from './components/FlightResults';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import PopularDestinations from './pages/PopularDestinations';
import Dashboard from './admin/Dashboard';
import SupportDropdown from './components/SupoortMbl';
import AdminLogin from './admin/AdminLogin';
import PopularAirlineRoutes from './pages/PopularAirlineRoutes';
import FlightBookingForm from './components/FlightBookingForm';



function App() {
  return (

<>

<Routes>
  <Route path="/" element={<Home />} />
<Route path="/results" element={<FlightResults />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
<Route path="/cookie-policy" element={<CookiePolicy />} />
<Route path="/disclaimer" element={<Disclaimer />} />
<Route path="/popular-destinations" element={<PopularDestinations />} />
<Route path="/admin" element={<AdminLogin />} />
<Route path="/popular-routes" element={<PopularAirlineRoutes />} />
<Route path="/dashboard" element={localStorage.getItem("isAdmin") ? (<Dashboard />) : (<Navigate to="/admin" />)}/>
  <Route path="/supportmb" element={<SupportDropdown />} />
  <Route path="/booking" element={<FlightBookingForm />} />


</Routes>

    </>
  );
}

export default App;