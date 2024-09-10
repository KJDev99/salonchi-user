import { Box, RangeSlider } from '@mantine/core';
import { Input, InputGroup, Label, PricePanel } from './style';

export const Slider = ({ setSlider }: any) => {
  return (
    <Box mx="auto">
      <PricePanel>
        <p>Narx</p>
        <InputGroup>
          <div className="from">
            <Label>Dan</Label>
            <Input type="number" placeholder="Dan" />
          </div>
          <div className="to">
            <Label>Gacha</Label>
            <Input type="number" placeholder="Gacha" />
          </div>
        </InputGroup>
      </PricePanel>
      <RangeSlider
        thumbSize={14}
        mt="xl"
        color="red"
        min={10000}
        max={1000000}
        onChangeEnd={(e) => setSlider(e)}
      />
    </Box>
  );
};
