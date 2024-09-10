import { useCategory } from "@/hooks/useCategory";
import { Accordion } from "@mantine/core";
import { Wrapper } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const MobileNav = ({ close }: { close: () => void }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { category, subCategory, handleSubCategory } = useCategory();

  return (
    <Wrapper>
      <Accordion defaultValue="" className="accordion-provider">
        {category?.map((v: any) => {
          return (
            <Accordion.Item
              value={String(v?.id)}
              key={v?.id}
              onClick={() => handleSubCategory(v?.id)}
            >
              <Accordion.Control>
                {router.locale === "uz" ? v?.name_uz : v?.name_ru}
              </Accordion.Control>
              <Accordion.Panel>
                <ul className="list">
                  {subCategory?.map((el: any) => {
                    return (
                      <li key={el.id}>
                        <Link href={`/categories/${el.id}`} onClick={close}>
                          {router.locale === "uz" ? el?.name_uz : el?.name_ru}
                        </Link>
                      </li>
                    );
                  })}
                  {subCategory?.length === 0 && (
                    <p className="empty-text">
                      {t("information is not available")}
                    </p>
                  )}
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Wrapper>
  );
};
