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

        //   await fetch(url, options)
        //     .then((response) => {
        //       if (response.status >= 400 && response.status < 600) {
        //         throw new Error("Bad response from server");
        //       }
        //       return response;
        //     }).then((returnedResponse) => {
        //       console.log("response!")
        //       setResponse(returnedResponse);
        //     }).catch((error) => {
        //       // Your error is here!
        //       console.log("error!")
        //       setError(error.message);
        //     });
        // }

        const res =  await fetch(url, options)
        if (!res.ok) {

          console.log("nem jött össze.")
          throw new Error("HIBA!");
        }
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        console.log(e)
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