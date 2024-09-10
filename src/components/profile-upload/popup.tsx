import * as React from "react";
import CropperDemo from "./cropper";
import { Modal } from "../modal";

export default function Popup({ open, image, handleClose, getCroppedFile }:any) {
  return (
    <div>
      <Modal
        opened={open}
        close={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
            <CropperDemo
              handleClose={handleClose}
              src={image}
              getCroppedFile={getCroppedFile}
            />
      </Modal>
    </div>
  );
}
