import { Container, Grid } from "@mui/material";

import ApiaryItem from "./ApiaryItem";
import { TApiaryItem } from "../../types/TApiaryItem";

const ApiaryList = (props: any) => {
  const apiariesItems = props.data.map(({ name, number, dateAdded }: TApiaryItem) => {
    return (
      <Grid item xs={12} sm={12} key={number}>
        <ApiaryItem key={number} name={name} dateAdded={dateAdded} number={number} />
      </Grid>
    );
  });

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {apiariesItems}
      </Grid>
    </Container>
  );
};

export default ApiaryList;
