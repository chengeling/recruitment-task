import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid } from "@mui/material";

import Button from "../../Button";
import Logo from "./Logo";
import { BUTTON_ACTION } from "../../../enums/ButtonAction";

const Header: React.FC = () => {
  const containerStyle = {
    marginBottom: "40px",
    marginTop: "40px",
  };

  return (
    <Container maxWidth="xl" sx={containerStyle}>
      <Grid container direction="row" justifyContent="space-between">
        <Logo />
        <Link to="/dodaj-pasieke" style={{ textDecoration: "none" }}>
          <Button text="Dodaj pasiekę" buttonAction={BUTTON_ACTION.ADD} />
        </Link>
      </Grid>
    </Container>
  );
};

export default Header;
