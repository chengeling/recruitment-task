import { ReactNode } from "react";

import { Button as MuiButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

import { TButton } from "../../types/TButton";
import { BUTTON_ACTION } from "../../enums/ButtonAction";

const Button = ({ buttonAction, text, clickHandler }: TButton) => {
  const getIcon = (): ReactNode => {
    if (buttonAction === BUTTON_ACTION.ADD) return <AddIcon />;
    if (buttonAction === BUTTON_ACTION.DELETE) return <DeleteIcon />;
    if (buttonAction === BUTTON_ACTION.SEARCH) return <SearchIcon />;
  };

  const buttonStyle = {
    height: "100%",
    width: "100%",
  };

  return (
    <MuiButton sx={buttonStyle} variant="outlined" startIcon={getIcon()} onClick={clickHandler}>
      {text}
    </MuiButton>
  );
};

export default Button;
