import React, { useEffect, useMemo, useState } from "react";
import PageLayout from "../../../components/Layout/pageLayout";
import {
    Avatar,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    useToast,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { LuBrush } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";
import DrawRequestCard from "../../../components/ask-artist/DrawRequest.card";
import { TbMoneybag } from "react-icons/tb";
import { useRouter } from "next/router";
import getRequestbyId from "../../../functions/askArtist/getRequestbyId";
import IAskArtist, { IDrawRequest } from "../../../interfaces/askArtistInterface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchRequestById } from "@/features/askArtistSlice";
import MarkdownInput from "../../../components/customComponents/MarkdownInput";
import { z } from "zod";
import createDrawRequest from "../../../functions/askArtist/createDrawRequest";
import { formatDate } from "../../../functions/formatDate";

const index = () => {
    const router = useRouter();
    const toast = useToast()
    const requestId = router.query.askId as string;
    const requestData = useAppSelector((state) => state.askArtist) as {
        data: IAskArtist | undefined | null;
        loading: boolean
        error: null | string
    };
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false)
    const [drawRequest, setDrawRequest] = useState<{
        message: string;
        offerPrice: number;
    }>({
        message: "",
        offerPrice: 0,
    });

    const handleChange = (name: string, value: any) => {
        setDrawRequest({
            ...drawRequest,
            [name]: value,
        });
    };

    const updateMessage = (value: any) => {
        setDrawRequest({
            ...drawRequest,
            message: value,
        })
    }



    const handleSendRequest = async () => {
        setLoading(true)
        const maxOffer = requestData?.data?.budget as number * 1.99
        const inputSchema = z.object({
            offerPrice: z.number().max(maxOffer, { message: 'offer can not double of the budget' }).min(1, { message: 'Too small offer' }),
            message: z.string().max(350, { message: 'Too large message' }).min(10, { message: 'Too small message' }),
        })

        try {
            const parseInputs = inputSchema.safeParse(drawRequest)
            if (!parseInputs.success) {
                setLoading(false)
                return toast({
                    title: parseInputs.error.errors[0].message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right',
                });

            }

            const data: IDrawRequest = {
                ...drawRequest,
                userId: 'aca',
                name: 'Kingshuk Sarkar',
                timestamp: Date.now(),
                email: 'kingsarkar3006@gmail.com'
            }
            const res = await createDrawRequest(data, requestId)
            if (res.success) {
                setLoading(false)
                return toast({
                    title: 'Added Successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
            router.push('/error')
        }
    }

    useEffect(() => {
        dispatch(fetchRequestById(requestId))
    }, [requestId])

    return (
        <PageLayout isLoading={requestData.loading}>
            <div>
                <section className="mb-4">
                    <h1 className="heading-secondary text-wrap">
                        {requestData.data?.title}
                    </h1>
                    <Flex align={"center"} gap={3} mb={8} className={"text-white/80"}>
                        <span className="tag-primary">{requestData.data?.isAnswered ? 'Answered' : 'Unanswered'}</span>
                        <Flex align={"center"}>
                            <div className="hover:underline cursor-pointer mr-2">
                                <Avatar size={"xs"} mr={1} name={requestData.data?.askedBy.name} />
                                <b>{requestData.data?.askedBy.name}</b>
                            </div>
                            <p>
                                asked this request <b>{formatDate(requestData.data?.timestamp as number)} ago</b>
                            </p>
                        </Flex>
                    </Flex>
                    <Stack spacing={3} mb={4} className="text-lg">
                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <LuBrush size={25} />
                                <span>Medium of drawing :</span>
                            </Flex>
                            <span>{requestData?.data?.medium}</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <FaRegClock size={25} />
                                <span>Time Limit :</span>
                            </Flex>
                            <span>{requestData?.data?.timeLimit} days</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <RxDimensions size={25} />
                                <span>Dimension :</span>
                            </Flex>
                            <span>height: {requestData?.data?.dimension.height} width: {requestData?.data?.dimension.width}</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <TbMoneybag size={25} />
                                <span>Budget :</span>
                            </Flex>
                            <span>₹ {requestData?.data?.budget}</span>
                        </Flex>
                    </Stack>
                    <ReactMarkdown>{requestData?.data?.description}</ReactMarkdown>
                </section>
                <section>
                    <h1 className="heading-secondary text-xl my-4">Send Draw Request</h1>
                    <FormControl isRequired>
                        <FormLabel fontWeight={400}>Offer Price</FormLabel>
                        <FormHelperText pb={2}>Write the Offer Price</FormHelperText>
                        <Input
                            type="number"
                            focusBorderColor="#F9DBB3"
                            name="offerPrice"
                            value={drawRequest.offerPrice}
                            onChange={(e: any) =>
                                handleChange(e.target.name, parseInt(e.target.value))
                            }
                            placeholder="Enter offerPrice..."
                        />
                        <FormHelperText>This field is required.</FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight={400}>Request Message</FormLabel>
                        <FormHelperText pb={2}>
                            Write the description of your art word in more than 10 less than
                            350 letters
                        </FormHelperText>
                        <MarkdownInput
                            markdownText={drawRequest.message as string}
                            updateMarkdownText={updateMessage}
                        />
                        <FormHelperText>This field is required.</FormHelperText>
                        <button className="btn-brown mt-4" onClick={handleSendRequest}>Send</button>
                    </FormControl>
                </section>
                <div>
                    <h1 className="heading-secondary text-xl my-4">
                        11 Accepted Request
                    </h1>
                    <Stack spacing={4}>
                        <DrawRequestCard />
                        <DrawRequestCard />
                        <DrawRequestCard />
                        <DrawRequestCard />
                    </Stack>
                </div>
            </div>
        </PageLayout>
    );
};

export default index;
