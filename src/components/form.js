import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
    country: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Zabránime reload stránke
    console.log('Registration Data:', formData);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Odošleme dáta formulára
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Ukážeme správu, ak je úspešné
      } else {
        alert('Chyba pri registrácii: ' + data.message);
      }
    } catch (error) {
      console.error('Chyba pri odosielaní dát:', error);
      alert('Chyba pri komunikácii so serverom.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registračný formulár</h2>
      <div>
        <label>Meno:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Rok narodenia:</label>
        <input
          className="form-control"
          type="number"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleChange}
          min="1900"
          max={new Date().getFullYear()}
          required
        />
      </div>
      <div>
        <label>Štát:</label>
        <input
          className="form-control"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn mt-2" type="submit">
        Registrovať
      </button>
    </form>
  );
};

export default RegistrationForm;
