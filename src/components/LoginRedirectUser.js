import React, { useEffect, useState } from "react";
import { LoginRedirectUser } from "../helper";

export default function LoginRedirect() {
  useEffect(() => {}, []);

  const [role, setRole] = useState("master_admin");
  let user = {
    role, //master_ops,service_hub
  };
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h1>Login Redirect User</h1>
        <div style={{ border: "1px solid red", padding: 20 }}>
          <label for="role"> Select your role: </label>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="master_admin">Master Admin</option>
            <option value="master_ops">Master Ops</option>
            <option value="service_hub">Service Hub</option>
          </select>
          <br />
          Path to redirect :{" "}
          <span style={{ color: "green" }}>{LoginRedirectUser(user)}</span>
        </div>
      </div>
    </>
  );
}
