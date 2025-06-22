import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Layout Components
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

// Public Pages
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';

// Dashboard Pages
import Home from './components/Home';
import Summary from './components/Summary';
import Orders from './components/Orders';
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Funds from './components/Funds';
import Apps from './components/Apps';


// Modal and Context
import OpenBuySellProvider from './components/context/OpenBuySellProvider';
import BuyWindow from './components/BuyWindow';

// ✅ Protected Route: only accessible if logged in
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('login') === 'true';
  return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} replace />;
};

// ✅ Public Route: only accessible if NOT logged in
const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('login') === 'true';
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : children;
};

// ✅ Main AppWrapper
const AppWrapper = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        {/* Public routes (accessible only if logged OUT) */}
        <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/pricing" element={<PublicRoute><PricingPage /></PublicRoute>} />
        <Route path="/product" element={<PublicRoute><ProductPage /></PublicRoute>} />
        <Route path="/about" element={<PublicRoute><AboutPage /></PublicRoute>} />
        <Route path="/support" element={<PublicRoute><SupportPage /></PublicRoute>} />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
      <BuyWindow />
    </>
  );
};

// ✅ Final render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <OpenBuySellProvider>
        <AppWrapper />
      </OpenBuySellProvider>
    </BrowserRouter>
  </Provider>
);
