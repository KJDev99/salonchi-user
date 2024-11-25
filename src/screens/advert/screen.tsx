import React, { use, useEffect } from "react";
import { Wrapper, Image, Title, Input, Button } from "./style";
import { request } from "@/shared/api/requests";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader } from "@/components/loader";
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
  const [phone, setPhone] = React.useState("+998-");
  const router = useRouter();
  useEffect(() => {
    if (id) {
      const getData = async () => {
        const res = await request.get(`lead/product/${id}/detail`);
        setData(res?.data);
        setLoading(false);
      };
      getData();
    }
  }, [id]);
  const handleInputChange = (e: any) => {
    setPhoneError(false);
    // Remove non-numeric characters (except the prefix) from the input
    if (e.target.value.length > 4) {
      let input = e.target.value.replace(/[^\d]/g, "");

      // Ensure it starts with +998
      if (!input.startsWith("998")) {
        input = "998";
      }

      // Apply formatting as +998-91-123-45-56
      let formatted = `+${input.slice(0, 3)}`;
      if (input.length > 3) formatted += `-${input.slice(3, 5)}`;
      if (input.length > 5) formatted += `-${input.slice(5, 8)}`;
      if (input.length > 8) formatted += `-${input.slice(8, 10)}`;
      if (input.length > 10) formatted += `-${input.slice(10, 12)}`;

      setPhone(formatted);
    }
  };
  const handleSubmit = async () => {
    if (!name) {
      setNameError(true);
      return;
    }

    if (phone.length < 17) {
      setPhoneError(true);
      return;
    }
    setLoading2(true);
    const res = await request.post(`lead`, {
      name,
      phone: phone,
      product: id,
    });
    setLoading2(false);
    if (res.status === 200 || res.status === 201) {
      toast.success("Siz muvaffaqiyatli ro`yxatdan o`tdingiz");
      router.push("/product/" + id);
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
            value={phone}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="+998XXXXXXXXX"
          />
        </>
      )}
      <Button
        style={{ backgroundColor: loading2 ? "grey" : "" }}
        onClick={() => handleSubmit()}
      >
        {loading2 ? <Loader /> : "Ro`yxatdan o`tish"}
      </Button>
    </Wrapper>
  );
};

export default Advertising;
