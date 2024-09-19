import React, { Dispatch, SetStateAction, useState } from "react";
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
  // const form = useFormContext();
  const router = useRouter();
  const { t } = useTranslation("common");
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
      router.push("/");
    },
  });
  const onSubmit = (data: any) => {
    const formData: any = new FormData();
    formData.append("firstname", data?.firstname);
    if (photo !== "null" && photo !== null) {
      formData.append("photo", photo);
    }

    formData.append("region", data?.region);
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
          <Grid.Col span={12} lg={6}>
            <Input
              name="firstname"
              control={form.control}
              label={t("fullname")}
              placeholder={t("fullname")}
            />
            <PhoneInput
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
