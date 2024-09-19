import { Controller } from "react-hook-form";
import type { CustomInputProps } from "@/types/input";
import { MantineInput } from "./style";

export const Input = ({
  control,
  onChange,
  error,
  ...props
}: CustomInputProps) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <MantineInput
        {...props}
        {...field}
        onChange={(e) => {
          field.onChange(e);
        }}
        value={field.value ?? ""}
        error={
          error ||
          (errors[props.name] ? (errors[props.name]?.message as string) : "")
        }
        styles={{
          input: errors[props.name] && {
            border: "0.795144px solid #fa5252 !important",
          },
        }}
      />
    )}
  />
);
