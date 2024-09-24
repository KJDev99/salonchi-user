import { Container, Title, Wrapper } from "@/styles/global";
import { Button, Grid, Modal } from "@mantine/core";
import React, { Fragment, useState } from "react";
import { Card } from "./components/card";
import { Checkout } from "./components/checkout";
import { Textarea } from "@/components/textarea";
import { CustomerInfo, CustomerTitle, Left, Right } from "./style";
import { IProduct } from "@/types/product";
import { CartEmpty } from "./components/empty";
import { FormProvider } from "react-hook-form";
import { Address } from "./components/address";
import { useCart } from "./useCart";
import { Loader } from "@/components/loader";
import { useTranslation } from "next-i18next";
import { PaymentMethod } from "./components/payment";
import { useViewportSize } from "@mantine/hooks";

const CartScreen = () => {
  const { t } = useTranslation("common");
  const {
    user,
    form,
    open,
    close,
    opened,
    comment,
    isLoading,
    setComment,
    initialCart,
    addressDetails,
  } = useCart();
  const [value, setValue] = useState("PAYME");
  const [payType, setPaytype] = useState(0);
  const { width } = useViewportSize();
  console.log(initialCart, "CartScreen");

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : initialCart.length === 0 ? (
        <Container>
          <CartEmpty />
        </Container>
      ) : (
        <Container>
          <Title className="cart-title">
            {t("cart.title1")} {initialCart.length} {t("cart.title2")}
          </Title>
          <Grid gutter={30} mt={29}>
            <Grid.Col span={12} lg={8}>
              <Grid>
                {initialCart.map((item: IProduct) => (
                  <Grid.Col span={12} lg={12} key={item?.id}>
                    <Card item={item} />
                  </Grid.Col>
                ))}
                {/* <Grid.Col span={12}>
                  <Textarea value={comment} setValue={setComment} />
                </Grid.Col> */}
                {user?.access && (
                  <Grid.Col span={12}>
                    <CustomerInfo>
                      <Left>
                        <CustomerTitle>{t("cart.user info")}</CustomerTitle>
                        <p className="contact-customer">
                          <span>{user?.firstname}</span>
                          <span>{user?.phone}</span>
                        </p>
                        {addressDetails?.message ===
                        "Address not found" ? null : (
                          <p className="location-customer">
                            {addressDetails?.manual_address}
                          </p>
                        )}
                      </Left>
                    </CustomerInfo>
                  </Grid.Col>
                )}
              </Grid>
            </Grid.Col>
            <Grid.Col span={12} lg={4}>
              <Checkout
                initialCart={initialCart}
                comment={comment}
                value={value}
                payType={payType}
              />
              {width > 1200 ? (
                <FormProvider {...form}>
                  <PaymentMethod
                    value={value}
                    setValue={setValue}
                    payType={payType}
                    setPaytype={setPaytype}
                  />
                </FormProvider>
              ) : null}
            </Grid.Col>
            {width < 1200 ? (
              <Fragment>
                <Grid.Col span={12}>
                  <FormProvider {...form}>
                    <PaymentMethod
                      value={value}
                      setValue={setValue}
                      payType={payType}
                      setPaytype={setPaytype}
                    />
                  </FormProvider>
                </Grid.Col>
                <Grid.Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    color="red"
                    type="submit"
                    className="order-btn"
                    form="form"
                  >
                    {t("place an order")}
                  </Button>
                </Grid.Col>
              </Fragment>
            ) : null}
          </Grid>
        </Container>
      )}
      <FormProvider {...form}>
        <Modal title="Address" onClose={close} opened={opened}>
          <Address close={close} />
        </Modal>
      </FormProvider>
    </Wrapper>
  );
};

export default CartScreen;
