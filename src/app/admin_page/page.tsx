// pages/dino/page.tsx
"use client";
// // pages/dino/page.tsx
// import { useEffect, useState } from 'react';

// const AdminPage = () => {
//   const [jwtToken, setJwtToken] = useState<string | null>(null);

//   useEffect(() => {
//     // Retrieve the JWT token from local storage
//     const storedToken = localStorage.getItem('access_token');
//     setJwtToken(storedToken);
//   }, []);

//   const goToHomePage = () => {
//     // Redirect to the home page
//     window.location.href = '/';
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Welcome to Admin  Page</h1>
      
//       {jwtToken ? (
//         <div>
//           <p className="mb-2">Your JWT Token:</p>
//           <pre className="bg-gray-100 p-2 rounded">{jwtToken}</pre>
//         </div>
//       ) : (
//         <p>No JWT Token found. Please log in.</p>
//       )}

//       <div className="mt-4">
//         <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
//           Go to Home Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

// pages/dino/page.tsx
"use client";
import { useEffect, useState } from 'react';

const AdminPage = () => {
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

  const goToRegisterDriverPage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/register_driver';
  };
  const goToRegisterFuelPPage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/register_fuel';
  };
  const goToRegisterMaintPPage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/register_maint';
  };
  const goToGetAdminDataPage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/get_admin_data';
  };
  const goToGetAllUsersDataPage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/get_all_users';
  };
  const addavehiclePage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/add_a_vehicle';
  };
  const addaRoutePage = () => {
    // Redirect to the register driver page
    window.location.href = '/admin_page/add_a_route';
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Admin  Page</h1>
      
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
        <button className="ml-4 text-green-500 hover:underline" onClick={goToRegisterDriverPage}>
          Register Driver
        </button>
        <button className="ml-4 text-red-500 hover:underline" onClick={goToRegisterFuelPPage}>
          Register Fueling Person
        </button>
        <button className="ml-4 text-blue-500 hover:underline" onClick={goToRegisterMaintPPage}>
          Register Maintenance Person
        </button>
      </div>
      <div className="mt-4">
        <button className="ml-4 text-blue-500 hover:underline" onClick={goToGetAdminDataPage}>
          Get Admin Data
        </button>
        <button className="ml-4 text-blue-500 hover:underline" onClick={goToGetAllUsersDataPage}>
          Get All Users Data
        </button>
      </div>
      <div className="mt-4">
        <button className="ml-4 text-blue-500 hover:underline" onClick={addavehiclePage}>
          Add a Vehicle
        </button>
      </div>
      <div className="mt-4">
        <button className="ml-4 text-blue-500 hover:underline" onClick={addaRoutePage}>
          Add a Route
        </button>
      </div>

    </div>
  );
};

export default AdminPage;
