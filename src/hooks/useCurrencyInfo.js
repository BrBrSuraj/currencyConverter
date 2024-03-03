import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/6b9dd5d139d43c4f093f94a8/latest/${currency}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, [currency]);
console.log(data)
  return {loading, data };
};

export default useCurrencyInfo;
