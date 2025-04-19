import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Button, Grid } from "@mantine/core";
import { Title } from "@/styles/global";
import { Wrapper } from "./style";
import { PhoneInput } from "@/components/phone-input";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@/shared/modules/profile";
import { Loader } from "@/components/loader";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { ProfileUpload } from "@/components/profile-upload";
// import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useReset } from "./useReset";

interface IPersonalInfo {
  pageLoading: boolean;
  regionsList: any[];
  districtList: any[];
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

export const PersonalInfo = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  const [photo, setPhoto] = useState<any>(null);
  const {
    form,
    image,
    setImage,
    isLoading: pageLoading,
    regionsList,
    districtList,
  } = useReset();

  const { mutate, isLoading } = useMutation((data) => updateProfile(data), {
    onSuccess: () => {
      toast.success("Profil ma'lumotlari muvaffaqiyatli yangilandi");
      router.push("/profile");
    },
  });
  const onSubmit = (data: any) => {
    const address = {
      street: data?.street,
      home: data?.home,
      region: data?.region,
      district: data?.district,
    };
    const formData: any = {
      address: address,
      photo: photo,
      firstname: data?.firstname,
      phone: data?.phone,
    };
    console.log("formData", formData);
    
    mutate(formData);    
  };
  
  return (
    <Wrapper>
      {pageLoading ? (
        <Loader />
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid gutter={10}>
            <div className="gradient"></div>
            <Grid.Col span={12} lg={3}>
              {/* <Upload /> */}
              <ProfileUpload
                setPhoto={setPhoto}
                image={image}
                setImage={setImage}
              />
            </Grid.Col>
          </Grid>
          <Grid.Col className="personal-info">
            <Input
              className="personal-input"
              name="firstname"
              control={form.control}
              label={t("fullname")}
              placeholder={t("fullname")}
            />
            <PhoneInput
              className="personal-input"
              name="phone"
              control={form.control}
              label={t("phone")}
              placeholder={t("phone")}
              disabled
            />
            <Select
              name="region"
              control={form.control}
              label={t("region")}
              placeholder={t("region")}
              data={regionsList}
              nothingFound="Nothing found"
            />
            <Select
              name="district"
              control={form.control}
              label={t("district")}
              placeholder={t("district")}
              data={districtList}
              nothingFound="Nothing found"
            />
            <Input
              className="personal-input"
              name="street"
              control={form.control}
              label={t("street")}
              placeholder={t("street")}
            />
            <Input
              className="personal-input"
              name="home"
              control={form.control}
              label={t("homeNumber")}
              placeholder={t("homeNumber")}
            />
          </Grid.Col>
          {/* <Title className="personal-title">{t("delivery address")}</Title> */}
          <Grid gutter={10}>
            {/* <Grid.Col span={12} lg={6}>
              <Select
                name="region"
                control={form.control}
                label={t("region")}
                placeholder={t("region")}
                data={regionsList}
                nothingFound="Nothing found"
              />
            </Grid.Col> */}
            <Grid.Col lg={8} />
            <Grid.Col span={12} lg={4}>
              <Button color="red" type="submit" loading={isLoading}>
                {t("address.save")}
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      )}
    </Wrapper>
  );
};
