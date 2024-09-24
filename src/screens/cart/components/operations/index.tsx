import React from "react";
import { ProductCount } from "./style";
import { Button } from "@mantine/core";
import { DecrementIcon } from "@/assets/icons/decrement";
import { IncrementIcon } from "@/assets/icons/increment";
import useStore from "@/store";

interface ICount {
  count: number;
  id: string | number;
}

export const Operations = ({ count, id }: ICount) => {
  const { increment, decrement } = useStore((state) => state);

  return (
    <ProductCount>
      <Button onClick={() => decrement(id)} disabled={count === 1}>
        {/* <DecrementIcon /> */}
        <span>-</span>
      </Button>
      <span>{count}</span>
      <Button onClick={() => increment(id)}>
        {/* <IncrementIcon /> */}
        <span>+</span>
      </Button>
    </ProductCount>
  );
};
