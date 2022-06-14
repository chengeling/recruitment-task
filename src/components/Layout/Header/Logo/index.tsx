import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import logoImg from "../../../../assets/logoImg.svg";

const Logo: React.FC = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoTextStyle = {
    fontSize: "32px",
  };

  const imgStyle = {
    height: "52px",
    width: "52px",
    marginRight: "8px",
  };
  return (
    <Box sx={containerStyle}>
      <Link to="/">
        <img style={imgStyle} src={logoImg} alt="logo" />
      </Link>
      <Typography sx={logoTextStyle}>ApiaryApp</Typography>
    </Box>
  );
};

export default Logo;
