import React from 'react';
import { Controller } from 'react-hook-form';
import { MantinePin, PinWrapper } from './style';
import { Error } from '@/styles/global';

export const PinInput = ({ control, ...props }: any) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, formState: { errors } }) => {
        return (
          <PinWrapper>
            <MantinePin
              {...props}
              {...field}
              type="number"
              error={errors[props.name]?.message as string}
              styles={{
                input: errors[props.name] && {
                  border: '0.795144px solid #fa5252 !important',
                },
              }}
            />
            {errors[props.name] && (
              <Error className="pin-error">
                {errors[props.name]?.message as string}
              </Error>
            )}
          </PinWrapper>
        );
      }}
    />
  );
};
