import React from "react";
import { BeatLoader } from "react-spinners";
import { LoaderProvider } from "./style";

export const Loader = () => {
  return (
    <LoaderProvider>
      <BeatLoader color="#0071CE" size={20} />
    </LoaderProvider>
  );
};
