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
          if (onChange) onChange(e);
        }}
        styles={{
          input: {
            background: "#fff",
            color: "var(--main-black)",
            border: errors[props.name]
              ? "0.795144px solid var(--main-bg-color) !important"
              : "",
            width: "100% !important",
          },
          item: {
            backgroundColor: "#fff", // Default background color for options
            "&[data-hovered]": {
              backgroundColor: "#f0f0f0", // Hover color (light gray)
            },
            "&[data-selected]": {
              backgroundColor: "#0071CE", // Selected option background color (blue)
              color: "#fff", // Text color when selected (white)
            },
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
