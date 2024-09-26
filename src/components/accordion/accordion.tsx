import React from "react";
import { Accordion, Badge } from "@mantine/core";
import { Wrapper } from "./style";
import { NumberFormat } from "../number-format";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getStatus, tagStatus } from "@/utils/status";
import { StarIcon } from "@/assets/icons/star";

export const CustomizedAccordion = ({ data, status }: any) => {
  const { t } = useTranslation("common");
  // console.log("data", status);
  return (
    <Wrapper>
      <Accordion variant="contained" defaultValue="">
        <Accordion.Item value="customization">
          <Accordion.Control>
            {data?.length}ta mahsulot mavjud
          </Accordion.Control>
          <Accordion.Panel>
            {data?.map((element: any) => {
              // console.log(element);
              return (
                <div key={element.id} className="product-items">
                  <div className="product-items-left">
                    <div className="image-container">
                      <Image
                        src={element?.details?.photo}
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
                        {/* <p>{t("name")}</p> */}
                        <p className="product-name">
                          {element?.details?.name_uz ?? "Ma`lumot yo`q"}
                        </p>
                        <div className="product-rating">
                          {element?.product?.rate?.rate > 0 ? (
                            <>
                              <StarIcon />
                              <p className="product-quantity">
                                {element.product.rate.count} (
                                {element.product.rate.rate} sharhlar)
                              </p>
                            </>
                          ) : (
                            <p className="product-quantity">Новинка!</p>
                          )}
                        </div>
                      </div>
                      <div className="element-info">
                        <p className="product-quantity">
                          {t("quantity")}:{" "}
                          <span>{element?.count ?? 0} dona</span>{" "}
                        </p>
                      </div>
                      {/* <div className="element-info">
                        <p>{t("price")}</p>
                        <p className="product-items-p">
                          <NumberFormat value={element?.price} />{" "}
                          <span> so`m</span>
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="product-items-right">
                    {element?.count > 1 && (
                      <p className="product-items-p">
                        <NumberFormat value={element?.count * element?.price} />{" "}
                        so&lsquo;m
                      </p>
                    )}

                    <p
                      className={
                        element?.count > 1
                          ? "product-items-pp"
                          : "product-items-p"
                      }
                    >
                      <NumberFormat value={element?.price} /> so&lsquo;m
                      {element?.count > 1 && "/donasi"}
                    </p>

                    {/* {element?.count * element?.price} */}
                    {/* <Badge color={tagStatus(status)?.color}>
                      {getStatus(status)?.label}
                    </Badge> */}
                  </div>
                  <p>Sharh qoldirish</p>
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
