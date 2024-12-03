import React from "react";
import { NumericFormat } from "react-number-format";

export const NumberFormat = ({ value, style }: any) => {
  return (
    <NumericFormat
      value={value}
      allowLeadingZeros
      thousandSeparator=" "
      className="number-price"
      displayType="text"
      style={style}
    />
  );
};
