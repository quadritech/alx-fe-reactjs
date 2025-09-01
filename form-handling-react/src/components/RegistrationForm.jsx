import React, { useState } from 'react'

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form logic here
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {errors.username && <span style={{color: 'red'}}>{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email" id="email" name="email" required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm