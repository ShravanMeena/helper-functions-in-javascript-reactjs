import React, { useEffect } from "react";
import { urlify } from "../helper";

export default function UrlDetexctor() {
  useEffect(() => {}, []);

  return (
    <>
      {data.map((_, index) => {
        return (
          <div
            style={{
              margin: 20,
              padding: 20,
            }}
          >
            <h1>{_.title}</h1>
            <div style={{ border: "1px solid red", padding: 20 }}>{_.show}</div>
          </div>
        );
      })}
    </>
  );
}

var text =
  "Find me at http://www.khelgully.com and also at http://stackoverflow.com";

let data = [
  {
    id: 1,
    title: "GET URL IN A MESSAGE OR TEXT",
    show: <div dangerouslySetInnerHTML={{ __html: urlify(text) }} />,
  },
];
