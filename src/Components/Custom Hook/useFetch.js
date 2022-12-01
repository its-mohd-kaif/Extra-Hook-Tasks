import { useState, useEffect } from "react";
// Make a Custom Hook
const useFetch = (url, payload, method) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((respone) => respone.json())
      .then((val) => setData(val));
  }, [url]);

  return [data];
};

export default useFetch;
