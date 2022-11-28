import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
const [hello, setHello] = useState("hello les amis");

  useEffect(() => {
    fetch(`../../data.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="Home">
        <h1>Logements</h1>
        <ul>{hello}</ul>
    </div>
  );
};
export default Home;
