import { Pagination, Stack } from "@mui/material";
import React from "react";

const Paginations = ({ setCurrentPage, data, postsPerPage, currentPage }) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  
  return (
    <>
      <Stack spacing={2} sx={{ my: 10 }} alignItems="center">
        <Pagination count={Math.ceil(data.length / postsPerPage)} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded" color="success" />
      </Stack>
    </>
  );
};

export default Paginations;
