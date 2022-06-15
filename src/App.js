import React from "react";
import DateFormate from "./components/DateFormate";
import LoginRedirectUser from "./components/LoginRedirectUser";
import SpecialCharacterDetect from "./components/SpecialCharacterDetect";
import UniqueValues from "./components/UniqueValues";
import UrlDetexctor from "./components/UrlDetexctor";

export default function App() {
  return (
    <>
      <UrlDetexctor />
      <SpecialCharacterDetect />
      <DateFormate />
      <LoginRedirectUser />
      <UniqueValues />
    </>
  );
}
