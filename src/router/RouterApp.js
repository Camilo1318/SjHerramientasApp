import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ClientesScreen } from "../components/Clientes/ClientesScreen";
import { NavBar } from "../components/UI/NavBar";
import { ProductsContext } from "../components/Products/ProductsContext";
import { ProductsScreen } from "../components/Products/ProductsScreen";
import { SalesScreen } from "../components/Sales/SalesScreen";

import { db } from "../Firebase"; //import Firestore of Firebase
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

              <div class="container-fluid">
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
