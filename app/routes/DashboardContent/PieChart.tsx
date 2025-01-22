import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Random Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here is some random information inside the card.
        </Typography>
      </CardContent>
    </Card>
  );
}
