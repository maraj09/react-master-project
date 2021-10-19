import {
  Button,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useMasterContext } from "../../MasterContext";
import { Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleItem = () => {
  const { id } = useParams();
  const { data } = useFetch(`${url}${id}`);
  const { below_md } = useMasterContext();
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <Container key={item.idDrink} maxWidth="lg">
            <Box
              sx={{
                display: `flex`,
                alignItems: `center`,
                flexWrap: `wrap`,
                mt: 10
              }}
            >
              <Box sx={{ flexBasis: below_md ? `100%` :`60%` }}>
                <CardMedia
                  component="img"
                  height={`${below_md ? 300 : 450}`}
                  sx={{ width: below_md ? 250 : 350, mx:  `auto` }}
                  image={item.strDrinkThumb}
                />
              </Box>
              <Box sx={{ flexBasis: below_md ? `100%` : `40%`, my: 5 }}>
                <Box display="flex">
                  <Typography variant="h1">{item.strDrink}</Typography>
                </Box>
                <Box display="flex">
                  <Typography variant="h6">{item.strCategory}</Typography>
                </Box>
                <Divider />
                <Box display="flex" mt="15px">
                  <Typography variant="h5">{item.strGlass}</Typography>
                </Box>

                <Box display="flex" mt="25px">
                  <Typography variant="h5">Description :</Typography>
                </Box>
                <Box display="flex">
                  <Typography variant="body1">
                    {item.strInstructions}
                  </Typography>
                </Box>
                <Box display="flex" mt="50px">
                  <Button
                    component={Link}
                    to="/items"
                    color="error"
                    variant="contained"
                  >
                    Back
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        );
      })}
    </>
  );
};

export default SingleItem;
