import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
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
            <Card sx={{ width: below_md ? `100%` : 345, m: 1 }} key={item.idDrink}>
              <CardMedia component="img" alt="green iguana" height="250" image={item.strDrinkThumb} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.strDrink}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.strGlass}
                </Typography>
              </CardContent>
              <CardActions sx={{ mb: 1 }}>
                <Button component={Link} to={`/item/${item.idDrink}`} variant="contained" color="success">
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
