import React, { useEffect } from "react";
import { Group } from "@mantine/core";
import { Color, Title, Wrapper } from "./style";
import { useRouter } from "next/router";

export const Attributes = ({
  values = [],
  active = {},
  setActive,
  name,
  index,
  atributErr,
  setAtributErr,
}: any) => {
  const router = useRouter();
  useEffect(() => {
    if (values.length > 0 && !active[index]) {
      setActive((prev: any) => ({
        ...prev,
        [index]: values[0].id, // Birinchi elementni tanlash
      }));
    }
  }, [values, index, active, setActive]);

  const clickColor = (id: string): void => {
    setActive((prev: any) => ({
      ...prev,
      [index]: id,
    }));
  };

  return (
    <Wrapper>
      {values?.length !== 0 && (
        <Group position="left" spacing="xs">
          {values?.map((color: any) => (
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
              {router.locale === "uz" ? color.title : color.title_ru}
            </Color>
          ))}
        </Group>
      )}
    </Wrapper>
  );
};
