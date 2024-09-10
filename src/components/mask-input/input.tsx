// @ts-nocheck
import React from "react";
import { type Control, Controller } from "react-hook-form";
import { type TextInputProps } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { MantineInput } from "./style";

interface MaskInputProps {
  control: Control<any>;
  name: string;
  label: string | any;
  mask: string;
}

export type IMaskInputProps = TextInputProps & MaskInputProps;

export const MaskInput: React.FC<IMaskInputProps> = ({
  control,
  name,
  label,
  mask,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MantineInput
          label={label}
          component={IMaskInput as any}
          mask={mask}
          {...field}
          {...props}
        />
      )}
    />
  );
};
