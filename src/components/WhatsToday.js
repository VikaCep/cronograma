import React from 'react';
import { Redirect } from 'react-router-dom';
import UserParameters from '../models/UserParameters.ts';

const WhatsToday = () => {
  const userParameters = UserParameters.Instance;

  return (
    <div>
      {userParameters.hasSavedParameters ? (
        <span>"Hoy te toca ... "</span>
      ) : (
        <Redirect to="/porosity" />
      )}
    </div>
  );
};

export default WhatsToday;
