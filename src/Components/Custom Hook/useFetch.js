import { useState } from "react";
// Make a Custom Hook
const useFetch = () => {
  const [data, setData] = useState(null);
  function extractDataFromApi(url, payload, method) {
    fetch(url)
      .then((respone) => respone.json())
      .then((val) => setData(val));
  }
  return { data, extractDataFromApi };
};

export default useFetch;
