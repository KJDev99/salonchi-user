import { Controller } from "react-hook-form";
import type { IControl } from "@/types/control";
import { type SelectProps } from "@mantine/core";
import { MantineUISelect } from "./style";
import { ArrowDownIcon } from "@/assets/icons/arrow.down";

type ISelect = SelectProps & IControl;

export const Select = ({ control, onChange, error, ...props }: ISelect) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <MantineUISelect
        {...props}
        {...field}
        onChange={(e) => {
          field.onChange(e);
        }}
        styles={{
          input: {
            background: "#fff",
            color: "var(--main-black)",
            border: errors[props.name]
              ? "0.795144px solid #0071CE !important"
              : "",
            width: "100% !important",
          },
          rightSection: { pointerEvents: "none" },
        }}
        error={
          error ||
          (errors[props.name] ? (errors[props.name]?.message as string) : "")
        }
        nothingFound="Nothing found..."
        rightSection={<ArrowDownIcon />}
      />
    )}
  />
);
