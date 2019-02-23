import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PorositySelector = () => {
  const [porosity, setPorosity] = useState('');
  const porosities = [
    {
      name: 'Baja',
      key: 'low'
    },
    { name: 'Media', key: 'medium' },
    { name: 'Alta', key: 'high' }
  ];

  return (
    <div>
      <p>Selecciona tu porosidad:</p>

      <ul className="list-group">
        {porosities.map(p => (
          <a
            href="#"
            key={p.key}
            className={`list-group-item list-group-item-action ${
              porosity === p.key ? 'active' : ''
            }`}
            onClick={() => setPorosity(p.key)}
          >
            {p.name}
          </a>
        ))}
      </ul>

      {porosity && (
        <p>
          <Link to="/days" className="btn btn-success mt-3">
            Continuar
          </Link>
        </p>
      )}
    </div>
  );
};

export default PorositySelector;
