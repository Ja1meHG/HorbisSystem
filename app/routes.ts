import type { RouteConfig } from "@react-router/dev/routes";
import {index, route} from "@react-router/dev/routes"
 
export default [
    index ("routes/home.tsx"),
    route("catalogos/:catalogosId", "routes/catalogos.tsx"),
    route("EvaluacionDesempeno/:EvaluacionDesempenoId", "routes/EvaluacionDesempeño.tsx"),
    route("Dashboard/:DashboardId", "routes/Dashboard.tsx"),
    route("DashboardContent/:PieChartId", "routes/DashboardContent/PieChartComponent.tsx"),
] satisfies RouteConfig;
