import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pictures = () => {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    async function getData() {
      try {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setLoading(false);
          setPics(data);
        } else {
          setError(true);
          setPics([]);
        }
      } catch (error) {
        console.error("error fetching data");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);
  return (
    <div>
      {loading ? <h1 style={{color:"blue"}}>Loading...</h1> : null}

      <ol>
        {pics.map((pic) => (
          <li key={pic.id}>
            {pic.title}
            <img style={{width:"50px",height:"50px"}} src={pic.url} alt="" />
          </li>
        ))}
      </ol>

      {error ? <h1 style={{color:"red"}}>Error</h1> : null}
    </div>
  );
};

export default Pictures;
