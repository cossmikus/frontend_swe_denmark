// pages/AddVehiclePage.tsx
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

const AddVehiclePage = () => {
  const [newVehicleData, setNewVehicleData] = useState({
    vehicle_id: '',
    driver_id: '',
    model: '',
    make: '',
    theyear: '',
    license_plate: '',
    sitting_capacity: '',
    status: '',
  });

  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleVehicleRegistration = async () => {
    try {
      const response = await axios.post(
        'https://swebackendmars.onrender.com/api/vehicles/add',
        newVehicleData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setRegistrationMessage(response.data.message);
    } catch (error) {
      console.error('Vehicle registration failed:', error);
      setRegistrationMessage('Vehicle registration error. Please check your input and try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicleData((prevData) => ({ ...prevData, [name]: value }));
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
      <h1>Add New Vehicle</h1>
      <form>
        <div className="mb-3">
          <label>Vehicle ID:</label>
          <input
            type="text"
            name="vehicle_id"
            value={newVehicleData.vehicle_id}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>Driver ID:</label>
          <input
            type="text"
            name="driver_id"
            value={newVehicleData.driver_id}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={newVehicleData.model}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={newVehicleData.make}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>The year:</label>
          <input
            type="text"
            name="theyear"
            value={newVehicleData.theyear}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>License Plate:</label>
          <input
            type="text"
            name="license_plate"
            value={newVehicleData.license_plate}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>The sitting capacity:</label>
          <input
            type="text"
            name="sitting_capacity"
            value={newVehicleData.sitting_capacity}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={newVehicleData.status}
            onChange={handleInputChange}
          />
        </div>




        <button type="button" onClick={handleVehicleRegistration}>
          Add Vehicle
        </button>
      </form>

      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default AddVehiclePage;
