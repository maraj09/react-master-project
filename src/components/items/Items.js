import { Container} from "@mui/material";
import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import Paginations from "./components/Paginations";
import SearchForm from "./components/SearchForm";
import useFetch from "./useFetch";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Items = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useFetch(`${url}${search}`);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  return (
    
    <>
      <Container maxWidth="lg">
        <SearchForm search={search} setSearch={setSearch} />
        <ItemList data={currentPosts} loading={loading} />
        <Paginations data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} />
      </Container>
    </>
  );
};

export default Items;
