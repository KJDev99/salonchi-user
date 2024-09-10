import React from "react";
import { Accordion, Badge } from "@mantine/core";
import { Wrapper } from "./style";
import { NumberFormat } from "../number-format";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getStatus, tagStatus } from "@/utils/status";

export const CustomizedAccordion = ({ data, status }: any) => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Accordion variant="contained" defaultValue="">
        <Accordion.Item value="customization">
          <Accordion.Control>{data?.length} товар</Accordion.Control>
          <Accordion.Panel>
            {data?.map((element: any) => {
              return (
                <div key={element.id} className="product-items">
                  <div className="product-items-left">
                    <div className="image-container">
                      <Image
                        src={element?.detail?.photo}
                        className="image-next"
                        alt="product"
                        layout="fill"
                        sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                      />
                    </div>
                    <div className="product-items-info">
                      <div className="element-info">
                        <p>{t("name")}</p>
                        <p className="product-items-p">
                          {element?.detail?.name_uz ?? "Ma`lumot yo`q"}
                        </p>
                      </div>
                      <div className="element-info">
                        <p>{t("quantity")}</p>
                        <p className="product-items-p">
                          {element?.count ?? 0} ta
                        </p>
                      </div>
                      <div className="element-info">
                        <p>{t("price")}</p>
                        <p className="product-items-p">
                          <NumberFormat value={element?.price} />{" "}
                          <span> so`m</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="product-items-right">
                    <Badge color={tagStatus(status)?.color}>
                      {getStatus(status)?.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Wrapper>
  );
};

// background-color: rgba(0, 0, 0, 0.03);
