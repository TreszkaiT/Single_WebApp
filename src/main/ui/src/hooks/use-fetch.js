// import { useState, useEffect } from "react";
// const useFetchCustom = (url) => {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch(url)
//             .then(
//                 (res) => {
//                     res.json()
//                 })
//             .then((data) => {
//                 setData(data)
//             })
//             .catch((err) => console.log(err));
//     }, [url]);
//     return [data];
// };
// export default useFetchCustom;

import React, { useState, useEffect } from "react";



const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);
return { response, error, loading };
};
export default useFetch;