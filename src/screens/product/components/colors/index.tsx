import React, { useEffect } from "react";
import { Group } from "@mantine/core";
import { Color, Title, Wrapper } from "./style";
import { IColor, IColors } from "@/types/colors";
import Image from "next/image";

export const Colors = ({
  colors = [],
  active = [],
  setActive,
  name,
  index,
  atributErr,
  setAtributErr,
  handleAttributeImageClick,
}: any) => {
  useEffect(() => {
    if (colors.length > 0 && !active[index]) {
      const firstColor = colors[0];
      setActive((prev: any) => ({
        ...prev,
        [`${index}`]: firstColor.id,
      }));
      handleAttributeImageClick(firstColor.value);
    }
  }, [colors]);

  const clickColor = (id: string, value: string): any => {
    setActive({
      ...active,
      [`${index}`]: id,
    });
    handleAttributeImageClick(value);
  };

  return (
    <Wrapper>
      {colors?.length !== 0 && (
        <Group position="left" spacing="xs">
          {colors?.map((color: any) => {
            return (
              <Color
                key={color?.id}
                color={color?.label}
                style={{ outline: atributErr ? "3px solid red" : "" }}
                className={`color-swatch ${
                  active[index] === color.id ? "active" : ""
                }`}
                onClick={() => {
                  clickColor(color?.id, color?.value);
                  console.log(color?.value, color?.id);
                  setAtributErr(false);
                }}
              >
                <Image
                  className="colorImage"
                  width={100}
                  height={100}
                  src={color?.value}
                  alt={color?.label}
                />
              </Color>
            );
          })}
        </Group>
      )}
    </Wrapper>
  );
};
