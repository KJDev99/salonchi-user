import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
interface TImages {
  original: string;
  thumbnail: string;
}
export const usePage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;  
  const [images, setImages] = useState<TImages[]>([]);
  const [active, setActive] = useState<any>(null);
  const [active1, setActive1] = useState<number>(1);
  const serves = {
    flowList: (slug: any) => request(`/product/detail/${slug}`),
  };
  const { data: results, isLoading } = useQuery(
    [REACT_QUERY_KEYS.PRODUCT_DETAIL + "flow", slug],
    () => serves.flowList(slug),
    {
      select: (res) => ({
        results: res?.data,
      }),
      onSuccess: (res) => {
        // {console.log("atributer", active)}
        const mediaItems =
          res?.results?.media?.map((v: any) => {
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
                    width="100%"
                    height="400px"
                    controls
                  ></video>
                ),
              };
            }
          }) || [];
        setImages(mediaItems);
        setActive(res?.results?.colors?.[0]?.id);
      },
      onError: (error: any) => {
        // Handle specific error codes
        if (error.response?.status === 404) {
          // router.push('/404'); // Redirect to a custom 404 page
        } else {
          // Handle other errors as needed
        }
      },
      enabled: !!slug,
    }
  );

  return {
    flow: slug,
    slug: results?.results?.id,
    data: results?.results || [],
    images,
    active,
    active1,
    isLoading,
    attributes: results?.results?.attributes,
    setActive,
    setActive1,
  };
};
