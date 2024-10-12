import React from "react";
import { Group } from "@mantine/core";
import { Color, Title, Wrapper } from "./style";
// import { IColor, IColors } from "@/types/colors";

export const Attributes = ({
  values = [],
  active = [],
  setActive,
  name,
  index,
  atributErr,
  setAtributErr,
}: any) => {
  const clickColor = (id: string): any => {
    setActive({
      ...active,
      [`${index}`]: id,
    });
  };
  // console.log(values);
  return (
    <Wrapper>
      {values?.length !== 0 && (
        <>
          <Group position="left" spacing="xs">
            {values?.map((color: any) => {
              return (
                <Color
                  key={color?.id}
                  color={color?.label}
                  style={{ outline: atributErr ? "2px solid red" : "" }}
                  className={`color-swatch ${
                    active[index] === color.id ? "active" : ""
                  }`}
                  onClick={() => {
                    clickColor(color?.id);
                    setAtributErr(false);
                  }}
                >
                  {color.title}
                </Color>
              );
            })}
          </Group>
        </>
      )}
    </Wrapper>
  );
};
