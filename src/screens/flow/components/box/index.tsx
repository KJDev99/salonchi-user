import React, { useState } from "react";
import { Box, BoxCard } from "./style";
import { NumberFormat } from "@/components/number-format";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { IconCheckbox } from "@/assets/icons/box-check";

interface IBoxes {
  boxes: IBox[];
  setBoxList: any;
}

interface IBox {
  id: number;
  photo: string;
  price: number;
  selected: boolean;
}

export const CustomBox = ({ boxes, setBoxList }: IBoxes) => {
  const { t } = useTranslation("common");
  const [boxListClone, setBoxListClone] = useState(boxes);

  const handleActive = (id: number) => {
    setBoxListClone(
      boxListClone?.map((t: IBox) => {
        if (t?.id == id) {
          return {
            ...t,
            selected: !!!t.selected,
          };
        } else {
          return {
            ...t,
            selected: false,
          };
        }
      })
    );
    setBoxList(
      boxListClone?.map((t: IBox) => {
        if (t?.id == id) {
          return {
            ...t,
            selected: !!!t.selected,
          };
        } else {
          return {
            ...t,
            selected: false,
          };
        }
      })
    );
    // addToCart({ ...data, boxes: boxList });
  };

  return (
    <Box>
      {boxListClone?.map((v: IBox) => {
        return (
          <BoxCard
            key={v?.id}
            onClick={() => handleActive(v?.id)}
            className={v?.selected ? "active" : ""}
          >
            <Image
              src={v?.photo}
              alt="box"
              priority
              sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
              width={50}
              height={80}
            />
            <p>
              <NumberFormat value={v?.price} /> {t("card.currency")}
            </p>
            <div className="icon-check">
              <IconCheckbox />
            </div>
          </BoxCard>
        );
      })}
    </Box>
  );
};
