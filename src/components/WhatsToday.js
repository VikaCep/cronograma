import React from 'react';
import { Redirect } from 'react-router-dom';
import UserParameters from '../models/UserParameters.ts';
import Schedule from '../models/Schedule.ts';

const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
const today = days[new Date().getDay()];
let whatsToday = '';

const WhatsToday = () => {
  const userParameters = UserParameters.Instance;

  if (!userParameters.hasSavedParameters) {
    return <Redirect to="/porosity" />;
  }
  const days = userParameters.days;
  const washingDayIndex = days.indexOf(today);

  if (washingDayIndex === undefined) {
    whatsToday = 'Nada! Hoy no es dia de lavado :)';
  } else {
    const weekRoutine = Schedule.getForPorosityAndWeek(
      userParameters.porosity,
      userParameters.week
    );
    whatsToday = weekRoutine[washingDayIndex];
  }

  return (
    <div>
      <p class="lead">
        Hoy te toca: <h3 class="text-success">{whatsToday}</h3>
      </p>
    </div>
  );
};

export default WhatsToday;
