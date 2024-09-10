import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { Wrapper } from "./style";
import { IMaskInput } from "@/types/mask.input";
import { Error } from "@/styles/global";

export const PhoneInput = (props: IMaskInput) => {
  const {
    control,
    name,
    placeholder,
    disabled = false,
    label,
    className,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, formState: { errors } }) => (
        <Wrapper className={className}>
          <label htmlFor={name}>{label}</label>
          <InputMask
            value={value ?? ""}
            onChange={onChange}
            type="text"
            name={name}
            placeholder={placeholder}
            className={errors[name] ? "error" : ""}
            mask="+\9\98 99 999 99 99"
            disabled={disabled}
          />
          {errors[name] && <Error>{errors[name]?.message as string}</Error>}
        </Wrapper>
      )}
    />
  );
};
