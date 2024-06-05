import React, { useState } from 'react';
import MovementsList from './components/MovementsList';
import NewMovementForm from './components/NewMovementForm';

function App() {
  const [movementsChanged, setMovementsChanged] = useState(false);

  const handleMovementAdded = () => {
    setMovementsChanged(!movementsChanged);
  };

  return (
    <div className="App">
      <h1>Financial Management</h1>
      <NewMovementForm onMovementAdded={handleMovementAdded} />
      <MovementsList key={movementsChanged} />
    </div>
  );
}

export default App;
