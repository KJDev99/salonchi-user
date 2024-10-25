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

interface User {
  id: number;
  photo: string | null;
  phone: string;
  firstname: string;
  address: {
    id: number;
    region: {
      id: number;
      name_uz: string;
      name_ru: string;
    };
    district: {
      id: number;
      name_uz: string;
      name_ru: string;
    };
    street: string;
    home: string;
  };
}

interface Region {
  id: number;
  name_uz: string;
  name_ru: string;
}

interface District {
  id: number;
  name_uz: string;
  name_ru: string;
}

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
  const [selectedOption, setSelectedOption] = useState("cash");
  const [loading, setLoading] = useState(true);
  const [users, setUser] = useState<User | null>(null);
  const [regions, setRegions] = useState<Region[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userDataString = localStorage.getItem("userData");
        let userData;
        if (userDataString) {
          try {
            userData = JSON.parse(userDataString);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }

        // Fetch user profile
        const userResponse = await axios.get(
          "https://api.salonchi.uz/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${userData?.access}`,
            },
          }
        );
        setUser(userResponse.data);

        // Fetch regions list
        const regionsResponse = await axios.get(
          "https://api.salonchi.uz/api/v1/region/list"
        );
        setRegions(regionsResponse.data);

        // Fetch districts if the user already has a selected region
        if (userResponse.data?.address?.region?.id) {
          const districtsResponse = await axios.get(
            `https://api.salonchi.uz/api/v1/region/district/${userResponse.data.address.region.id}/list`
          );
          setDistricts(districtsResponse.data);
          setSelectedRegion(userResponse.data.address.region.id); // Set selected region
          setSelectedDistrict(userResponse.data.address.district.id); // Set selected district
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserProfile();
  }, [loading]);

  const [street, setStreet] = useState(users?.address?.street || "");
  const [home, setHome] = useState(users?.address?.home || "");

  // Handle street change
  const handleStreetChange = (e: any) => {
    setStreet(e.target.value);
  };

  // Handle home change
  const handleHomeChange = (e: any) => {
    setHome(e.target.value);
  };

  // Handle region change and fetch districts
  const handleRegionChange = async (e: any) => {
    const regionId = Number(e.target.value);
    setSelectedRegion(regionId);

    // Reset districts and selected district when region changes
    setDistricts([]);
    setSelectedDistrict(null);

    // Fetch districts for the selected region
    try {
      const districtsResponse = await axios.get(
        `https://api.salonchi.uz/api/v1/region/district/${regionId}/list`
      );
      setDistricts(districtsResponse.data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  // Handle district selection
  const handleDistrictChange = (e: any) => {
    const districtId = Number(e.target.value);
    setSelectedDistrict(districtId);
  };
  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : initialCart.length === 0 ? (
        <Container>
          <CartEmpty />
        </Container>
      ) : (
        <Container>
          <Title className="cart-title">
            {infoUserOpened && `${t("Buyurtmani rasmiylashtirish")}`}
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
                          <label>Familiya va ism</label>
                          <input
                            type="text"
                            value={users?.firstname || ""}
                            placeholder="Ism va familya"
                          />
                        </div>

                        <div className="inputs">
                          <label>Telefon raqami</label>
                          <input
                            type="text"
                            value={users?.phone || ""}
                            placeholder="Telefon raqami"
                          />
                        </div>

                        <div className="inputs">
                          <label>Viloyat</label>
                          <select
                            value={selectedRegion || ""}
                            onChange={handleRegionChange}
                            placeholder="Viloyatingizni tanlang"
                          >
                            <option value="" disabled>
                              Viloyatingizni tanlang
                            </option>
                            {regions.map((region) => (
                              <option key={region.id} value={region.id}>
                                {region.name_uz}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="inputs">
                          <label>Tuman</label>
                          <select
                            value={selectedDistrict || ""}
                            onChange={handleDistrictChange}
                            placeholder="Tumaningizni tanlang"
                          >
                            <option value="" disabled>
                              Tumaningizni tanlang
                            </option>
                            {districts.map((district) => (
                              <option key={district.id} value={district.id}>
                                {district.name_uz}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="inputs">
                          <label>Ko’cha (ixtiyoriy)</label>
                          <input
                            type="text"
                            value={street}
                            onChange={handleStreetChange}
                            placeholder="Ko’changizni nomini kiriting"
                          />
                        </div>

                        <div className="inputs">
                          <label>Uy raqami (ixtiyoriy)</label>
                          <input
                            type="text"
                            value={home}
                            onChange={handleHomeChange}
                            placeholder="Uy raqamini kiriting"
                          />
                        </div>

                        <div className="inputs textarea">
                          <label>Kuryer uchun izoh yozing (ixtiyoriy)</label>
                          <textarea
                            placeholder="Izoh yozing"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </Left>
                  </CustomerInfo>
                </Grid.Col>
              )}
              <Grid className="mahsulotlar">
                <h2>Savatdagi mahsulotlar</h2>
                {initialCart.map((item: IProduct, i: number) => (
                  <Grid.Col span={12} lg={12} key={i}>
                    <Card item={item} />
                  </Grid.Col>
                ))}
              </Grid>
              {infoUserOpened && (
                <Grid.Col span={12}>
                  <CustomerInfo>
                    <Left>
                      <Title>To`lov turi</Title>

                      {/* <PaymentOption
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
                      </PaymentOption> */}
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
