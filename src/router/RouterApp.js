import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Components import
import { ProductsContext } from "../components/Products/ProductsContext";
import { FaltantesScreen } from "../components/Faltantes/FaltantesScreen";
import { ReportesScreen } from "../components/Reportes/ReportesScreen";
import { GuiasScreen } from "../components/Guias/GuiasScreen";


// UI imports
import { NavBar } from "../components/UI/NavBar";
import { SideBar } from "../components/UI/SideBar";
import "../components/UI/NavBarStyles.css";

export const RouterApp = () => {
  const [faltantes, setFaltantes] = useState([]);

  

  const [toggledBtn, setToggledBtn] = useState(false);
  return (
    <>
      <ProductsContext.Provider value={{ faltantes }}>
        <Router>
          <div className={`${toggledBtn ? "toggled" : ""} d-flex`} id="wrapper">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/*  <!-- Page Content--> */}
            <div id="page-content-wrapper">
              <NavBar {...{ toggledBtn, setToggledBtn }} />

              <div className="container-fluid">
                <Switch>
                  <Route exact path="/reportes" component={ReportesScreen} />
                  <Route exact path="/faltantes" component={FaltantesScreen} />
                  <Route exact path="/guias" component={GuiasScreen} />
                  <Redirect to="/reportes" />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </ProductsContext.Provider>
    </>
  );
};
