import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMasterContext } from "../../../MasterContext";
import Loading from "./Loading";
import Nothing from "./Nothing";

const ItemList = ({ data, loading }) => {
  const { below_md } = useMasterContext();
  if (loading) {
    return <Loading />;
  }
  if (data.length < 1) {
    return <Nothing />;
  }
  return (
    <>
      <Box sx={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center`, my: 7 }}>
        {data.map((item) => {
          return (
            <Card sx={{ width: below_md ? `100%` : 345, m: 1 }} key={item.id}>
              <CardMedia component="img" alt="green iguana" height="250" image={item.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.glass}
                </Typography>
              </CardContent>
              <CardActions sx={{ mb: 1 }}>
                <Button variant="contained" color="success">
                  Details
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default ItemList;
