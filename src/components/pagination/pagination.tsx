import React, { Dispatch, SetStateAction, useState } from "react";
import { Pagination as CustomPagination } from "@mantine/core";
import { PageWrap } from "./style";

interface IPagination {
  productCount: number;
  activePage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  productCount,
  activePage,
  setPage,
}: IPagination) => {
  return (
    <PageWrap>
      <CustomPagination
        value={activePage}
        onChange={setPage}
        total={Math.ceil(productCount / 12)}
        styles={() => ({
          control: {
            "&[data-active]": {
              backgroundImage: "transparent",
              background: "transparent !important",
              color: "var(--main-bg-color)",
              border: "1px solid var(--main-bg-color)",
              fontFamily: "Readex Pro",
            },
            border: "1px solid #626262",
          },
        })}
      />
    </PageWrap>
  );
};
