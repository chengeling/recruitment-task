import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import { TApiaryItem } from "../../../types/TApiaryItem";

const ApiaryItem = ({ name, dateAdded, number }: TApiaryItem) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography color="text.primary">{`Data dodania: ${dateAdded}`}</Typography>
        <Typography variant="body2" color="text.secondary">
          {`Numer pasieki: ${number}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApiaryItem;
