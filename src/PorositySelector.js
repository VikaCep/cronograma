import React, { useState } from "react";
import { Link } from "react-router-dom";

const PorositySelector = () => {
  const [porosidad, setPorosidad] = useState("");

  return (
    <div>
      <p>Selecciona tu porosidad:</p>

      <select value={porosidad} onChange={e => setPorosidad(e.target.value)}>
        <option value="">Elegir</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>

      {porosidad && (
        <p>
          <Link to="/days">Continuar</Link>
        </p>
      )}
    </div>
  );
};

export default PorositySelector;
