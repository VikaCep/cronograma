import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserParameters from '../models/UserParameters.ts';

const weeks = [1, 2, 3, 4];
const userParameters = UserParameters.Instance;

const WeekSelector = () => {
  const [weekNumber, setWeekNumber] = useState(1);
  const handleClick = (e, week) => {
    e.preventDefault();
    setWeekNumber(week);
    userParameters.setWeek(week);
  };

  return (
    <div>
      <div>
        <p>
          Si recien comienzas, deja seleccionada la semana{' '}
          <strong>uno (1)</strong>
        </p>
        <p>
          Si por lo contrario ya comenzaste el cronograma, selecciona por cuál
          semana vas.
        </p>
      </div>

      <ul className="list-group">
        {weeks.map(number => (
          <a
            href="#"
            key={number}
            className={`list-group-item list-group-item-action ${
              number === weekNumber ? 'active' : ''
            }`}
            onClick={e => {
              handleClick(e, number);
            }}
          >
            Semana {number}
          </a>
        ))}
      </ul>

      <p>
        <Link to="/" className="btn btn-success mt-3">
          Continuar
        </Link>
      </p>
    </div>
  );
};

export default WeekSelector;
