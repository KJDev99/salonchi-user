import React, { use, useEffect } from "react";
import { Wrapper, Image, Title, Input, Button } from "./style";
import { request } from "@/shared/api/requests";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Advertising = ({ id }: any) => {
  const [data, setData] = React.useState<{
    photo: string;
    name: string;
    phone: string;
  }>();
  const [loading, setLoading] = React.useState(true);
  const [loading2, setLoading2] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const router = useRouter();
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
  const handleSubmit = async () => {
    if (!name) {
      setNameError(true);
      return;
    }
    if (!phone) {
      setPhoneError(true);
      return;
    }
    setLoading2(true);
    const res = await request.post(`lead`, {
      name,
      phone,
      product: id,
    });
    setLoading2(false);
    if (res.status === 201) {
      toast.success("Siz muvaffaqiyatli ro`yxatdan o`tdingiz");
      setTimeout(() => {
        router.push("/product/" + id);
      }, 1500);
    }
  };
  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Image src={data?.photo} alt="Product Image" />
          <Title>
            Narxi va boshqa ma`lumotlar uchun hoziroq ro`yxatdan o`ting
          </Title>
          <Input
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            style={{
              outline: nameError ? "2px solid red" : "",
              outlineOffset: "2px",
            }}
            type="text"
            placeholder="Ismingiz"
          />
          <Input
            style={{
              outline: phoneError ? "2px solid red" : "",
              outlineOffset: "2px",
            }}
            defaultValue={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError(false);
            }}
            type="text"
            placeholder="+998XXXXXXXXX"
          />
        </>
      )}
      <Button
        style={{ backgroundColor: loading2 ? "grey" : "" }}
        onClick={() => handleSubmit()}
      >
        Ro`yxatdan o`ting
      </Button>
    </Wrapper>
  );
};

export default Advertising;
