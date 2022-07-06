import React, { useState, useMemo } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import countryList from "react-select-country-list";
import Select from "react-select";
import PhoneInput from "react-phone-input-international";
import "react-phone-input-international/lib/style.css";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { Link } from "react-router-dom";
import InputField from "../Reusable/InputField";
import LogoComp from "../Reusable/LogoComponents/logoComp";
import loginimg from "../../Images/login-image.png";
import Success from "../Success/Success";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 40,
    minHeight: 40,
  }),
};

function SignUp() {
  const [businessName, setBusinessName] = useState("");
  const [holderName, setHolderName] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [businessLogo, setBusinessLogo] = useState(null);
  const [success, setSuccess] = useState(false);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (val) => {
    setValue(val);
  };

  const onChangeBusinessLogo = (e) => {
    setBusinessLogo(e.target.files[0]);
    console.log(businessLogo);
  };

  const onChangeBusiness = (e) => {
    setBusinessName(e.target.value);
  };

  const onChangeHolder = (e) => {
    setHolderName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    // setDisableButton(false);
  };

  const onChangeContact = (val) => {
    // console.log(val);
    setContact(val);
  };

  const onRegister = () => {
    // console.log(businessName, holderName, value.label, contact, email, businessLogo);
    setSuccess(!success);
  };

  // if (email?.length !== 0 && businessLogo.length !== 0
  //   && holderName.length !== 0
  //   && value?.label?.length !== 0 && contact.length !== 0 && businessLogo !== null) {
  //   setDisableButton(false);
  // }

  return (
    <Grid
      // xs={12}
      sx={{
        backgroundColor: "#F2F2F2",
        height: "100vh",
        width: "100%",
        paddingLeft: "3%",
      }}
    >
      <LogoComp />
      {success ? (
        <Success
          businessName={businessName}
          email={email}
          toggle={onRegister}
        />
      ) : (
        <Grid
          container
          sx={{
            width: "100%",
            paddingRight: "5%",
          }}
          justifyContent="space-between"
        >
          <Grid
            xs={5.5}
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "400px",
            }}
          >
            <img style={{ width: "90%" }} src={loginimg} alt="login" />
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              // border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "50%",
              // paddingRight: "1.5%",
              minWidth: "450px",
            }}
          >
            <Card
              elevation={3}
              sx={{
                width: "100%",
                padding: "1.5% 4% 1.5% 4%",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600 }}>
                  Sign Up !
                </Typography>
                <Grid sx={{ display: "flex" }}>
                  <Grid>
                    <Typography sx={{ fontSize: "1rem", fontWeight: 550 }}>
                      Already have an account? &nbsp;
                    </Typography>
                  </Grid>
                  <Link to="/log-in" style={{ textDecoration: "none" }}>
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
                        Login
                      </Typography>
                    </Grid>
                  </Link>
                </Grid>
                <Grid>
                  <Grid sx={{ margin: "3.5% 0 3% 0" }}>
                    <InputField
                      type="text"
                      changeAction={onChangeBusiness}
                      searchValue={businessName}
                      placeholder="Enter Bussiness Name"
                      icon={
                        <AccountCircleOutlinedIcon
                          fontSize="small"
                          style={{ color: "grey", marginRight: "20px" }}
                        />
                      }
                      label="Enter Bussiness Name"
                    />
                  </Grid>
                  <Grid sx={{ margin: "3.5% 0 3% 0" }}>
                    <InputField
                      type="text"
                      changeAction={onChangeHolder}
                      searchValue={holderName}
                      placeholder="Enter Your Name"
                      icon={
                        <AccountCircleOutlinedIcon
                          fontSize="small"
                          style={{ color: "grey", marginRight: "20px" }}
                        />
                      }
                      label="Enter Your Name"
                    />
                  </Grid>
                  <Grid sx={{ margin: "3.5% 0 3% 0" }}>
                    <Grid sx={{ marginBottom: "8px" }}>Select Country</Grid>
                    <Grid sx={{ width: "100%" }}>
                      <Select
                        options={options}
                        styles={customStyles}
                        placeholder="select country"
                        value={value}
                        onChange={changeHandler}
                      />
                    </Grid>
                  </Grid>
                  <Grid sx={{ margin: "3.5% 0 3% 0" }}>
                    <InputField
                      type="text"
                      changeAction={onChangeEmail}
                      searchValue={email}
                      placeholder="Enter Your Email"
                      icon={
                        <EmailOutlinedIcon
                          fontSize="small"
                          style={{ color: "grey", marginRight: "20px" }}
                        />
                      }
                      label="Contact"
                    />
                  </Grid>
                  <Grid sx={{ margin: "2% 0 2% 0" }}>
                    <PhoneInput
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                      }}
                      country={"bh"}
                      value={contact}
                      onChange={onChangeContact}
                    />
                  </Grid>
                  <Grid sx={{ margin: "3.8% 0 3% 0" }}>
                    <Grid marginBottom="8px">Bussiness Logo</Grid>
                    <input type="file" onChange={onChangeBusinessLogo} />
                  </Grid>
                  <Button
                    variant="contained"
                    // onClick={onLogin}
                    // disabled={disableButton}
                    onClick={onRegister}
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
                    Register
                  </Button>
                </Grid>
                {/* <SelectCountry /> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default SignUp;
