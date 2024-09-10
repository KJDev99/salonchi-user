import { type Control, Controller } from 'react-hook-form';
import { type PasswordInputProps } from '@mantine/core';
import { MantinePassword } from './style';

type IPasswordInput = PasswordInputProps & {
  name: string;
  control: Control<any>;
};

export const InputPassword = ({
  control,
  ...props
}: Omit<IPasswordInput, 'type'>) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => {
      return (
        <MantinePassword
          {...props}
          {...field}
          value={field.value ?? ''}
          error={
            errors[props.name] ? (errors[props.name]?.message as string) : ''
          }
          styles={{
            input: errors[props.name] && {
              border: '0.795144px solid #fa5252 !important',
              borderRadius: 8,
            },
          }}
        />
      );
    }}
  />
);
