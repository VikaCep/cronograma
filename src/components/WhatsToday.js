import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserParameters from '../models/UserParameters.ts';
import Schedule from '../models/Schedule.ts';

const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
const today = days[new Date().getDay()];
let whatsToday = '';
const userParameters = UserParameters.Instance;

const WhatsToday = () => {
  const [resetPrefs, setResetPrefs] = useState(false);

  if (!userParameters.hasSavedParameters) {
    return <Redirect to="/porosity" />;
  }
  const days = userParameters.days;
  const washingDayIndex = days.indexOf(today);

  if (washingDayIndex === -1) {
    whatsToday = 'Nada! Hoy no es dia de lavado :)';
  } else {
    const weekRoutine = Schedule.getForPorosityAndWeek(
      userParameters.porosity,
      userParameters.currentWeek
    );
    whatsToday = weekRoutine[washingDayIndex];
  }

  const handleResetClick = e => {
    e.preventDefault();
    userParameters.reset();
    setResetPrefs(true);
  };

  return (
    <div>
      <div className="lead">
        Hoy te toca: <h3 className="text-success">{whatsToday}</h3>
      </div>
      {washingDayIndex > -1 && (
        <div>
          Vas por el lavado {washingDayIndex + 1} de la semana{' '}
          {userParameters.currentWeek}
        </div>
      )}
      <div>
        <button
          onClick={e => handleResetClick(e)}
          className="btn btn-primary mt-5"
        >
          Volver a ingresar preferencias
        </button>
      </div>
      {resetPrefs && <Redirect to="/porosity" />}
    </div>
  );
};

export default WhatsToday;
