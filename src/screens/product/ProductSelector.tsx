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
  const router = useRouter();

  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);
  const [amount, setAmount] = useState(1);
  const { t } = useTranslation("common");

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
        const attrKey = attr.type === "IMAGE" ? "Rangi" : attr.name_uz;

        return {
          ...acc,
          [attrKey]: selectedValue?.title || selectedValue?.label,
        };
      }, {});

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
    if (!currentVariant && variants.length > 0) {
      setAttributeErr(true);
      setColorErr(true);
      return;
    }

    const newProduct = {
      ...data,
      price: currentVariant?.price || minimumPriceFinder(),
      old_price: currentVariant?.old_price || minimumOldPrice(),
      count: currentVariant?.count || data.count,
      amount,
      variant: currentVariant,
      attributes: active,
    };
    addToCart(newProduct);
  };
  const minimumPriceFinder = () => {
    if (variants.length === 0) return data.price;
    let min = variants[0].price;
    variants.forEach((variant: any) => {
      if (variant.price < min) {
        min = variant.price;
      }
    });
    return min;
  };
  const minimumOldPrice = () => {
    if (variants.length === 0) return data.old_price;
    let min = variants[0].old_price;
    variants.forEach((variant: any) => {
      if (variant.old_price < min) {
        min = variant.old_price;
      }
    });
    return min;
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
            <input
              type="number"
              value={amount}
              readOnly
              max={currentVariant?.count || 1}
            />
            <span onClick={() => adjustAmount(1)}>+</span>
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
                  <h2 className="old-price">
                    <NumberFormat value={currentVariant.old_price} />{" "}
                    {router.locale === "uz" ? "so'm" : "сум"}
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="main-price">
                    <NumberFormat value={minimumPriceFinder()} />{" "}
                    {router.locale === "uz" ? "so'm" : "сум"}
                  </h2>
                  <h2 className="old-price">
                    <NumberFormat value={minimumOldPrice()} />{" "}
                    {router.locale === "uz" ? "so'm" : "сум"}
                  </h2>
                </>
              )}
            </div>
          </div>
          {currentVariant && (
            <h3 className="subtitle">
              {router.locale === "uz" ? "Sotuvda mavjud" : "Доступно"}:{" "}
              {currentVariant.count} {router.locale === "uz" ? "ta" : "шт."}
            </h3>
          )}
        </div>
        {/* Add to Cart Button */}
        <Footer>
          {cart?.find((v: IProduct) => {
            const isIdMatch = v.id === Number(slug);
            const isAttributeMatch = v.attributes?.every(
              (attr: any, index: number) => {
                const activeKey = active && Object.keys(active)[index];
                const activeValue = active && active[activeKey]; // Get the corresponding
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
              <Button
                onClick={() => {
                  if (
                    Object.keys(active).length > 0 ||
                    attributes.length === 0
                  ) {
                    console.log(active);
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
                  // color: "var(--main-white)",
                }}
              >
                {t("slug.add to cart")}
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
          )}
        </Footer>
      </div>
    </div>
  );
};

export default ProductVariantSelector;
