import React, { useEffect, useState } from "react";
import axios from "axios";
import RecupData from "./RecupData.js";

const RecupData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(data.json).then((res) => setData(res.data));
  }, []);
  return (
    <div className="api">
      <h1>Logements</h1>
    </div>
  );
};
export default RecupData;
