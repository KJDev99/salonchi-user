import React, { useState } from 'react';
import {
  AvatarEditor,
  ImageLabel,
  UploadImageProvider,
  Wrapper,
} from './style';
import UserImage from '@/assets/images/user.png';
import { PencilIcon } from '@/assets/icons/pencil';
import Image from 'next/image';
import { Loader } from '@mantine/core';

export const Upload = () => {
  const [uploadImage, setUploadImage] = useState('');
  const [imgLoading, setImgLoading] = useState(false);
  const handlChangeImg = async (event: any) => {
    await setImgLoading(true);
    event.preventDefault();
    const files = event.target.files;
    setUploadImage(URL.createObjectURL(files[0]));
    setImgLoading(false);
  };



  return (
    <Wrapper>
      {!!uploadImage && (
        <div className={'clear'} onClick={(e) => e.stopPropagation()}></div>
      )}
      <ImageLabel htmlFor={'subject_image_input'}>
        {imgLoading ? (
          <Loader variant="dots" />
        ) : (
          <UploadImageProvider>
            <Image
              className="upload-image-parent"
              src={uploadImage ? `${uploadImage}` : UserImage}
              alt="upload"
              layout="fill"
              priority
            />
            <AvatarEditor>
              <PencilIcon />
            </AvatarEditor>
          </UploadImageProvider>
        )}
      </ImageLabel>
      <input
        id={'subject_image_input'}
        type={'file'}
        style={{ display: 'none' }}
        onChange={handlChangeImg}
      />
    </Wrapper>
  );
};
