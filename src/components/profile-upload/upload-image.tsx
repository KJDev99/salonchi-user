import * as React from "react";
import { ActionIcon, Button } from "@mantine/core";
import styled from "@emotion/styled";
import { PencilIcon } from "@/assets/icons/pencil";
import { AddImage } from "@/assets/icons/addImage";

const Input = styled("input")`
  display: none;
`;

export const UploadImage = ({ getUploadedFile, setPhoto }: any) => {
  const onChange = (e: any) => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
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
    };
    reader.readAsDataURL(files[0]);
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
