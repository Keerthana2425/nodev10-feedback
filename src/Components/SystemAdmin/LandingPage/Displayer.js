import React from "react";
import { Grid } from "@mui/material";

function Displayer() {
  return (
    <Grid
      container
      sx={{ justifyContent: "space-between", padding: "1.5% 1%" }}
    >
      <Grid
        item
        container
        xs={7}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid>company name</Grid>
        <Grid>address</Grid>
        <Grid>rating</Grid>
      </Grid>
      <Grid
        item
        xs={4.7}
        container
        sx={{ alignItems: "center", justifyContent: "flex-end" }}
      >
        current rating set to star
      </Grid>
    </Grid>
  );
}

export default Displayer;
