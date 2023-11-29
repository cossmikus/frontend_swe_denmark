// pages/AdminProfilePage.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const goToHomePage = () => {
  // Redirect to the home page
  window.location.href = '/';
};

const goToAdmPage = () => {
  // Redirect to the admin page
  window.location.href = '/admin_page';
};

const AdminProfilePage = () => {
  const [adminData, setAdminData] = useState(null);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await axios.get('https://swebackendmars.onrender.com/api/the_admin/profile', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setAdminData(response.data);
      } catch (error) {
        console.error('Error fetching admin profile:', error);
      }
    };

    if (jwtToken) {
      fetchAdminProfile();
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
        <button className="text-blue-500 hover:underline" onClick={goToAdmPage}>
          Go to Admin Page
        </button>
      </div>

      <h1>Admin Profile</h1>
      {adminData ? (
        <div>
          <p>User ID: {adminData.user_id}</p>
          <p>User Role: {adminData.user_role}</p>
          <p>Given Name: {adminData.givenname}</p>
          <p>Surname: {adminData.surname}</p>
          <p>Middle Name: {adminData.middle_name}</p>
          <p>Phone: {adminData.phone}</p>
          <p>Email: {adminData.email}</p>
          <p>Address: {adminData.address}</p>
          <p>Password: {adminData.the_password}</p>
          <p>Username: {adminData.username}</p>
          <p>Salt: {adminData.salt}</p>
          <p>Government ID: {adminData.government_id}</p>
        </div>
      ) : (
        <p>Loading admin profile...</p>
      )}
    </div>
  );
};

export default AdminProfilePage;
