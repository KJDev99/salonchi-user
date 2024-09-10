import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css';
import { Button, Skeleton } from '@mantine/core';

export default function CropperDemo({ src, getCroppedFile }: any) {
  const cropperRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

  const handleClick = () => {
    const imageElement: any = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const img = cropper.getCroppedCanvas().toDataURL();
    getCroppedFile(img);
  };
  const rotate = () => {
    const imageElement: any = cropperRef?.current;
    const cropper = imageElement?.cropper;
    cropper.rotate(90);
  };
  const flip = (type: any) => {
    const imageElement: any = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (type === 'h') {
      cropper.scaleX(scaleX === 1 ? -1 : 1);
      setScaleX(scaleX === 1 ? -1 : 1);
    } else {
      cropper.scaleY(scaleY === 1 ? -1 : 1);
      setScaleY(scaleY === 1 ? -1 : 1);
    }
  };
  return (
    <>
      {loading && (
        <Skeleton variant="rectangular" width={'100%'} height={400} />
      )}
      <Cropper
        src={src}
        style={{ maxHeight: 400, width: '100%' }}
        // Cropper.js options
        initialAspectRatio={16 / 9}
        guides={false}
        ready={() => {
          setLoading(false);
        }}
        ref={cropperRef}
      />
      <Button
        style={{
          float: 'right',
          margin: '24px 0',
          fontFamily: 'var(--font-readex);',
          background: 'var(--main-bg-color)',
          color: 'var(--main-white)',
        }}
        onClick={handleClick}
        autoFocus
        color="red"
        variant="contained"
      >
        Qirqish
      </Button>
    </>
  );
}
