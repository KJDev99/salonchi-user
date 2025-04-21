import React, { useState, useEffect } from "react";
import { Button, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { NumberFormat } from "@/components/number-format";
import useStore from "@/store";
import { IProduct } from "@/types/product";
import { Colors } from "./components/colors";
import { Attributes } from "./components/attributes";
import { Footer } from "./style";
import { useTranslation } from "react-i18next";
import { request } from "@/shared/api/requests";
import { FaCheck } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

interface Variant {
  id: number;
  attributes: Record<string, string>;
  price: number;
  old_price: number;
  count: number;
}

const ProductVariantSelector = ({
  data,
  attributes,
  variants,
  addToCart,
  handleOrder,
  cart,
  slug,
  active,
  setActive,
  attributeErr,
  setAttributeErr,
  setColorErr,
  colorErr,
  handleAttributeImageClick,
}: {
  data: IProduct;
  attributes: any[];
  variants: Variant[];
  addToCart: any;
  handleOrder: any;
  cart: any;
  slug: any;
  active: any;
  setActive: any;
  attributeErr: any;
  setAttributeErr: any;
  setColorErr: any;
  colorErr: any;
  handleAttributeImageClick: any;
}) => {
  useEffect(() => {
    if (Object.keys(active).length === 0) return;

    const payload = {
      attributes: Object.values(active),
    };

    request
      .post("product/get-product-variant/", payload)
      .then((res) => {
        setCurrentVariant(res.data);
        if (res.data.count === 0) {
          setAmount(0);
        } else {
          setAmount(1);
        }
        localStorage.setItem("variant", JSON.stringify(res.data.id));
      })
      .catch((err) => {
        setAmount(0);
        localStorage.removeItem("variant");
      });
  }, [active]);

  const router = useRouter();

  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);
  const [amount, setAmount] = useState(1);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (data.count === 0) {
      setAmount(0);
    }
  }, [data]);

  console.log(data, "data");

  useEffect(() => {
    const allAttributesSelected = attributes.every(
      (_, index) => active[index] !== undefined
    );

    if (allAttributesSelected) {
      const selectedAttributeValues = attributes.reduce((acc, attr, index) => {
        const selectedValue = attr.values.find(
          (v: any) => v.id === active[index]
        );

        // Use the name in the variant's attributes (Rangi, O'lchami)
        const attrKey = attr.name_uz;

        return {
          ...acc,
          [attrKey]: selectedValue?.title || selectedValue?.label,
        };
      }, {});

      if (!variants || !Array.isArray(variants)) {
        console.error("variants undefined yoki noto'g'ri formatda:", variants);
        setCurrentVariant(null);
        return;
      }
      const matchedVariant = variants.find((variant) =>
        Object.entries(selectedAttributeValues).every(
          ([key, value]) => variant.attributes[key] === value
        )
      );
      setCurrentVariant(matchedVariant || null);
    } else {
      setCurrentVariant(null);
    }
  }, [active, variants, attributes]);
  // Adjust quantity
  const adjustAmount = (value: number) => {
    if (value === -1 && amount <= 1) return;
    if (currentVariant && amount + value > currentVariant.count) return;
    setAmount((prev) => prev + value);
  };

  // Add to cart handler
  const handleAddToCart = () => {
    if (!currentVariant && variants?.length > 0) {
      setAttributeErr(true);
      setColorErr(true);
      return;
    }
    const newProduct = {
      ...data,
      price: currentVariant?.price || data.price,
      old_price: currentVariant?.old_price || data.old_price,
      count: currentVariant?.count || data.count,
      amount,
      variant: currentVariant,
      attributes: active,
    };
    // console.log(newProduct.count);
    addToCart(newProduct);
  };

  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {attributes.map((attr, index) => (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          key={attr.id}
        >
          <p className="subtitle">
            {router.locale === "uz" ? attr.name_uz : attr.name_ru}
          </p>
          <div style={{}}>
            {attr.type === "IMAGE" ? (
              <Colors
                colors={attr.values}
                active={active}
                setActive={setActive}
                index={index}
                atributErr={colorErr}
                setAtributErr={setColorErr}
                handleAttributeImageClick={handleAttributeImageClick} // You may want to implement this if needed
              />
            ) : (
              <Attributes
                values={attr.values}
                active={active}
                setActive={setActive}
                index={index}
                atributErr={attributeErr}
                setAtributErr={setAttributeErr}
              />
            )}
          </div>
        </div>
      ))}

      {/* Price and Availability Section */}
      <div className="card-options">
        {/* Quantity Selector */}
        <div className="card-amount">
          <h3 className="subtitle">
            {router.locale === "uz" ? "Miqdor" : "Количество"}
          </h3>
          <div className="amount-changer">
            <span onClick={() => adjustAmount(-1)}>-</span>
            <input type="number" value={amount} readOnly />
            <span
              onClick={() => {
                // @ts-ignore
                if (
                  ((data.count > 0 && amount + 1 <= data.count) ||
                    currentVariant?.count) ??
                  0 >= amount
                ) {
                  adjustAmount(1);
                }
              }}
            >
              +
            </span>
          </div>
        </div>

        {/* Price Display */}
        <div className="cardPrice">
          <div className="price-left">
            <h3 className="subtitle">
              {router.locale === "uz" ? "Narx" : "Цена"}
            </h3>
            <div className="price-box">
              {currentVariant ? (
                <>
                  <h2 className="main-price">
                    <NumberFormat value={currentVariant.price} />{" "}
                    {router.locale === "uz" ? "so'm" : "сум"}
                  </h2>
                  {/* @ts-ignore */}
                  {data?.old_price > 0 && (
                    <h2 className={`old-price`}>
                      <NumberFormat value={data.old_price} />{" "}
                      {router.locale === "uz" ? "so'm" : "сум"}
                    </h2>
                  )}
                </>
              ) : (
                <>
                  <h2
                    className={`main-price ${
                      data?.price === null ? "display-none" : ""
                    }`}
                  >
                    <NumberFormat value={data.price} />{" "}
                    {router.locale === "uz" ? "so'm" : "сум"}
                  </h2>
                  {/* @ts-ignore */}
                  {data?.old_price > 0 && (
                    <h2 className={`old-price`}>
                      <NumberFormat value={data?.old_price} />{" "}
                      {router.locale === "uz" ? "so'm" : "сум"}
                    </h2>
                  )}
                </>
              )}
            </div>
          </div>

          <h3 className="subtitle">
            {router.locale === "uz" ? "Sotuvda mavjud" : "Доступно"}:{" "}
            {currentVariant?.count || data.count}{" "}
            {router.locale === "uz" ? "ta" : "шт."}
          </h3>
        </div>
        <Footer>
          {cart?.find((v: IProduct) => {
            const isIdMatch = v.id === Number(slug);
            const isAttributeMatch = v.attributes?.every(
              (attr: any, index: number) => {
                const activeKey = active && Object.keys(active)[index];
                const activeValue = active && active[activeKey];
                return attr === activeValue;
              }
            );
            return isIdMatch && isAttributeMatch;
          }) ? (
            <div style={{ display: "flex" }} className="buy-btns">
              <Button
                onClick={() => {
                  if (active || attributes.length === 0) {
                    handleAddToCart();
                  } else {
                    setAttributeErr(true);
                    setColorErr(true);
                  }
                }}
                variant="filled"
                style={{
                  fontFamily: "var(--font-readex)",
                  border: "1px solid var(--main-bg-color)",
                  backgroundColor: "var(--main-bg-color)",
                }}
              >
                {t("slug.in cart")}
              </Button>
              <Button
                color="red"
                onClick={handleOrder}
                variant="outline"
                className="buy-btn"
                style={{
                  fontFamily: "var(--font-readex)",
                  border: "1px solid var(--main-bg-color)",
                  color: "var(--main-bg-color)",
                }}
              >
                {t("place an order")}
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex" }} className="buy-btns">
              {cart.some((v: IProduct) => v.id === data.id) ? (
                <Button
                  color="red"
                  onClick={() => router.push("/cart")}
                  style={{
                    fontFamily: "var(--font-readex)",
                    border: "1px solid var(--main-bg-color)",
                    color: "white",
                  }}
                >
                  {router.locale === "uz" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Savatga o'tish <FaCheck size={16} />
                    </div>
                  ) : (
                    "Доступно"
                  )}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    if (
                      Object.keys(active).length > 0 ||
                      attributes.length === 0
                    ) {
                      handleAddToCart();
                    } else {
                      setAttributeErr(true);
                      setColorErr(true);
                    }
                  }}
                  disabled={
                    amount === 0 || cart.some((v: IProduct) => v.id === data.id)
                  }
                  variant="filled"
                  style={{
                    fontFamily: "var(--font-readex)",
                    border: "1px solid var(--main-bg-color)",
                    backgroundColor: "var(--main-bg-color)",
                  }}
                >
                  {cart.some((v: IProduct) => v.id === data.id) ? (
                    router.locale === "uz" ? (
                      "Savatchadan olib tashlash"
                    ) : (
                      "Удалить из корзины"
                    )
                  ) : router.locale === "uz" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Savatchaga qo'shish <MdAddShoppingCart size={16} />
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Добавить в корзину <MdAddShoppingCart size={16} />
                    </div>
                  )}
                </Button>
              )}
              {cart.some((v: IProduct) => v.id === data.id) ? (
                <Button
                  color="red"
                  variant="outline"
                  className="buy-btn"
                  onClick={() => router.push("/cart")}
                  style={{
                    fontFamily: "var(--font-readex)",
                    border: "1px solid var(--main-bg-color)",
                    color: "var(--main-bg-color)",
                  }}
                >
                  {t("place an order")}
                </Button>
              ) : (
                <Button
                  disabled={amount === 0}
                  color="red"
                  onClick={() => {
                    if (
                      Object.keys(active).length > 0 ||
                      attributes.length === 0
                    ) {
                      handleAddToCart();
                      handleOrder();
                    } else {
                      setAttributeErr(true);
                      setColorErr(true);
                    }
                  }}
                  variant="outline"
                  className="buy-btn"
                  style={{
                    fontFamily: "var(--font-readex)",
                    border: "1px solid var(--main-bg-color)",
                    color: "var(--main-bg-color)",
                  }}
                >
                  {t("place an order")}
                </Button>
              )}
            </div>
          )}
        </Footer>
      </div>
    </div>
  );
};

export default ProductVariantSelector;
