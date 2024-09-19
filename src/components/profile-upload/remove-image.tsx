import * as React from "react";
import { ActionIcon, Button } from "@mantine/core";
import styled from "@emotion/styled";
import { AddImage } from "@/assets/icons/addImage";
import { IconDelete } from "@/assets/icons/deleteImage";

const Input = styled("input")`
  display: none;
`;

export const RemoveImage = ({ getUploadedFile, setPhoto }: any) => {
  const onClick = (e: any) => {
    e.preventDefault();
    setPhoto(null);
  };
  return (
    <label htmlFor="contained-button-file">
      <Button onClick={onClick} className="edit-pencil" component="span">
        <IconDelete />
      </Button>
    </label>
  );
};
