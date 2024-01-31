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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import MarkdownInput from "../../../components/customComponents/MarkdownInput";
import artMediums from "../../../database/artMedium";
import { z } from "zod";
import IAskArtist from "../../../interfaces/askArtistInterface";
import createRequest from "../../../functions/askArtist/createRequest";
import { useRouter } from "next/router";

const createNewRequest = () => {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    budget: number;
    medium: string;
    timeLimit: number;
    dimension: {
      height?: number;
      width?: number;
    };
  }>({
    title: "",
    description: "",
    budget: 0,
    medium: "",
    timeLimit: 0,
    dimension: {
      height: 0,
      width: 0,
    },
  });
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast()
  const router = useRouter()

  const handleChange = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSchema = z.object({
    title: z.string().max(100, { message: 'Too large title' }).min(5, { message: 'Too small title' }),
    description: z.string().max(350, { message: 'Too large description' }).min(10, { message: 'Too small description' }),
    budget: z.number().max(999999, { message: 'Too Big budget' }).min(50, { message: 'Too small budget' }),
    medium: z.string(),
    timeLimit: z.number().max(100, { message: 'Too big time Limit' }).min(1, { message: 'Too small time Limit' }),
    dimension: z.object({
      height: z.number().max(500, { message: 'Too big height' }).min(10, { message: 'Too small height' }),
      width: z.number().max(500, { message: 'Too big Width' }).min(10, { message: 'Too small Width' }),
    }),
  });

  const handleCreateRequest = async () => {
    try {
      setLoading(true)
      const inputHandler = formSchema.safeParse(formData)
      if (!inputHandler.success) {
        setLoading(false)
        return toast({
          title: inputHandler.error.errors[0].message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
      const askArtistData: IAskArtist = {
        ...formData,
        askedBy: {
          userId: 'sdcsdmc',
          name: "Kingshuk Sarkar"
        },
        isAnswered: false,
        timestamp: Date.now()
      }
      const res: { success: boolean, message: string } = await createRequest(askArtistData)
      if (res.success) {
        setFormData({
          title: "",
          description: "",
          budget: 0,
          medium: "",
          timeLimit: 0,
          dimension: {
            height: 0,
            width: 0,
          },
        })
        setLoading(false)
        return toast({
          title: res.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });

      } else {
        setLoading(false)
        return toast({
          title: res.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }

    } catch (error) {
      console.log(error);
      router.push('/error')
    }
  }

  const updateMarkdownText = (value: string) => {
    setFormData({
      ...formData,
      description: value,
    });
  }


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
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Enter title..."
            />
            <FormHelperText>This field is required.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={400}>Description</FormLabel>
            <FormHelperText pb={2}>
              Write the description of your art word in more than 10 less than 350 letters
            </FormHelperText>
            <MarkdownInput markdownText={formData.description as string} updateMarkdownText={updateMarkdownText} />
            <FormHelperText>This field is required.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400}>Medium</FormLabel>
            <FormHelperText pb={2}>
              Enter preferred medium medium of art work
            </FormHelperText>
            <Select
              focusBorderColor="#F9DBB3"
              size="md"
              name="medium"
              onChange={(e: any) => handleChange(e.target.name, e.target.value)}
            >
              <option value={"Not Mentioned"} className="option-select">
                Not mentioned
              </option>
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
              onChange={(val) => handleChange("timeLimit", val)}
              value={formData.timeLimit}
            >
              <SliderMark
                value={formData.timeLimit}
                textAlign="center"
                bg="#F9DBB3"
                color="black"
                mt="-10"
                p={1}
                rounded={"md"}
                className="text-nowrap"
              >
                {formData.timeLimit} Days
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
              name="budget"
              value={formData.budget}
              onChange={(e: any) => handleChange(e.target.name, parseInt(e.target.value))}
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
                    name="dimension"
                    value={formData.dimension.height}
                    onChange={(e: any) =>
                      handleChange(e.target.name, {
                        height: parseInt(e.target.value) as number,
                        width: formData.dimension.width as number,
                      })
                    }
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
                    name="dimension"
                    value={formData.dimension.width}
                    onChange={(e: any) =>
                      handleChange(e.target.name, {
                        height: formData.dimension.height as number,
                        width: parseInt(e.target.value) as number,
                      })
                    }
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
          <Box textAlign={"right"}>
            <button className="btn-brown w-fit" onClick={handleCreateRequest}>Create Request</button>
          </Box>
        </Stack>
        {loading && (
        <Box
          className="absolute inset-0 bg-gray-800 opacity-75 flex justify-center items-center"
          zIndex="overlay"
        >
          <Spinner size="xl" color="#F9DBB3" />
        </Box>
      )}
      </div>
    </PageLayout>
  );
};

export default createNewRequest;
