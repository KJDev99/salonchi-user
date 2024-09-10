import React from "react";
import { Group } from "@mantine/core";
import { Color, Title, Wrapper } from "./style";
import { IColor, IColors } from "@/types/colors";

export const Colors = ({ colors = [], active = [], setActive,atributErr,setAtributErr, name,index }: IColors) => {
  const clickColor = (id:string,name:string): any => {
    setActive({
      ...active,
      [`${index}`]: id,
  });
  };


  return (
    <Wrapper>
      {colors?.length !== 0 && (
        <>
          <Title>{name}</Title>
        
          <Group position="left" spacing="xs">
            {colors?.map((color: any) => {
              return (
                <Color
                  key={color?.id}
                  color={color?.label}
                  style={{ outline: atributErr ? '2px solid red' : ''}}
                  className={`color-swatch ${
                    active?.[index] === color?.id ? "active" : ""
                  }`}
                  onClick={() => {clickColor(color?.id, name);  setAtributErr(false)}
                
                  }
                >
                  {color.label}
                </Color>
              );
            })}
          </Group>
        </>
      )}
    </Wrapper>
  );
};
