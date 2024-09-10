import { Control } from "react-hook-form";

export interface IMaskInput {
  control: Control<any>;
  name: string;
  placeholder: string;
  disabled?: boolean;
  label: string;
  className?: string;
}
