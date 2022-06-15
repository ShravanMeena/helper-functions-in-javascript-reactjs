import React, { useEffect } from "react";
import { getUniqueValuesInArray } from "../helper";

export default function UniqueValues() {
  useEffect(() => {}, []);

  const array = [
    { name: "Joe", age: 17 },
    { name: "Bob", age: 17 },
    { name: "Carl", age: 35 },
  ];

  const key = "age";

  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h1>Find Unique Values Inside Array</h1>
        <div style={{ border: "1px solid red", padding: 20 }}>
          <span style={{ color: "red" }}>
            ORIGINAL ARRAY Values : {JSON.stringify(array)}
          </span>
          <br />
          <br />
          <span style={{ color: "green" }}>
            Unique Array :{" "}
            {JSON.stringify(getUniqueValuesInArray({ array, key }))}
          </span>
        </div>
      </div>
    </>
  );
}
