import { Title } from "@/styles/global";
import { Carousel } from "./carousel";
import {
  CardView,
  LeftView,
  MobileFooter,
  RightView,
  RowView,
  ViewFooter,
} from "./style";
import { ActionIcon, Button } from "@mantine/core";
import { CartIcon } from "@/assets/icons/cart";
import { IProduct } from "@/types/product";
import { NumberFormat } from "@/components/number-format";
import useStore from "@/store";
import { Input, ProductBtns } from "@/components/card/style";
import { IconPlus } from "@/assets/icons/plus";
import { IconMinus } from "@/assets/icons/minus";
import { MouseEvent } from "react";
import CategoryEmpty from "@/components/empty/empty";
import { RowLoader } from "../../ui-skeleton/row.loader";

interface IRow {
  productList: IProduct[];
  isLoading: boolean;
}

export const Row = ({ productList, isLoading }: IRow) => {
  const cart = useStore((state: any) => state.cart);
  const increment = useStore((state: any) => state.increment);
  const decrement = useStore((state: any) => state.decrement);
  const removeItem = useStore((state: any) => state.removeItem);
  const addToCart = useStore((state: any) => state.addToCart);

  const handleIncrement = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    increment(item?.id);
  };

  const handleDecrement = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    cart?.find((el: IProduct) => el?.id === item?.id)?.productQuantity === 1
      ? removeItem(item?.id)
      : decrement(item?.id);
  };

  const handleAddToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    addToCart(item);
  };
  console.log("product", productList);

  return (
    <RowView>
      {isLoading ? (
        <RowLoader />
      ) : productList.length === 0 ? (
        <CategoryEmpty />
      ) : (
        productList.map((el, i) => (
          <CardView key={i}>
            <LeftView>
              {el?.photo !== null && <Carousel images={el?.photo} />}
            </LeftView>
            <RightView>
              <Title>{el.name_uz}</Title>
              <p>
                Sizning suratingiz. Sizning shriftingiz. Sizning vidjetlaringiz.
                Sizning iPhone. iOS 16 qulflangan ekranni yangi usulda sozlash
                imkonini beradi. Suratingizni ko`zga ko`rinadigan qilib qo`ying.
                Faoliyatingizni kuzatib boring.
              </p>
              <ViewFooter>
                <h2>
                  <NumberFormat value={el?.price} /> so‘m
                </h2>
                <span>4.7(293)</span>
                {cart?.find((v: IProduct) => v.id == el.id) ? (
                  <div className="product-btns">
                    <ActionIcon
                      onClick={(e) => handleDecrement(e, el)}
                      className="inner-action-btn"
                    >
                      <IconMinus />
                    </ActionIcon>
                    <Input
                      value={
                        cart?.find((v: IProduct) => v?.id === el.id)
                          ?.productQuantity
                      }
                      readOnly
                    />
                    <ActionIcon
                      onClick={(e) => {
                        handleIncrement(e, el);
                      }}
                      className="inner-action-btn"
                    >
                      <IconPlus />
                    </ActionIcon>
                  </div>
                ) : (
                  <Button
                    leftIcon={<CartIcon />}
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(e, el)}
                  >
                    Savatchaga
                  </Button>
                )}
              </ViewFooter>
              <MobileFooter>
                <div className="currency">
                  <h2>
                    <NumberFormat value={el.price} /> so‘m
                  </h2>
                  <span>4.7(293)</span>
                </div>
                {cart?.find((v: IProduct) => v.id == el.id) ? (
                  <ProductBtns className="mobile-product-btns">
                    <ActionIcon
                      onClick={(e) => handleDecrement(e, el)}
                      className="inner-action-btn"
                    >
                      <IconMinus />
                    </ActionIcon>
                    <Input
                      value={
                        cart?.find((v: IProduct) => v?.id === el.id)
                          ?.productQuantity
                      }
                      readOnly
                    />
                    <ActionIcon
                      onClick={(e) => {
                        handleIncrement(e, el);
                      }}
                      className="inner-action-btn"
                    >
                      <IconPlus />
                    </ActionIcon>
                  </ProductBtns>
                ) : (
                  <Button
                    leftIcon={<CartIcon />}
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(e, el)}
                  >
                    Savatchaga
                  </Button>
                )}
              </MobileFooter>
            </RightView>
          </CardView>
        ))
      )}
    </RowView>
  );
};
