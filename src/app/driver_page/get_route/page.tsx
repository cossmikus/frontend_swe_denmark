// pages/GetRoutesPage.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const goToHomePage = () => {
  // Redirect to the home page
  window.location.href = '/';
};
const goToDriverPage = () => {
    // Redirect to the home page
    window.location.href = '/driver_page';
  };

const GetRoutesPage = () => {
  const [routes, setRoutes] = useState([]);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get('https://swebackendmars.onrender.com/api/routes', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    if (jwtToken) {
      fetchRoutes();
    }
  }, [jwtToken]);

  return (
    <div>
      <div>
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>
      <div>
        <button className="text-blue-500 hover:underline" onClick={goToDriverPage}>
          Go to Driver Page
        </button>
      </div>

      <h1>Routes</h1>
      {routes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Route ID</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Start Point (Lat, Lang)</th>
              <th>End Point (Lat, Lang)</th>
              <th>Status</th>
              <th>Date</th>
              <th>Registered By</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.route_id}>
                <td>{route.route_id}</td>
                <td>{route.start_time}</td>
                <td>{route.end_time}</td>
                <td>
                  ({route.start_point_lat}, {route.start_point_lang})
                </td>
                <td>
                  ({route.end_point_lat}, {route.end_point_lang})
                </td>
                <td>{route.status}</td>
                <td>{route.thedate}</td>
                <td>{route.registered_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No routes found.</p>
      )}
    </div>
  );
};

export default GetRoutesPage;
