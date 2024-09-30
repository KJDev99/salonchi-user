import { Container, Title, Wrapper } from "@/styles/global";
import { Button, Grid, Modal } from "@mantine/core";
import React, { Fragment, useEffect, useState } from "react";
import { Card } from "./components/card";
import { Checkout } from "./components/checkout";
import { Textarea } from "@/components/textarea";
import {
  CustomerInfo,
  CustomerTitle,
  Left,
  Right,
  PaymentOption,
  RadioButton,
  RadioCircle,
  OptionText,
  IconWrapper,
} from "./style";
import { IProduct } from "@/types/product";
import { CartEmpty } from "./components/empty";
import { FormProvider } from "react-hook-form";
import { Address } from "./components/address";
import { useCart } from "./useCart";
import { Loader } from "@/components/loader";
import { useTranslation } from "next-i18next";
import { PaymentMethod } from "./components/payment";
import { useViewportSize } from "@mantine/hooks";

import Nasiya from "@/assets/icons/nasiya.png";
import Cash from "@/assets/icons/cash.png";
import Uzcard from "@/assets/icons/uzcard.png";
import Humo from "@/assets/icons/humo.png";
import Image from "next/image";
import axios from "axios";

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
  const [infoUserOpened, setInfoUserOpened] = useState(false);
  const { width } = useViewportSize();
  // console.log(initialCart, "CartScreen");
  const [selectedOption, setSelectedOption] = useState("card");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Get the token from localStorage
        const userDataString = localStorage.getItem("userData");
        let userData;
        if (userDataString) {
          try {
            userData = JSON.parse(userDataString); // Converts the JSON string back to an object
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
        // Make the API request with the Authorization header
        const response = await axios.get(
          "https://api.salonchi.uz/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${userData.access}`,
            },
          }
        );
        setUsers(response.data);
        console.log(response.data, "test");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

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
              {infoUserOpened && (
                <Grid.Col span={12}>
                  <CustomerInfo>
                    <Left>
                      <h2>Buyurtmachi ma’lumotlari</h2>
                      <div className="form">
                        <div className="inputs">
                          <label>{t("Familiya va ism")}</label>
                          <input
                            type="text"
                            value={user?.firstname}
                            placeholder="Ism va familya"
                          />
                        </div>
                        <div className="inputs">
                          <label>{t("Telefon raqami")}</label>
                          <input
                            type="text"
                            value={user?.phone}
                            placeholder="Telefon raqami"
                          />
                        </div>
                        <div className="inputs">
                          <label>{t("Viloyat")}</label>
                          <input
                            type="text"
                            // value={user?.phone}
                            placeholder="Viloyatingiz nomini kiriting"
                          />
                        </div>
                        <div className="inputs">
                          <label>{t("Tuman")}</label>
                          <input
                            type="text"
                            // value={user?.phone}
                            placeholder="Tumaningizni nomini kiriting"
                          />
                        </div>
                        <div className="inputs">
                          <label>{t("Ko’cha(ixtiyoriy)")}</label>
                          <input
                            type="text"
                            // value={user?.phone}
                            placeholder="Ko’changizni nomini kiriting"
                          />
                        </div>
                        <div className="inputs">
                          <label>{t("Uy raqami(ixtiyoriy)")}</label>
                          <input
                            type="text"
                            // value={user?.phone}
                            placeholder="Uy raqamini kiriting"
                          />
                        </div>
                        <div className="inputs textarea">
                          <label>
                            {t("Kuryer uchun izoh yozing(ixtiyoriy)")}
                          </label>
                          <textarea
                            // value={user?.phone}
                            placeholder="Izoh yozing"
                          />
                        </div>
                      </div>
                    </Left>
                  </CustomerInfo>
                </Grid.Col>
              )}
              <Grid>
                {initialCart.map((item: IProduct) => (
                  <Grid.Col span={12} lg={12} key={item?.id}>
                    <Card item={item} />
                  </Grid.Col>
                ))}
              </Grid>
              {infoUserOpened && (
                <Grid.Col span={12}>
                  <CustomerInfo>
                    <Left>
                      <Title>To`lov turi</Title>

                      <PaymentOption
                        selected={selectedOption === "card"}
                        onClick={() => setSelectedOption("card")}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioButton selected={selectedOption === "card"}>
                            <RadioCircle selected={selectedOption === "card"} />
                          </RadioButton>
                          <OptionText selected={selectedOption === "card"}>
                            Karta orqali to`lash
                          </OptionText>
                        </div>
                        <IconWrapper>
                          <Image src={Uzcard} alt="Uzcard" />
                          <Image src={Humo} alt="Humo" />
                        </IconWrapper>
                      </PaymentOption>

                      <PaymentOption
                        selected={selectedOption === "uzum"}
                        onClick={() => setSelectedOption("uzum")}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioButton selected={selectedOption === "uzum"}>
                            <RadioCircle selected={selectedOption === "uzum"} />
                          </RadioButton>
                          <OptionText selected={selectedOption === "uzum"}>
                            Uzum nasiya orqali sotib olish
                          </OptionText>
                        </div>
                        <IconWrapper>
                          <Image src={Nasiya} alt="Uzum" />
                        </IconWrapper>
                      </PaymentOption>

                      <PaymentOption
                        selected={selectedOption === "cash"}
                        onClick={() => setSelectedOption("cash")}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioButton selected={selectedOption === "cash"}>
                            <RadioCircle selected={selectedOption === "cash"} />
                          </RadioButton>
                          <OptionText selected={selectedOption === "cash"}>
                            Naqd pul orqali qabul qilganda
                          </OptionText>
                        </div>
                        <IconWrapper>
                          <Image src={Cash} alt="Cash" />
                        </IconWrapper>
                      </PaymentOption>
                    </Left>
                  </CustomerInfo>
                </Grid.Col>
              )}
            </Grid.Col>
            <Grid.Col span={12} lg={4}>
              <Checkout
                initialCart={initialCart}
                comment={comment}
                value={value}
                payType={payType}
                setInfoUserOpened={setInfoUserOpened}
                infoUserOpened={infoUserOpened}
              />
              {/* {width > 1200 ? (
                <FormProvider {...form}>
                  <PaymentMethod
                    value={value}
                    setValue={setValue}
                    payType={payType}
                    setPaytype={setPaytype}
                  />
                </FormProvider>
              ) : null} */}
            </Grid.Col>
            {/* {width < 1200 ? (
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
            ) : null} */}
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
