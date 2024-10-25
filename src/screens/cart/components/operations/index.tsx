import React from "react";
import { ProductCount } from "./style";
import { Button } from "@mantine/core";
import { DecrementIcon } from "@/assets/icons/decrement";
import { IncrementIcon } from "@/assets/icons/increment";
import useStore from "@/store";

interface ICount {
  count: number;
  id: string | number;
  attributes: any;
}

export const Operations = ({ count, id, attributes }: ICount) => {
  const { increment, decrement } = useStore((state) => state);

  return (
    <ProductCount>
      <Button onClick={() => decrement(id, attributes)} disabled={count === 1}>
        {/* <DecrementIcon /> */}
        <span>-</span>
      </Button>
      <span>{count}</span>
      <Button onClick={() => increment(id, attributes)}>
        {/* <IncrementIcon /> */}
        <span>+</span>
      </Button>
    </ProductCount>
  );
};
