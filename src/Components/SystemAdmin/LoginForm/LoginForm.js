import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

// import { useSelector } from 'react-redux';

import { useNavigate, Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import InputField from '../../Reusable/InputField';
import InputField from "../../Reusable/InputField";
import loginimg from "../../../Images/login-image.png";

import LogoComp from "../../Reusable/LogoComponents/logoComp";

function LoginForm() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  const onChangeVisibility = () => {
    setVisibility(!visibility);
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = (event) => {
    // console.log(email, password);
    event.preventDefault();
    // history.push('/landing');
    navigate("/landing");
  };
  return (
    <Grid
      container
      flexDirection="row"
      sx={{
        backgroundColor: "#F2F2F2",
        // height: "100vh",
        width: "100%",
        paddingLeft: "3%",
        // border: "1px solid red",
      }}
    >
      <Grid item>
        <LogoComp />
      </Grid>
      <Grid
        item
        container
        sx={{
          width: "96%",
          // border: "1px solid black",
          marginTop: "3%",
          marginBottom: "6.6%",
          // minHeight: "700px",
        }}
        justifyContent="space-between"
      >
        <Grid
          item
          xs={6.3}
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
            // border: "1px solid red",
            minWidth: "400px",
            // paddingLeft: "2%",
          }}
        >
          <img
            style={{ height: "80%", width: "90%", marginLeft: "2%" }}
            src={loginimg}
            alt="login"
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            minWidth: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingRight: "5%",
          }}
        >
          <Card
            elevation={2}
            sx={{
              width: "90%",
              padding: "2% 3.5% 4% 3.5%",
              minHeight: "440px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
                Login Now !
              </Typography>
              <Grid sx={{ display: "flex" }}>
                <Grid>
                  <Typography sx={{ fontSize: "1.09rem", fontWeight: 550 }}>
                    Don&apos;t have an account? &nbsp;
                  </Typography>
                </Grid>
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 550,
                        color: "#68E98D",
                        "&:hover": {
                          textDecorationLine: "underline",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {" "}
                      Sign Up
                    </Typography>
                  </Grid>
                </Link>
              </Grid>
              <Grid>
                <Grid sx={{ margin: "4% 0%" }}>
                  <InputField
                    type="text"
                    changeAction={handleEmail}
                    searchValue={email}
                    placeholder="Enter Email"
                    icon={
                      <AccountCircleOutlinedIcon
                        fontSize="small"
                        style={{ color: "grey", marginRight: "20px" }}
                      />
                    }
                    label="Email"
                  />
                </Grid>
                <Grid sx={{ margin: "4% 0%" }}>
                  <InputField
                    type={type}
                    changeAction={handlePassword}
                    searchValue={password}
                    placeholder="Enter password"
                    icon={
                      <LockOutlinedIcon
                        // onClick={onChangeVisibility}
                        fontSize="small"
                        style={{ color: "grey", marginRight: "20px" }}
                      />
                    }
                    icon2={
                      visibility ? (
                        <VisibilityIcon
                          onClick={onChangeVisibility}
                          fontSize="small"
                          style={{
                            color: "grey",
                            marginRight: "20px",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={onChangeVisibility}
                          fontSize="small"
                          style={{
                            color: "grey",
                            marginRight: "20px",
                            cursor: "pointer",
                          }}
                        />
                      )
                    }
                    label="Password"
                  />
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  margin="5% 0 3% 0"
                >
                  <Typography>Forgot Password ?</Typography>
                </Grid>
                <Button
                  size="large"
                  variant="contained"
                  onClick={onLogin}
                  sx={{
                    height: "7vh",
                    marginTop: "4%",
                    width: "100%",
                    backgroundColor: "#68E98D",
                    fontWeight: 550,
                    color: "black",
                    "&:hover": {
                      bgcolor: "#68E98D",
                    },
                  }}
                >
                  login
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginForm;

// import React from "react";

// export default function LoginForm() {
//   return <div>LoginForm</div>;
// }
