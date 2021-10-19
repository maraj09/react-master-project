import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const getData = await response.json();
      const { drinks } = getData;
      if (drinks) {
        const newData = drinks.map((item) => {
          return {
            ...item,
          };
        });
        setData(newData);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data, loading };
};

export default useFetch;
