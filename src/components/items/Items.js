import { Button, Card, CardActions, CardContent, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useMasterContext } from "../../MasterContext";

const Items = () => {
  const [state, setstate] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const { below_md } = useMasterContext();
  return (
    <>
      <Container maxWidth="lg">
        <Card raised={true} sx={{ mt: 10, maxWidth: `600px`, mx: `auto` }}>
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h5" sx={{ textAlign: `center`, fontWeight: `bold`, letterSpacing: `3px` }}>
              Our Sample Items
            </Typography>
            <form>
              <Box sx={{ display: `flex`, flexWrap: `wrap` }}>
                <TextField variant="outlined" label="Search Here" color="warning" size="small" sx={{ flexBasis: `100%`, my: 3 }} />
              </Box>
            </form>
          </CardContent>
        </Card>
        <Box sx={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center`, my: 7 }}>
          {state.map((s) => {
            return (
              <Card sx={{ width: below_md ? `100%` : 345 , m: 1 }}>
                <CardMedia component="img" alt="green iguana" height="140" image="/static/images/cards/contemplative-reptile.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of s
                  </Typography>
                </CardContent>
                <CardActions sx={{mb: 1}}>
                  <Button variant="contained" color="success">Details</Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Items;
