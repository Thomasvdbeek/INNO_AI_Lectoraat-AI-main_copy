import Dashboard from "./views/Dashboard.js";
import Patient from "./views/Patient.js";
import Overview from "./views/Overview";

const routes = [
  {
    path: "/overview",
    name: "Overview",
    icon: "nc-icon nc-chart-pie-36",
    component: Overview,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/patient",
    name: "Patients",
    icon: "nc-icon nc-single-02",
    component: Patient,
    layout: "/admin"
  },


];

export default routes;
