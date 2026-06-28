import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/LayoutComponent/Header/Header.jsx';
import Footer from './components/LayoutComponent/Footer/Footer.jsx';
import Loader from './components/Loader.jsx';
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

// Code Splitting with lazy imports
const Home = lazy(() => import('./Pages/Home/index.jsx'));
const PropertyDetails = lazy(() => import('./Pages/PropertyDetails/index.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          {/* Wrap dynamic imports with Suspense */}
          <Suspense fallback={
            <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Loader message="Loading page..." />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
