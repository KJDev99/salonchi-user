import React, { useState } from "react";
import { Accordion, Badge, Modal, Textarea } from "@mantine/core";
import { Wrapper } from "./style";
import { NumberFormat } from "../number-format";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getStatus, tagStatus } from "@/utils/status";
import { StarIcon } from "@/assets/icons/star";
import { CommentIcon } from "@/assets/icons/comment";
import { useDisclosure } from "@mantine/hooks";
import { StarYellow } from "@/assets/icons/StarYellow";
import { StarGrey } from "@/assets/icons/StarGrey";
import styles from "./style.module.css";
import { AddImage } from "@/assets/icons/addImage";
// import product from "@/screens/product";
import { request } from "@/shared/api/requests";
export const CustomizedAccordion = ({ data, status }: any) => {
  console.log("data", data);
  const { t } = useTranslation("common");
  const [opened, { open, close }] = useDisclosure(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };
  const uploadImage = async (e: any) => {
    console.log("nimadir", data);
    e.preventDefault();
    const file = e.target.files[0];
    // console.log(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await request.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imageUrl = response.data.file;
      setImages([...images, imageUrl]);
      // console.log(setImages);
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };
  const handleSubmit = async () => {
    const dataa = {
      comment: comment,
      rating: rating,
      // product: data[0].product.id,
      product: 6,
      photos: images,
    };

    const res = request.post("product/" + data[0].product.id + "/rate", dataa);
    console.log("res", res);
  };
  console.log(data);
  return (
    <Wrapper>
      <Accordion variant="contained" defaultValue="">
        <Accordion.Item value="customization">
          <Accordion.Control style={{ backgroundColor: "white" }}>
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
                  {status === "DELIVERED" && (
                    <p onClick={open} className="add-comment">
                      <CommentIcon /> Sharh qoldirish
                    </p>
                  )}
                  <Modal
                    opened={opened}
                    onClose={close}
                    title="Mening sharhim"
                    centered
                  >
                    <div className={styles.modalContainer}>
                      <p className={styles.modalText}>Baholang</p>
                      <div
                        className={styles.starsBox}
                        style={{ display: "flex", cursor: "pointer" }}
                      >
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              onClick={() => handleStarClick(index)}
                            >
                              {index < rating ? <StarYellow /> : <StarGrey />}
                            </div>
                          ))}
                      </div>

                      <p className={styles.modalText}>Sharh yozing</p>
                      <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        className={styles.modalInput}
                        placeholder="Mana shu yerga o'z sharhingizni yozing"
                        rows={8}
                      />
                      <form className={styles.modalForm}>
                        <div className={styles.modalImages}>
                          {images.map((image, index) => (
                            <Image
                              className={styles.modalImage}
                              key={index}
                              src={image}
                              alt={`Uploaded ${index}`}
                              width={150}
                              height={150}
                            />
                          ))}
                        </div>
                        <label className={styles.modalLabel} htmlFor="file">
                          <AddImage />
                          <input
                            style={{ display: "none" }}
                            id="file"
                            type="file"
                            onChange={uploadImage}
                          />
                        </label>
                      </form>
                      <button
                        onClick={handleSubmit}
                        className={styles.modalBtn}
                      >
                        Yuborish
                      </button>
                    </div>
                  </Modal>
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
