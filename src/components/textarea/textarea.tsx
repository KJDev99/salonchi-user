import { Textarea as TextInput } from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string | any>>;
}

export const Textarea = ({ value, setValue }: IProps) => {
  const { t } = useTranslation("common");

  return (
    <TextInput
      placeholder={t("additional info")}
      className="cart-comment"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      styles={{
        input: {
          backgroundColor: "var(--main-grey)",
          borderRadius: "20px",
          border: "none",
          minHeight: "91px",
          fontFamily: "var(--font-readex)",
          fontWeight: 300,
          fontSize: 16,
          "::placeholder": {
            fontFamily: "var(--font-readex)",
            color: "#8E8E93",
            fontWeight: 300,
            fontSize: 16,
            textIndent: 10,
          },
        },
      }}
    />
  );
};
