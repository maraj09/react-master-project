import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    setLoading(true)
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
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, [url]);
  useEffect(() => {
    setTimeout(fetchData, 500)
    
  }, [url, fetchData]);
  return { data, loading };
};

export default useFetch;
