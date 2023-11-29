"use client";

import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://swebackendmars.onrender.com/api/login', {
        email,
        the_password: password,
      });
  
      const { access_token, userole } = response.data;
  
      // Assuming you want to store the token and user role in state or localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_role', userole);
  
      // Redirect based on user role
      if (userole === 'ADMIN') {
        window.location.href = '/admin_page';
      } else if (userole === 'DRIVER') {
        window.location.href = '/driver_page';
      } else if (userole === 'MAINTENANCE_PERSON') {
        window.location.href = '/maint_page';
      } else if (userole === 'FUELING_PERSON') {
        window.location.href = '/fuel_page';
      } else {
        // Add handling for other user roles or a default redirection
        window.location.href = '/fuel_page';
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Other content */}
        <div>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
    </main>
  );
};

export default Home;

