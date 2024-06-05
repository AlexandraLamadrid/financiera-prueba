import React, { useState } from 'react';
import axios from 'axios';

const NewMovementForm = ({ onMovementAdded }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', {
      description,
      amount: parseFloat(amount),
      type,
    }); // Log datos del formulario
    try {
      const response = await axios.post('http://localhost:3000/movements', {
        description,
        amount: parseFloat(amount),
        type,
      });
      console.log('Response:', response.data); // Log de la respuesta del servidor
      setDescription('');
      setAmount('');
      setType('');
      onMovementAdded();
    } catch (error) {
      console.error('Error adding movement:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add Movement</button>
    </form>
  );
};

export default NewMovementForm;
