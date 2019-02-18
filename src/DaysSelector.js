import React, { useState } from "react";
import { Link } from "react-router-dom";

const DaysSelector = () => {
  const [dias, setDias] = useState("");

  return (
    <div>
      <p>Selecciona tus dias de lavado:</p>
    </div>
  );
};

export default DaysSelector;
