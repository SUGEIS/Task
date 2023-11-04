// AddUserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';

const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !username) {
      setSuccessMessage('Please fill in all fields.');
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      username,
    };

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      onAddUser(response.data);
      setName('');
      setEmail('');
      setPhone('');
      setUsername('');
      setSuccessMessage('User Information added successfully!');

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };

  return (
    <div className="add-user-form"> 
      <h2>ADD USER</h2>
      {successMessage && <div style={{ fontWeight: 'bold', color: 'green' }}>{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br/>
        <div>
          <label>Username:</label> <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /> 
        </div>
        <br/>
        <div>
          <label>Email:</label>   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <br/>
        <div>
          <label>Phone:</label>   <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;
