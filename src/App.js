import React, { useState } from 'react';
import EmployeeModal from './components/EmployeeModal';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Gestionare Angajați</h1>
      <button onClick={() => setModalOpen(true)}>Adaugă Angajat</button>
      <EmployeeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAdd={addEmployee} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nume</th>
            <th>Pozitie</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
