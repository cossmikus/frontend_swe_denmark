// pages/AllUsersPage.tsx
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

const AllUsersPage = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('https://swebackendmars.onrender.com/api/the_admin/users', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setAllUsersData(response.data);
      } catch (error) {
        console.error('Error fetching all users:', error);
      }
    };

    if (jwtToken) {
      fetchAllUsers();
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

      <h1>All Users</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Role</th>
            <th>Given Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Username</th>
            <th>Salt</th>
            <th>Government ID</th>
          </tr>
        </thead>
        <tbody>
          {allUsersData.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.user_role}</td>
              <td>{user.givenname}</td>
              <td>{user.surname}</td>
              <td>{user.middle_name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.username}</td>
              <td>{user.salt}</td>
              <td>{user.government_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersPage;
