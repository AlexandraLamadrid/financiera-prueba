import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovementsList = () => {
  const [movements, setMovements] = useState([]);
  const [capital, setCapital] = useState(0);

  useEffect(() => {
    fetchMovements();
    fetchCapital();
  }, []);

  const fetchMovements = async () => {
    try {
      const response = await axios.get('http://localhost:3000/movements');
      setMovements(response.data);
    } catch (error) {
      console.error('Error fetching movements:', error);
    }
  };

  const fetchCapital = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/movements/capital',
      );
      setCapital(response.data);
    } catch (error) {
      console.error('Error fetching capital:', error);
    }
  };

  return (
    <div>
      <h2>Movements List</h2>
      <ul>
        {movements.map((movement) => (
          <li key={movement._id}>
            {movement.description} - ${movement.amount} ({movement.type})
          </li>
        ))}
      </ul>
      <h3>Current Capital: ${capital}</h3>
    </div>
  );
};

export default MovementsList;
