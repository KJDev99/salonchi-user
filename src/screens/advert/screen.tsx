import React from "react";
import { Wrapper, Image, Title, Input, Button } from "./style";

const Advertising = () => {
  return (
    <Wrapper>
      <Image
        src="https://gso.amocrm.ru/buttons/images/ab/f6/33f208eab31235366268051595aff787ceb2644f644429ce2ca112b9d33f.jpeg"
        alt="Product Image"
      />
      <Title>Narxi va boshqa ma`lumotlar uchun hoziroq ro`yxatdan o`ting</Title>
      <Input type="text" placeholder="Ismingiz" />
      <Input type="text" placeholder="+998XXXXXXXXX" />
      <Button>Ro`yxatdan o`ting</Button>
    </Wrapper>
  );
};

export default Advertising;
