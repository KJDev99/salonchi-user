import * as React from "react";
import { ActionIcon, Button } from "@mantine/core";
import styled from "@emotion/styled";
import { PencilIcon } from "@/assets/icons/pencil";
import { AddImage } from "@/assets/icons/addImage";
import axios, { Axios } from "axios";
import { request } from "@/shared/api/requests";

const Input = styled("input")`
  display: none;
`;

export const UploadImage = ({ getUploadedFile, setPhoto }: any) => {
  const uploadImage = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      /* const response = await request.post(
        "https://api.salonchi.uz/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ); */
      const response = await request.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.file;
      setPhoto(imageUrl);

      return imageUrl;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };
  const onChange = (e: any) => {
    e.preventDefault();
    // console.log("nimadir", e.target.files[0]);
    // uploadImage(e.target.files[0]);
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files.length === 0) {
      return alert("Please select a file.");
    }
    const reader = new FileReader();
    reader.onload = () => {
      getUploadedFile(reader.result);
      // uploadImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
    // console.log(files[0]);
    uploadImage(files[0]);
  };

  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={onChange}
      />
      <Button className="edit-pencil" component="span">
        <AddImage />
        <p style={{ marginLeft: "5px" }}>Yangilash</p>
      </Button>
    </label>
  );
};
