import { useState } from "react";
import { Box, RangeSlider } from "@mantine/core";
import { Input, InputGroup, Label, PricePanel } from "./style";

export const Slider = ({ setSlider }: any) => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 100000]);
  const [inputFrom, setInputFrom] = useState(sliderValue[0]);
  const [inputTo, setInputTo] = useState(sliderValue[1]);

  // Handle input changes
  const handleInputFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (!isNaN(value)) {
      value = Math.max(0, value); // Prevent negative values
      setInputFrom(value);
      setSliderValue([value, sliderValue[1]]); // Update the slider state
      setSlider([value, sliderValue[1]]); // Trigger backend request
    }
  };

  const handleInputToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (!isNaN(value)) {
      value = Math.min(100000, value); // Prevent values above the max
      setInputTo(value);
      setSliderValue([sliderValue[0], value]); // Update the slider state
      setSlider([sliderValue[0], value]); // Trigger backend request
    }
  };

  // Handle slider changes
  const handleSliderChange = (value: [number, number]) => {
    setSliderValue(value);
    setInputFrom(value[0]);
    setInputTo(value[1]);
  };

  // Handle slider change end to trigger the backend request
  const handleSliderChangeEnd = (value: [number, number]) => {
    setSlider(value); // Trigger backend request when slider change ends
  };

  return (
    <Box mx="auto">
      <PricePanel>
        <p>Narx</p>
        <InputGroup>
          <div className="from">
            <Label>Dan</Label>
            <Input
              type="number"
              value={inputFrom === 0 ? "" : inputFrom} // Show empty string if it's 0 to prevent leading 0s
              onChange={handleInputFromChange}
              placeholder="Dan"
            />
          </div>
          <div className="to">
            <Label>Gacha</Label>
            <Input
              type="number"
              value={inputTo === 0 ? "" : inputTo} // Show empty string if it's 0 to prevent leading 0s
              onChange={handleInputToChange}
              placeholder="Gacha"
            />
          </div>
        </InputGroup>
      </PricePanel>
      <RangeSlider
        thumbSize={14}
        mt="xl"
        color="red"
        min={0}
        max={100000}
        value={sliderValue}
        onChange={handleSliderChange} // Update state when sliding
        onChangeEnd={handleSliderChangeEnd} // Trigger request when sliding ends
        label={null}
      />
    </Box>
  );
};
