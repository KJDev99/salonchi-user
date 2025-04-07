import { Container, Wrapper } from "@/styles/global";
import { Button, Grid, Stack, Text } from "@mantine/core";
import React, { useEffect, useState, useLayoutEffect } from "react";

import { Additionals, Footer, LeftContent, RightContent, Title } from "./style";

import { Colors } from "./components/colors";

import { usePage } from "./usePage";
import useStore from "@/store";
import { IProduct } from "@/types/product";
import { useRouter } from "next/router";
import { Loader } from "@/components/loader";
import { NumberFormat } from "@/components/number-format";
import { useTranslation } from "next-i18next";
import { CustomBox } from "./components/box";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import { SimilarProducts } from "./components/similar-products";
import { StarIcon } from "@/assets/icons/star";
import { Attributes } from "./components/attributes";
import { BoxIcon } from "@/assets/icons/box";
import { IconUzcard } from "@/assets/icons/uzcard";
import { IconHumo } from "@/assets/icons/humo";
import Nasiya from "@/assets/icons/nasiya.svg";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { request } from "@/shared/api/requests";
import IconUser from "@/assets/avatar.jpg";
import ProductVariantSelector from "./ProductSelector";

const ProductScreen = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { slug, data, images, active1, attributes, isLoading } = usePage();
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
  const [rates, setRates] = useState<any>();
  const [active, setActive] = useState<any>({});
  const addToCart = (product?: any) => {
    const attributes =
      data.attributes.attributes.length === 0 ? [] : Object.values(active);
    const selectedAttribute = data.attributes.attributes.find(
      (attr: any, index: number) => {
        const activeKey = active && Object.keys(active)[index];
        const activeValue = active && active[activeKey];
        return attr.values.some((val: any) => val.id === activeValue); // Find the matching attribute value
      }
    );

    // Get the image URL from the selected attribute if it exists
    const selectedImage =
      selectedAttribute && selectedAttribute.type === "IMAGE"
        ? selectedAttribute.values.find(
            (val: any) => val.id === active[Object.keys(active)[0]]
          )?.value // Get the selected image URL
        : data?.media[0]?.file;
    const existingProduct = cart?.find((v: IProduct) => {
      const isIdMatch = v.id === Number(slug);
      const isAttributeMatch =
        JSON.stringify(v.attributes) === JSON.stringify(attributes);

      return isIdMatch && isAttributeMatch;
    });

    if (existingProduct) {
      // If product with the same ID and attributes exists, navigate to cart
      router.push("/cart");
    } else {
      // If no existing product, add the new product to cart
      const newProduct = {
        ...data,
        amount: amout,
        media: selectedImage, // Use selected attribute's image
        attributes, // Add attributes to the new product
        box: boxList?.find((v: any) => v?.selected)?.id,
        variant: product?.variant,
      };
      addCart(newProduct); // Add the new product to the cart
    }
  };

  function formatDate(inputDate: any) {
    const date = new Date(inputDate);

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  const handleOrder = () => {
    if (active || data.attributes.attributes.length === 0) {
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
  // console.log(data);
  const getRates = async () => {
    const res = await request.get("product/" + data?.id + "/rate");
    // console.log(res?.data?.results);
    setRates(res?.data?.results);
  };

  const galleryRef = React.createRef<ReactImageGallery>();
  const handleAttributeImageClick = (selectedImageUrl: any) => {
    const selectedIndex = images.findIndex(
      (image) => image.original === selectedImageUrl
    );

    if (selectedIndex !== -1 && galleryRef.current) {
      galleryRef.current.slideToIndex(selectedIndex);
    }
  };
  const { width } = useViewportSize();
  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <Container style={{ padding: 0 }} className="product-slug-container">
          <Grid>
            <Grid.Col
              className="carousel-container"
              lg={5}
              md={6}
              sm={12}
              xs={12}
              span={12}
            >
              <LeftContent>
                <ImageGallery
                  ref={galleryRef}
                  items={images}
                  thumbnailPosition={width > 576 ? "bottom" : "bottom"}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showThumbnails={width > 576 ? true : false}
                  showBullets={false}
                  infinite={false}
                  showNav={true}
                  slideOnThumbnailOver={true}
                  disableThumbnailScroll={false}
                />
                {/* <CarouselDetails ref={galleryRef} images={images} /> */}
              </LeftContent>
              <CustomBox
                // style={{ border: "1px solid black" }}
                boxes={data?.boxes}
                setBoxList={setBoxList}
              />
            </Grid.Col>
            <Grid.Col lg={7} md={6} sm={12} xs={12} span={12}>
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

                  <ProductVariantSelector
                    data={data}
                    attributes={data?.attributes.attributes}
                    variants={data?.attributes?.variants}
                    cart={cart}
                    addToCart={addToCart}
                    handleOrder={handleOrder}
                    slug={slug}
                    active={active}
                    setActive={setActive}
                    attributeErr={atributErr}
                    colorErr={colorErr}
                    setAttributeErr={setAtributErr}
                    setColorErr={setColorErr}
                    handleAttributeImageClick={handleAttributeImageClick}
                  />
                  <div className="card-options">
                    <div className="advantages">
                      <div className="advantagesBox">
                        <BoxIcon />
                        <h3>{t("common.product_deliver")}</h3>
                        <p>{t("common.product_deliver2")}</p>
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
                        <h3>{t("comfort_paying")}</h3>
                        <p>{t("comfort_paying2")}</p>
                      </div>
                    </div>
                  </div>
                </RightContent>
              </Container>
            </Grid.Col>
          </Grid>
          <Additionals>
            <div className="tabs">
              <h3
                className={`tab ${!comments ? "active" : ""}`}
                onClick={() => setComments(false)}
              >
                {t("about_product")}
              </h3>
              <h3
                className={`tab ${comments ? "active" : ""}`}
                onClick={() => {
                  getRates();
                  setComments(true);
                }}
              >
                {t("Комментарии")}
              </h3>
            </div>
            <div
              style={{ display: !comments ? "block" : "none" }}
              className="description"
            >
              <h2>{t("about_product")}</h2>
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
              {rates &&
                rates.length > 0 &&
                rates.map((item: any) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: "1px solid #ccc",
                      }}
                      key={item.id}
                    >
                      <div>
                        <Image
                          src={item.user.photo ? item.user.photo : IconUser}
                          alt="image"
                          width={60}
                          height={60}
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                          paddingTop: "10px",
                        }}
                      >
                        <h3 style={{ fontWeight: 500 }}>
                          {item?.user?.firstname || "User"}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            // justifyContent: "center",
                          }}
                        >
                          <div style={{ display: "flex", gap: "5px" }}>
                            {Array(5)
                              .fill(0)
                              .map((_, index) => (
                                <div key={index}>
                                  {index < item.rating ? <StarIcon /> : ""}
                                </div>
                              ))}
                          </div>
                          <p style={{ color: "#9a9696", fontSize: "14px" }}>
                            {formatDate(item.created)}
                          </p>
                        </div>
                        <p style={{ color: "#2c2c2c" }}>{item.comment}</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          {item.photos.length > 0 &&
                            item.photos.map((item: any) => {
                              return (
                                <Image
                                  key={item}
                                  src={item}
                                  alt="image"
                                  width={300}
                                  height={300}
                                  style={{
                                    objectFit: "cover",
                                    height: "140px",
                                    width: "140px",
                                  }}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Additionals>
          <SimilarProducts item={data} />
        </Container>
      )}
    </Wrapper>
  );
};

export default ProductScreen;
