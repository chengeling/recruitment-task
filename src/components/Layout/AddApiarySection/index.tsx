import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Container, Box, Typography } from "@mui/material";

import { getCurrentDate } from "../../../utils/getCurrentDate";
import { generateApiaryId } from "../../../utils/generateApiaryId";
import { generateApiaryNumber } from "../../../utils/generateRandomNumber";

const AddApiarySection: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    number: generateApiaryNumber(),
    dateAdded: null,
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formValues.number.toString().length !== 5) return;
    const apiaries = JSON.parse(localStorage.getItem("apiaries") || "[]");
    const apiaryNumber = generateApiaryId(formValues.number);
    const newApiary = {
      name: formValues.name,
      dateAdded: getCurrentDate(),
      number: apiaryNumber,
    };
    apiaries.push(newApiary);
    localStorage.setItem("apiaries", JSON.stringify(apiaries));
    navigate("/");
  };

  const textFieldStyle = {
    marginBottom: "10px",
    minWidth: "240px",
    width: "30vw",
    maxWidth: "400px",
  };

  const buttonStyle = {
    minWidth: "240px",
    width: "30vw",
    maxWidth: "400px",
  };

  return (
    <Container maxWidth="xl">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={submitHandler}
      >
        <Typography variant="h4">Dodaj pasiekę</Typography>
        <TextField
          required
          type="text"
          label="Nazwa"
          name="name"
          defaultValue={formValues.name}
          onChange={inputChangeHandler}
          sx={textFieldStyle}
        />
        <Box>
          <TextField
            required
            type="number"
            error={formValues.number.toString().length !== 5}
            label="Numer"
            name="number"
            defaultValue={formValues.number}
            onChange={inputChangeHandler}
            helperText={"*5 cyfrowy identyfikator pasieki"}
            sx={textFieldStyle}
          />
        </Box>
        <Button type="submit" variant="outlined" sx={buttonStyle}>
          Dodaj
        </Button>
      </form>
    </Container>
  );
};

export default AddApiarySection;
