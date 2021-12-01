import React from "react";
import { SearchButton } from "./components/search.button";
import { GetInputs } from "./components/input";

export const App = () => {
  return (
    <>
      <GetInputs />
      <SearchButton />
    </>
  );
};
