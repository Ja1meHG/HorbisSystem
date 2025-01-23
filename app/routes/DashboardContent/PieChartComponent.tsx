import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartComponent() {
  return (
    <Box
      sx={{
        width: 400,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="Typography_container">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            // sx={{ color: "text.secondary" }}
            fontWeight={500}
            fontSize={13}
            paddingTop={2}
          >
            Personal Hombres- Mujeres
          </Typography>
        </div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 35, label: "Muejeres" },
                { id: 1, value: 65, label: "Hombres" },
                
              ],
              innerRadius: 50,
              outerRadius: 150,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 250,
              cy: 250,
            },
          ]}
          width={500}
          height={500}
        />
      </Card>
    </Box>
  );
}
  