// pages/dino/page.tsx
"use client";
// pages/dino/page.tsx
import { useEffect, useState } from 'react';

const DriverPage = () => {
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const storedToken = localStorage.getItem('access_token');
    setJwtToken(storedToken);
  }, []);

  const goToHomePage = () => {
    // Redirect to the home page
    window.location.href = '/';
  };
  const goToGetDriverCDataPage = () => {
    // Redirect to the register driver page
    window.location.href = '/driver_page/get_driver_columns';
  };
  const goToGetRouteDataPage = () => {
    // Redirect to the register driver page
    window.location.href = '/driver_page/get_route';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Driver Person Page</h1>
      
      {jwtToken ? (
        <div>
          <p className="mb-2">Your JWT Token:</p>
          <pre className="bg-gray-100 p-2 rounded">{jwtToken}</pre>
        </div>
      ) : (
        <p>No JWT Token found. Please log in.</p>
      )}

      <div className="mt-4">
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>
      <div className="mt-4">
        <button className="ml-4 text-green-500 hover:underline" onClick={goToGetDriverCDataPage}>
          Get Driver Data
        </button>
      </div>
      <div className="mt-4">
        <button className="ml-4 text-red-500 hover:underline" onClick={goToGetRouteDataPage}>
          Get Route
        </button>
      </div>
    </div>
  );
};

export default DriverPage;
