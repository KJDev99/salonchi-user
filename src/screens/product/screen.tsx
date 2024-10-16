import { Container, Wrapper } from "@/styles/global";
import { Button, Grid, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  Additionals,
  AddToCart,
  Body,
  Footer,
  Header,
  Info,
  LeftContent,
  Parameters,
  RatingUI,
  RightContent,
  Title,
} from "./style";
import CarouselDetails from "@/components/carousel/carousel.details";
import { Rating } from "@mantine/core";
import { Colors } from "./components/colors";
import { HeartIcon } from "@/assets/icons/heart";
import { SupplierIcon } from "@/assets/icons/supplier";
import { ActiveCartIcon } from "@/assets/icons/active.cart";
// import Link from 'next/link';
import { usePage } from "./usePage";
import useStore from "@/store";
import { IProduct } from "@/types/product";
import { useRouter } from "next/router";
import { Loader } from "@/components/loader";
import { BottomNavigator } from "@/components/footer/bottom.navigator";
import { NumberFormat } from "@/components/number-format";
import { useTranslation } from "next-i18next";
import { CustomBox } from "./components/box";
import { colors, colors2 } from "./constants";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import { SimilarProducts } from "./components/similar-products";
import toast from "react-hot-toast";
import { StarIcon } from "@/assets/icons/star";
import { Attributes } from "./components/attributes";
import { BoxIcon } from "@/assets/icons/box";
import { IconUzCard } from "@/assets/icons/card";
import { IconUzcard } from "@/assets/icons/uzcard";
import { IconHumo } from "@/assets/icons/humo";
import Nasiya from "@/assets/icons/nasiya.svg";
import Image from "next/image";
// import { CustomBox } from './components/box';

const ProductScreen = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const {
    slug,
    data,
    images,
    active,
    active1,
    attributes,
    isLoading,
    setActive,
    setActive1,
  } = usePage();
  const [checked, setChecked] = useState(false);
  const cart = useStore((state: any) => state.cart);
  const addCart = useStore((state: any) => state.addToCart);
  const [boxList, setBoxList] = useState<any>([]);
  const addToWishList = useStore((state: any) => state.addToWishList);
  const removeWishList = useStore((state: any) => state.removeWishList);
  const wishlist = useStore((state: any) => state.wishlist);
  const [atributErr, setAtributErr] = useState<any>(false);
  const [colorErr, setColorErr] = useState<any>(false);
  const [comments, setComments] = useState<any>(false);
  const [amout, setAmout] = useState<any>(1);
  const addToCart = () => {
    const media = data?.media[0]?.file;
    cart?.find((v: IProduct) => v.id == Number(slug))
      ? router.push("/cart")
      : !!boxList?.find((v: any) => v?.selected)
      ? addCart({
          ...data,
          amout,
          media,
          // color: active,
          attributes: Object.values(active),

          box: boxList?.find((v: any) => v?.selected)?.id,
        })
      : addCart({
          ...data,
          media,
          amount: amout,
          // color: active,
          attributes: Object.values(active),
        });
    // console.log(data);
  };

  const handleOrder = () => {
    if (active) {
      addToCart();
      router.push("/cart");
    } else {
      setAtributErr(true);
      setColorErr(true);
    }
  };

  const handleAddWishlist = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!checked) {
      addToWishList(data);
    } else {
      removeWishList(data?.id);
    }
  };

  useEffect(() => {
    if (wishlist?.find((v: any) => v.id == data?.id)?.hasWishList) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [wishlist, data?.id]);

  // console.log(attributes, "data");

  function addOne(value: number) {
    if (value == -1 && amout == 0) return false;
    setAmout(amout + value);
  }

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <Container style={{ padding: 0 }} className="product-slug-container">
          <Grid>
            <Grid.Col lg={6} md={6} sm={12} xs={12} span={12}>
              <LeftContent>
                <CarouselDetails images={images} />
              </LeftContent>
              <CustomBox
                // style={{ border: "1px solid black" }}
                boxes={data?.boxes}
                setBoxList={setBoxList}
              />
            </Grid.Col>
            <Grid.Col lg={6} md={6} sm={12} xs={12} span={12}>
              <Container style={{ padding: 0 }}>
                <RightContent>
                  <div className="right-top">
                    <Title>
                      {router.locale === "uz" ? data?.name_uz : data?.name_ru}
                    </Title>
                    <div
                      className="heart-wrapper"
                      onClick={(e: any) => {
                        setChecked(!checked);
                        handleAddWishlist(e);
                      }}
                    >
                      {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
                    </div>
                  </div>
                  <div className="rating">
                    {/* <StarIcon />{" "} */}
                    <span>
                      {data?.rate.count > 0 ? (
                        <>
                          <StarIcon />
                          <span>
                            {data?.rate?.rate} ({data?.rate?.count} sharhlar)
                          </span>
                        </>
                      ) : (
                        <span>Новинка!</span>
                      )}
                    </span>
                  </div>
                  {/* {console.log(`item`, active)} */}
                  {attributes?.map((item: any, index: number) => {
                    return (
                      <>
                        {item?.type == "TEXT" && (
                          <>
                            <p
                              className="subtitle"
                              style={{ marginTop: "35px" }}
                            >
                              {router.locale === "uz"
                                ? item?.name_uz
                                : item?.name_ru}
                            </p>
                            <Attributes
                              setAtributErr={setAtributErr}
                              setActive={setActive}
                              values={item?.values}
                              atributErr={atributErr}
                              active={active}
                            />
                          </>
                        )}
                        {item?.type == "IMAGE" && (
                          <>
                            <p
                              className="subtitle"
                              style={{ marginTop: "35px" }}
                            >
                              {router.locale === "uz"
                                ? item?.name_uz
                                : item?.name_ru}
                            </p>
                            <Colors
                              name={item?.[`name_uz`]}
                              colors={item?.values}
                              setActive={setActive}
                              active={active}
                              index={index}
                              atributErr={colorErr}
                              setAtributErr={setColorErr}
                            />
                          </>
                        )}
                      </>
                    );
                  })}
                  <div className="card-options">
                    <div className="card-amount">
                      <h3 className="subtitle">Miqdori</h3>
                      <div className="amount-changer">
                        <span onClick={() => addOne(-1)}>-</span>
                        <input type="number" value={amout} />
                        <span onClick={() => addOne(+1)}>+</span>
                      </div>
                    </div>
                    <div className="cardPrice">
                      <div className="price-left">
                        <h3 className="subtitle">Narxi</h3>
                        <div className="price-box">
                          <h2 className="main-price">
                            <NumberFormat value={data?.price} />{" "}
                            {router.locale === "uz" ? "so‘m" : "сум"}
                          </h2>
                          <h2 className="old-price">
                            <NumberFormat value={data?.old_price} />{" "}
                            {router.locale === "uz" ? "so‘m" : "сум"}
                          </h2>
                        </div>
                      </div>
                      {/* <div className="price-right">
                        <h3 className="subtitle">Bo&apos;lib to&apos;lashga</h3>
                        <h2 className="price-monthly">
                          <NumberFormat value={data?.price} />{" "}
                          <span className="price-monthly-p">
                            {router.locale === "uz" ? "so‘m/oyiga" : "сум"}
                          </span>
                        </h2>
                      </div> */}
                    </div>
                    <Footer>
                      {cart?.find((v: IProduct) => v.id == Number(slug)) ? (
                        <div style={{ display: "flex" }} className="buy-btns">
                          <Button
                            onClick={() => {
                              if (active) {
                                addToCart();
                              } else {
                                setAtributErr(true);
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
                              if (active) {
                                addToCart();
                              } else {
                                setAtributErr(true);
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
                    <div className="advantages">
                      <div className="advantagesBox">
                        <BoxIcon />
                        <h3>Tezkor yetkazib berish</h3>
                        <p>
                          Toshkent shahriga 1kun ichida, viloyatlarga 2-3 kun
                          ichda yetkazib berish
                        </p>
                      </div>
                      <div className="advantagesBox">
                        <div className="advantagesBoxIcons">
                          <div className="advantagesBoxIcon">
                            <IconUzcard />
                          </div>
                          <div className="advantagesBoxIcon">
                            <IconHumo />
                          </div>
                          <Image
                            height={100}
                            width={400}
                            src={Nasiya}
                            alt="visa"
                          />
                        </div>
                        <h3>O’zingizga qulay usulda to’lang</h3>
                        <p>
                          Karta orqali, naqd pul yoki bo’lib to’lash xizmati
                          orqali to’lang
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <Parameters>
                    <Text className="desc-title">Tavsif</Text>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: data[`desc_${router.locale}`],
                      }}
                    />
                  </Parameters> */}
                </RightContent>
              </Container>
            </Grid.Col>
            {/* <Grid.Col lg={3} md={6} sm={12} xs={12} span={12}>
              <Container className="add-to-cart-container">
                <AddToCart>
                  <Header>
                    <Title>
                      <NumberFormat value={data?.price} />{" "}
                      {router.locale === "uz" ? "so‘m" : "сум"}
                      <br />
                      {/* <del style={{ fontSize: 15, color: "#8d8d8d" }}>
                        <NumberFormat value={data?.sale_price ?? 0} />
                      </del>{" "} */}
            {/* <span style={{ fontSize: 15, color: "#8d8d8d" }}>
                        {router.locale === "uz" ? "so‘m" : "сум"}
                      </span> */}
            {/* </Title> 
                    <div
                      className="heart-wrapper"
                      onClick={(e: any) => {
                        setChecked(!checked);
                        handleAddWishlist(e);
                      }}
                    >
                      {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
                    </div>
                  </Header>
                  <Body>
                    <div>
                      <SupplierIcon />
                    </div>
                    <Info>
                      <p>{t("slug.address delivery")}</p>
                    </Info>
                  </Body>
                  <Footer>
                    {cart?.find((v: IProduct) => v.id == Number(slug)) ? (
                      <Stack>
                        <Button
                          onClick={() => {
                            if (active) {
                              addToCart();
                            } else {
                              setAtributErr(true);
                            }
                          }}
                          variant="outline"
                          style={{
                            fontFamily: "var(--font-readex)",
                            border: "1px solid var(--main-bg-color)",
                            color: "var(--main-bg-color)",
                          }}
                        >
                          {t("slug.in cart")}
                        </Button>
                        <Button
                          color="red"
                          onClick={handleOrder}
                          variant="filled"
                          style={{ fontFamily: "var(--font-readex)" }}
                        >
                          {t("place an order")}
                        </Button>
                      </Stack>
                    ) : (
                      <Stack>
                        <Button
                          onClick={() => {
                            if (active) {
                              addToCart();
                            } else {
                              setAtributErr(true);
                            }
                          }}
                          variant="outline"
                          style={{
                            fontFamily: "var(--font-readex)",
                            border: "1px solid var(--main-bg-color)",
                            color: "var(--main-bg-color)",
                          }}
                        >
                          {t("slug.add to cart")}
                        </Button>
                        <Button
                          color="red"
                          onClick={handleOrder}
                          variant="filled"
                          style={{ fontFamily: "var(--font-readex)" }}
                        >
                          {t("place an order")}
                        </Button>
                      </Stack>
                    )}
                  </Footer>
                </AddToCart>
              </Container>
            </Grid.Col> */}
          </Grid>
          <Additionals>
            <div className="tabs">
              <h3
                className={`tab ${!comments ? "active" : ""}`}
                onClick={() => setComments(false)}
              >
                Mahsulot haqida
              </h3>
              <h3
                className={`tab ${comments ? "active" : ""}`}
                onClick={() => setComments(true)}
              >
                Sharhlar
              </h3>
            </div>
            <div
              style={{ display: !comments ? "block" : "none" }}
              className="description"
            >
              <h2>Mahsulot haqida</h2>
              <div
                className="description-text"
                dangerouslySetInnerHTML={{
                  __html: data[`desc_${router.locale}`],
                }}
              />
            </div>
            <div
              style={{ display: comments ? "block" : "none" }}
              className="comments"
            >
              <h2>Sharhlar</h2>
            </div>
          </Additionals>
          <SimilarProducts item={data} />
        </Container>
      )}
      <BottomNavigator id={slug} data={data} />
    </Wrapper>
  );
};

export default ProductScreen;
