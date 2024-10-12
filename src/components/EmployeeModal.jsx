import React, { useState } from 'react';
import './EmployeeModal.css';

function EmployeeModal({ isOpen, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, position });
    setName('');
    setPosition('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Adaugă Angajat</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nume:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Pozitie:</label>
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
          </div>
          <button type="submit">Adaugă</button>
          <button type="button" onClick={onClose}>Închide</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeModal;
