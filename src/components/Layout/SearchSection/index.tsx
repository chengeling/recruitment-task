import React, { useEffect, useState } from "react";

import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
  Grid,
} from "@mui/material";

import Button from "../../Button";
import { ORDER_TYPE } from "../../../enums/OrderType";
import { BUTTON_ACTION } from "../../../enums/ButtonAction";

const defaultValues = {
  name: "",
  dateFrom: null,
  dateTo: null,
};

const SearchSection: React.FC = (props: any) => {
  const [searchValues, setSearchValues] = useState(defaultValues);
  const [orderType, setOrderType] = useState(ORDER_TYPE.NO_ORDER);

  useEffect(() => {
    props.orderContent(orderType);
  }, [orderType]);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setSearchValues({
      ...searchValues,
      [name]: value,
    });
  };

  const selectChangeHandler = (event: SelectChangeEvent): void => {
    setOrderType(event.target.value as ORDER_TYPE);
  };

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <TextField
            type="text"
            label="Nazwa pasieki"
            variant="outlined"
            name="name"
            defaultValue={searchValues.name}
            onChange={inputChangeHandler}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            buttonAction={BUTTON_ACTION.SEARCH}
            text={"Szukaj"}
            clickHandler={() => props.filterContent(searchValues)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Data od"
            type="date"
            name="dateFrom"
            defaultValue={searchValues.dateFrom}
            onChange={inputChangeHandler}
            InputLabelProps={{ shrink: true }}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Data do"
            type="date"
            name="dateFrom"
            defaultValue={searchValues.dateFrom}
            onChange={inputChangeHandler}
            InputLabelProps={{ shrink: true }}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Sortuj wg.</InputLabel>
            <Select value={orderType} label="Order" onChange={selectChangeHandler} sx={{ width: "100%" }}>
              <MenuItem value={ORDER_TYPE.ASCENDING}>Po numerze: rosnąco</MenuItem>
              <MenuItem value={ORDER_TYPE.DESCENDING}>Po numerze: malejąco</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchSection;
