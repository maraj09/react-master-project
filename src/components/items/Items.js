import { Container } from "@mui/material";
import React, { useState } from "react";
import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";
import useFetch from "./useFetch";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Items = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useFetch(`${url}${search}`);
  
  return (
    <>
      <Container maxWidth="lg">
        <SearchForm search={search} setSearch={setSearch} />
        <ItemList data={data} loading ={loading} />
      </Container>
    </>
  );
};

export default Items;
