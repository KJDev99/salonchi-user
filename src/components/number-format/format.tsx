import React from "react";
import { NumericFormat } from "react-number-format";

interface INumberFormat {
  value: number;
  style?: object;
}

export const NumberFormat = ({ value, style }: INumberFormat) => {
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
