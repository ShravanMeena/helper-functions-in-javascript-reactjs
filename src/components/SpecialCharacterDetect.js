import React, { useState } from "react";
import { isSpecialChar } from "../helper";

export default function SpecialCharacterDetect() {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
      }}
    >
      <h1>DETECT SPECIAL CHAR</h1>
      <div style={{ border: "1px solid red", padding: 20 }}>
        <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        {text && (
          <>
            {text}:{" "}
            {isSpecialChar(text) ? (
              <span style={{ color: "green" }}>special character</span>
            ) : (
              <span style={{ color: "red" }}>not special character</span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
