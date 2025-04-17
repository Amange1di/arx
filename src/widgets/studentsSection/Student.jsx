import axios from "axios";
import React, { useEffect, useState } from "react";

const Request = () => {
  const { 0: state, 1: setState } = useState({});
  useEffect(() => {
    axios
      .get("http://92.118.114.178/ky/api/v1/students/scientific-journals/")
      .then(({ data }) => setState(data))
      .catch((e) => console.log(e));
  }, []);
  console.log(state);

  return (
    <div>
     
    </div>
  );
};

export default Request;