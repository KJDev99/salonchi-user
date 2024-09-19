import * as React from "react";
import { Box } from "@mantine/core";
import Popup from "./popup";
import { UploadImage } from "./upload-image";
import { Wrapper } from "./style";
import Image from "next/image";
import IconUser from "@/assets/images/user.png";
import { RemoveImage } from "./remove-image";

export const ProfileUpload = ({ setPhoto, image, setImage }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Box my={2}>
          <Image
            src={image === null ? IconUser : image}
            alt="cropped"
            width={169}
            height={169}
            className="upload-image"
            priority
          />
        </Box>

        <UploadImage
          setPhoto={setPhoto}
          getUploadedFile={(image: any) => {
            setOpen(true);
            setImage(image);
          }}
        />
        <RemoveImage
          setPhoto={setPhoto}
          // getUploadedFile={() => {
          //   setOpen(true);
          //   setPhoto(image);
          // }}
        />
        <Popup
          open={open}
          handleClose={handleClose}
          image={image}
          getCroppedFile={(image: any) => {
            setImage(image);
            handleClose();
          }}
        />
      </Box>
    </Wrapper>
  );
};
