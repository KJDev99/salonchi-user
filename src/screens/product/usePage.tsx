import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
export const usePage = () => {
  interface IPictures {
    file: string;
    file_type: string;
  }

  interface TImages {
    original: string;
    thumbnail: string;
    type: string;
  }
  const router = useRouter();
  const slug = router.query.slug as string;
  // const id = slug.split("-")[0];
  const id = slug;
  const [images, setImages] = useState<TImages[]>([]);
  const [active, setActive] = useState<any>([]);
  const [active1, setActive1] = useState<number>(1);

  const { data = { detail: null, attributes: [] }, isLoading } = useQuery(
    [REACT_QUERY_KEYS.PRODUCT_DETAIL, id],
    () => request(ENDPOINTS.PRODUCT_DETAIL + `${id}`),
    {
      select: (res) => {
        return {
          detail: res?.data,
          attributes: res?.data?.attributes,
        };
      },
      onSuccess: (res) => {
        if (!res?.detail) {
          // Agar ma'lumot yo'q bo'lsa, 404 sahifaga yo'naltirish
          window.location.href = "/404";
          return;
        }

        setImages(
          res?.detail?.media?.map((v: IPictures) => {
            if (v.file_type === "image") {
              return {
                original: v?.file,
                thumbnail: v?.file,
              };
            } else {
              return {
                original: v?.file,
                thumbnail:
                  "https://f8189e0b-salonchi.s3.timeweb.cloud/salonchi/c2b5d6cc-7759-45c5-a96b-b3158b2e5458.webp",
                renderItem: () => (
                  <video
                    src={v?.file}
                    width={"100%"}
                    height="400px"
                    controls
                  ></video>
                ),
              };
            }
          })
        );
        setActive(res?.detail?.colors?.[0]?.id);
      },
      onError: () => {
        // Agar xato bo'lsa, 404 sahifaga yo'naltirish
        window.location.href = "/404";
      },
      enabled: id !== undefined,
    }
  );

  return {
    slug: id,
    data: data?.detail,
    images,
    active,
    active1,
    attributes: data?.attributes,
    isLoading,
    setActive,
    setActive1,
  };
};
