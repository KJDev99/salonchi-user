import React, { useEffect } from "react";
import { Wrapper, Image, Title, Input, Button } from "./style";
import { request } from "@/shared/api/requests";

const Advertising = ({ id }: any) => {
  const [data, setData] = React.useState<{
    photo: string;
    name: string;
    phone: string;
  }>();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (id) {
      const getData = async () => {
        const res = await request.get(`lead/product/${id}/detail`);
        setData(res.data);
        setLoading(false);
      };
      getData();
    }
  }, [id]);
  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Image src={data?.photo} alt="Product Image" />
          <Title>{data?.name}</Title>
          <Title>
            Narxi va boshqa ma`lumotlar uchun hoziroq ro`yxatdan o`ting
          </Title>
          <Input type="text" placeholder="Ismingiz" />
          <Input type="text" placeholder="+998XXXXXXXXX" />
        </>
      )}
      <Button>Ro`yxatdan o`ting</Button>
    </Wrapper>
  );
};

export default Advertising;
