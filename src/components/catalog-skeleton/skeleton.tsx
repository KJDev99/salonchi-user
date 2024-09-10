import React from "react";
import { Skeleton } from "@mantine/core";
import { Card } from "../catalog/style";
import { SkeletonWrapper } from "./style";
import { useViewportSize } from "@mantine/hooks";

export const CatalogSkeleton = () => {
  const { width } = useViewportSize();

  return (
    <SkeletonWrapper>
      {Array.from({ length: 10 }).map((_, i: number) => {
        return (
          <Card key={i}>
            <Skeleton
              width={width > 576 ? 130 : 70}
              height={width > 576 ? 130 : 70}
              style={
                width > 576
                  ? { borderRadius: "20px" }
                  : { borderRadius: "10px" }
              }
            />
          </Card>
        );
      })}
    </SkeletonWrapper>
  );
};
