// pages/AddRoutePage.tsx
"use client";
import { useState } from 'react';
import axios from 'axios';

const goToHomePage = () => {
    // Redirect to the home page
    window.location.href = '/';
  };
  
  const goToAdmPage = () => {
    // Redirect to the admin page
    window.location.href = '/admin_page';
  };

const AddRoutePage = () => {
  const [routeData, setRouteData] = useState({
    route_id: '',
    start_time: '',
    end_time: '',
    start_point_lang: '',
    start_point_lat: '',
    end_point_lang: '',
    end_point_lat: '',
    status: '',
    thedate: '',
  });

  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));

  const handleAddRoute = async () => {
    try {
      const response = await axios.post(
        'https://swebackendmars.onrender.com/api/routes/add',
        routeData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data); // Log the response data (success message)
      setSuccessMessage('Route added successfully');

      // Handle success, e.g., show a success message or redirect to another page
    } catch (error) {
      console.error('Error adding route:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRouteData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
        <div>
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>
      <div>
        <button className="text-blue-500 hover:underline" onClick={goToAdmPage}>
          Go to Admin Page
        </button>
      </div>
      <h1>Add Route</h1>
      <form>
        <div className="mb-3">
          <label>Route ID:</label>
          <input type="text" name="route_id" value={routeData.route_id} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Start Time:</label>
          <input type="text" name="start_time" value={routeData.start_time} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>End Time:</label>
          <input type="text" name="end_time" value={routeData.end_time} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Start Point Latitude:</label>
          <input type="text" name="start_point_lat" value={routeData.start_point_lat} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Start Point Longitude:</label>
          <input type="text" name="start_point_lang" value={routeData.start_point_lang} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>End Point Latitude:</label>
          <input type="text" name="end_point_lat" value={routeData.end_point_lat} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>End Point Longitude:</label>
          <input type="text" name="end_point_lang" value={routeData.end_point_lang} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Status:</label>
          <input type="text" name="status" value={routeData.status} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Date:</label>
          <input type="text" name="thedate" value={routeData.thedate} onChange={handleInputChange} />
        </div>

        <button className="ml-4 text-green-500 hover:underline" type="button" onClick={handleAddRoute}>
          Add Route
        </button>
      </form>
    </div>
  );
};

export default AddRoutePage;
