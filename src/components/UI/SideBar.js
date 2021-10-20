import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="bg-primary border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/faltantes"
        >
          Faltantes
        </Link>
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/guias"
        >
          Guias
        </Link>
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/reportes"
        >
          Reportes
        </Link>
      </div>
    </div>
  );
};
