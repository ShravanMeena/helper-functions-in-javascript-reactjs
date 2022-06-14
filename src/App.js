import React from "react";
import DateFormate from "./components/DateFormate";
import LoginRedirectUser from "./components/LoginRedirectUser";
import SpecialCharacterDetect from "./components/SpecialCharacterDetect";
import UrlDetexctor from "./components/UrlDetexctor";

export default function App() {
  return (
    <>
      <UrlDetexctor />
      <SpecialCharacterDetect />
      <DateFormate />
      <LoginRedirectUser />
    </>
  );
}
