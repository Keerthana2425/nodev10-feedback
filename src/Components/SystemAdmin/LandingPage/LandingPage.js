import { Grid } from "@mui/material";
import React, { useState } from "react";
import HeaderComp from "../../Reusable/HeaderComp";
import DashBoard from "./DashBoard";
import Questionaries from "./Questionaries";
import Displayer from "./Displayer";
import SendLink from "./sendLink";

export default function LandingPage() {
  const [value, setValue] = useState(0);
  const onTabChange = (e, val) => {
    setValue(val);
  };
  return (
    <Grid>
      <HeaderComp value={value} onTabChange={onTabChange} />
      <Grid sx={{ backgroundColor: "#F2F2F2", padding: "0% 2.5%" }}>
        <Displayer />
        <Grid container justifyContent="space-between">
          <Grid item xs={7} minWidth="600px">
            {value === 0 ? <DashBoard /> : <Questionaries />}
          </Grid>
          <Grid item xs={4.9} minWidth="500px">
            <SendLink />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
