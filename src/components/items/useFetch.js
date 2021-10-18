import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const getData = await response.json();
      const { drinks } = getData;
      if (drinks) {
        const newData = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setData(newData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data };
};

export default useFetch;
