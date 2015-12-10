import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MLayout from "./components/Layout";
injectTapEventPlugin();

const menuItems = [
  { r: "#/products", i: <li className="fa fa-list-alt">&nbsp;&nbsp;&nbsp;Products</li> },
  { r: "#/departments", i: <li className="fa fa-sitemap">&nbsp;&nbsp;&nbsp;Departments</li> },
  { r: "#/units", i: <li className="fa fa-balance-scale">&nbsp;&nbsp;&nbsp;Units</li> },
  { r: "#/logout", i: <li className="fa fa-sign-out">&nbsp;&nbsp;&nbsp;Logout</li> }
];

render(
  <MLayout title="Test" menuItems={menuItems} headerImg="http://placehold.it/350x150" headerStyle={{ background: "none" }}>
    yeah
  </MLayout>
, document.querySelector("#root"));
