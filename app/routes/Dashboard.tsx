import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaPersonArrowDownToLine } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";
import PieChartComponent from "./DashboardContent/PieChartComponent";

export default function Dashboard() {
  return (
    <Box sx={{  display: "flex", flexDirection: "column", gap: 4  }}>
      <Stack spacing={4} direction="row" >
        <Card sx={{ width: 245, height: 130, overflow: "visible", borderRadius: 3 }}>
          <CardContent>
            <div id="Personal_icon_container">
              <div id="Personal_icon">
                <PiPersonArmsSpreadFill />
              </div>
            </div>
            <div id="Typography_container">
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                fontWeight={500}
                fontSize={13}
              >
                Personal Registrado
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={500}
                fontSize={20}
              >
                73
              </Typography>
            </div>
          </CardContent>
          <div id="LineCard" style={{ display: 'flex', justifyContent: 'flex-end' }}><hr></hr></div>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 245, height: 130, overflow: "visible", borderRadius: 3 }}>
          <CardContent>
            <div id="Personal_icon_container">
              <div id="Personal_icon2">
                <FaPersonArrowUpFromLine />
              </div>
            </div>
            <div id="Typography_container">
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                fontWeight={500}
                fontSize={13}
              >
                Personal de alta
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={500}
                fontSize={20}
              >
                280
              </Typography>
            </div>
          </CardContent>
          <div id="LineCard" style={{ display: 'flex', justifyContent: 'flex-end' }}><hr></hr></div>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 245, height: 130, overflow: "visible", borderRadius: 3 }}>
          <CardContent>
            <div id="Personal_icon_container">
              <div id="Personal_icon3">
                <FaPersonArrowDownToLine />
              </div>
            </div>
            <div id="Typography_container">
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                fontWeight={500}
                fontSize={13}
              >
                Personal de baja
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={500}
                fontSize={20}
              >
                62
              </Typography>
            </div>
          </CardContent>
          <div id="LineCard" style={{ display: 'flex', justifyContent: 'flex-end' }}><hr></hr></div>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 245, height: 130, overflow: "visible", borderRadius: 3 }}>
          <CardContent>
            <div id="Personal_icon_container">
              <div id="Personal_icon4">
                <TbCancel />
              </div>
            </div>
            <div id="Typography_container">
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                fontWeight={500}
                fontSize={13}
              >
                Inasistencias
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={500}
                fontSize={20}
              >
                12
              </Typography>
            </div>
          </CardContent>
          <div id="LineCard" style={{ display: 'flex', justifyContent: 'flex-end' }}><hr/></div>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
      </Stack>
      <Stack spacing={4} direction="row">
        <PieChartComponent />
      </Stack>
    </Box>  
  );
}
