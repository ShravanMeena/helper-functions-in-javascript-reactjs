import React, { useEffect } from "react";
import { DateUtil } from "../helper";

export default function DateFormate() {
  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h1>Date Format</h1>
        <div style={{ border: "1px solid red", padding: 20 }}>
          Format Date : {DateUtil.formatDate(new Date())}
          <br />
          Format Date & Time : {DateUtil.formatDatetime(new Date())}
          <br />
          Format Short Date & Time : {DateUtil.formatShortDatetime(new Date())}
        </div>
      </div>
    </>
  );
}
