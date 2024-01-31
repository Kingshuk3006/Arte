import React, { useState } from "react";
import PageLayout from "../../../components/Layout/pageLayout";
import {
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  Stack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  HStack,
  InputGroup,
  InputRightAddon,
  Box,
} from "@chakra-ui/react";
import MarkdownInput from "../../../components/customComponents/MarkdownInput";
import artMediums from "../../../database/artMedium";

const createNewRequest = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    medium: "",
    timeLimit: 0,
    budget: "",
    height: "",
    width: "",
  });
  const [sliderData, setSliderData] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <PageLayout>
      <div className="xl:w-[1280px] mx-auto ">
        <h1 className="heading-primary">Create New Request</h1>
        <Stack spacing={6}>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Title</FormLabel>
            <Input
              type="text"
              focusBorderColor="#F9DBB3"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title..."
            />
            <FormHelperText>This field is required.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Description</FormLabel>
            <FormHelperText pb={2}>
              Write the description of your art word in less than 350 words
            </FormHelperText>
            <MarkdownInput />
            <FormHelperText>This field is required.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400}>Medium</FormLabel>
            <FormHelperText pb={2}>
              Enter preferred medium medium of art work
            </FormHelperText>
            <Select focusBorderColor="#F9DBB3" size="md">
              <option value={"Not Mentioned"}>Not mentioned</option>
              {artMediums.map((med, i) => (
                <option className="option-select" key={i}>
                  {med}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Time Limit</FormLabel>
            <FormHelperText pb={2}>
              Enter your time limit for the art work ( in days)
            </FormHelperText>
            <Slider
              aria-label="slider-ex-6"
              mt={10}
              onChange={(val) => setSliderData(val)}
            >
              <SliderMark
                value={sliderData}
                textAlign="center"
                bg="#F9DBB3"
                color="black"
                mt="-10"
                p={1}
                rounded={"md"}
              >
                {sliderData} Days
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Budget</FormLabel>
            <FormHelperText pb={2}>Write the Estimated budget</FormHelperText>
            <Input
              type="number"
              focusBorderColor="#F9DBB3"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Budget..."
            />
            <FormHelperText>This field is required.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Dimensions</FormLabel>
            <FormHelperText pb={2}>
              Enter the estimated dimension of artwork...( in cm )
            </FormHelperText>
            <HStack spacing={6}>
              <div className="w-full">
                <FormLabel fontWeight={400}>Height</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    focusBorderColor="#F9DBB3"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter Height..."
                  />
                  <InputRightAddon bg={"#F9DBB3"} textColor={"black"}>
                    cm
                  </InputRightAddon>
                </InputGroup>
              </div>
              <div className="w-full">
                <FormLabel fontWeight={400}>Width</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    focusBorderColor="#F9DBB3"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter Width..."
                  />
                  <InputRightAddon bg={"#F9DBB3"} textColor={"black"}>
                    cm
                  </InputRightAddon>
                </InputGroup>
              </div>
            </HStack>
            <FormHelperText pb={2}>This field is required</FormHelperText>
          </FormControl>
          <Box textAlign={'right'}>
            <button className="btn-brown w-fit">Create Request</button>
          </Box>
        </Stack>
      </div>
    </PageLayout>
  );
};

export default createNewRequest;
