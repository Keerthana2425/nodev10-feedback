import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import mainLogo from "../../Images/logo.png";
import HeroImg from "../../Images/landing-image.png";

function HeroPage() {
  return (
    <Grid
      container
      sx={{
        paddingLeft: "4%",
        paddingRight: "4%",
        width: "100%",
        backgroundColor: "#DEF6E5",
      }}
      flexDirection="column"
    >
      <Grid
        item
        container
        // sx={{ border: "1px solid black" }}
        justifyContent="space-between"
        padding="1% 0%"
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          minWidth="150px"
        >
          <img
            style={{ height: "95%", width: "100%" }}
            alt="logo"
            src={mainLogo}
          />
        </Grid>
        <Grid
          item
          container
          xs={4}
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Grid
            item
            sx={{
              cursor: "pointer",
              padding: "1%",
              margin: "3%",
            }}
          >
            <Link
              to="/works"
              style={{ textDecoration: "none", color: "#343A40" }}
            >
              How it works?
            </Link>
          </Grid>
          <Grid
            item
            sx={{
              cursor: "pointer",
              padding: "2%",
              margin: "2%",
              color: "#343A40",
            }}
          >
            <Link
              to="Pricing"
              style={{ textDecoration: "none", color: "#343A40" }}
            >
              Pricing
            </Link>
          </Grid>
          <Grid
            item
            sx={{
              cursor: "pointer",
              padding: "2%",
              margin: "2%",
              color: "#343A40",
            }}
          >
            <Link
              to="contacts"
              style={{ textDecoration: "none", color: "#343A40" }}
            >
              Contacts
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={5}
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>language</Grid>
          <Grid item marginLeft="3%">
            <Link to="/log-in" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  border: "2px solid grey",
                  color: "black",
                  "&:hover": {
                    bgcolor: "#475156",
                    color: "white",
                    border: "2px solid grey",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Grid>
          <Grid item margin="0% 3%">
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#68E98D",

                  color: "black",
                  "&:hover": {
                    bgcolor: "#68E98D",
                  },
                }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          justifyContent: "space-between",
          margin: "5% 0%",
          paddingBottom: "5%",
        }}
      >
        <Grid
          item
          xs={6}
          container
          spacing={2}
          minWidth="500px"
          sx={{
            // width: "39%",
            flexDirection: "column",
            marginTop: "5%",
            marginLeft: "0%",
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{ fontWeight: "600", color: "#343A40" }}
            >
              Get your Business better With&nbsp;
              <span style={{ color: "#68E98D" }}>Customer Feedback!</span>
            </Typography>
          </Grid>
          <Grid item>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis
          </Grid>
          <Grid item sx={{ marginTop: "2%" }}>
            <Link to="/requestDemo" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  height: "70%",
                  width: "45%",
                  backgroundColor: "#68E98D",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "black",
                  "&:hover": {
                    bgcolor: "#68E98D",
                  },
                }}
              >
                Request a demo
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          minWidth="400px"
          item
          xs={5}
          sx={{
            // width: "48%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "85%", width: "86%" }}
            src={HeroImg}
            alt="heroimg"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeroPage;
