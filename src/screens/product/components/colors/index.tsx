import React from "react";
import { Group } from "@mantine/core";
import { Color, Title, Wrapper } from "./style";
import { IColor, IColors } from "@/types/colors";

export const Colors = ({
  colors = [],
  active = [],
  setActive,
  name,
  index,
  atributErr,
  setAtributErr,
}: IColors) => {
  const clickColor = (id: string, label: string, name: string): any => {
    setActive({
      ...active,
      [`${index}`]: id,
    });
  };
  console.log("color", colors);
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
                  style={{ outline: atributErr ? "2px solid red" : "" }}
                  className={`color-swatch ${
                    active[index] === color.id ? "active" : ""
                  }`}
                  onClick={() => {
                    clickColor(color?.id, color?.label, name);
                    setAtributErr(false);
                  }}
                >
                  {color?.label}
                </Color>
              );
            })}
          </Group>
        </>
      )}
    </Wrapper>
  );
};
