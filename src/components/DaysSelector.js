import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserParameters from '../models/UserParameters.ts';

const DaysSelector = () => {
  const userParameters = UserParameters.Instance;
  const [days, setDays] = useState([]);
  const selectedDays = [].concat(days);

  const weekDays = [
    { name: 'Lunes', key: 'mon' },
    { name: 'Martes', key: 'tue' },
    { name: 'Miércoles', key: 'wed' },
    { name: 'Jueves', key: 'thur' },
    { name: 'Viernes', key: 'fri' },
    { name: 'Sábado', key: 'sat' },
    { name: 'Domingo', key: 'sun' }
  ];

  const isSelected = day => {
    return selectedDays.indexOf(day) !== -1;
  };

  const handleClick = (e, day) => {
    e.preventDefault();

    if (isSelected(day)) {
      selectedDays.splice(selectedDays.indexOf(day), 1);
      setDays(selectedDays);
      return;
    }
    if (selectedDays.length === 3) {
      return;
    }
    selectedDays.push(day);
    setDays(selectedDays);
    userParameters.setDays(selectedDays);
  };

  return (
    <div>
      <p>
        Selecciona <strong>tres (3)</strong> días donde realizaras las máscaras:
      </p>

      <ul className="list-group">
        {weekDays.map(day => (
          <a
            href="#"
            key={day.key}
            className={`list-group-item list-group-item-action ${
              isSelected(day.key) ? 'active' : ''
            }`}
            onClick={e => {
              handleClick(e, day.key);
            }}
          >
            {day.name}
          </a>
        ))}
      </ul>
      {days.length === 3 && (
        <p>
          <Link to="/week" className="btn btn-success mt-3">
            Continuar
          </Link>
        </p>
      )}
    </div>
  );
};

export default DaysSelector;
