"use client";
import { useState } from 'react';
import axios from 'axios';

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    user_id: 23421,
    email: 'maintmark@gmail.com',
    givenname: 'maintmark',
    surname: 'maintmark',
    middle_name: 'maintmark',
    phone: 'maintmark',
    address: 'maintmark',
    the_password: 'maintmark',
    username: 'maintmark',
    salt: 'maintmark',
    government_id: '113232',
  });
  const goToHomePage = () => {
    // Redirect to the home page
    window.location.href = '/';
  };
  const goToAdmPage = () => {
    // Redirect to the home page
    window.location.href = '/admin_page';
  };

  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        'https://swebackendmars.onrender.com/api/the_admin/register_maintenance_person',
        {
          user_id: formData.user_id,
          email: formData.email,
          givenname: formData.givenname,
          surname: formData.surname,
          middle_name: formData.middle_name,
          phone: formData.phone,
          address: formData.address,
          the_password: formData.the_password,
          username: formData.username,
          salt: formData.salt,
          government_id: formData.government_id,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { message, user_id } = response.data;
      setRegistrationMessage(`Maintenance person registered successfully. User ID: ${user_id}. Message: ${message}`);
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationMessage('Registration error. Please check your input and try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

        
      <h1>Maintenance Person Registration</h1>
      <form>
        <div className="mb-3">
          <label>User ID:</label>
          <input type="text" name="user_id" value={formData.user_id} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Given Name:</label>
          <input type="text" name="givenname" value={formData.givenname} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Surname:</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Middle Name:</label>
          <input type="text" name="middle_name" value={formData.middle_name} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input type="text" name="the_password" value={formData.the_password} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Salt:</label>
          <input type="text" name="salt" value={formData.salt} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label>Government ID:</label>
          <input type="text" name="government_id" value={formData.government_id} onChange={handleInputChange} />
        </div>

        <button className="ml-4 text-green-500 hover:underline" type="button" onClick={handleRegistration}>
          Register Maintenacne Person
        </button>
      </form>

      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default DriverRegistration;
