import type { RouteConfig } from "@react-router/dev/routes";
import {index, route} from "@react-router/dev/routes"
 
export default [
    index ("routes/home.tsx"),
    route("catalogos/:catalogosId", "routes/catalogos.tsx"),
    route("recibosNomina/:recibosNominaId", "routes/recibosNomina.tsx"),
    route("Dashboard/:DashboardId", "routes/Dashboard.tsx"),
    route("DashboardContent/:PieChartId", "routes/DashboardContent/PieChart.tsx"),
] satisfies RouteConfig;
