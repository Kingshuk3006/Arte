import React from "react";
import PageLayout from "../../../components/Layout/pageLayout";
import { Avatar, Flex, Stack } from "@chakra-ui/react";
import { LuBrush } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";
import DrawRequestCard from "../../../components/ask-artist/DrawRequest.card";
import { TbMoneybag } from "react-icons/tb";

const index = () => {
    return (
        <PageLayout>
            <div>
                <section className="mb-4">
                    <h1 className="heading-secondary text-wrap">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                        molestias distinctio impedit ullam ut eius dolore? Delectus error
                        ducimus molestias.
                    </h1>
                    <Flex align={"center"} gap={3} mb={8} className={"text-white/80"}>
                        <span className="tag-primary">Unanswered</span>
                        <Flex align={"center"}>
                            <div className="hover:underline cursor-pointer mr-2">
                                <Avatar size={"xs"} mr={1} name="kingshuk Sarkar" />
                                <b>Kingshuk Sarkar</b>
                            </div>
                            <p>
                                asked this request <b>30 days ago</b>
                            </p>
                        </Flex>
                    </Flex>
                    <Stack spacing={3} mb={4} className="text-lg">
                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <LuBrush size={25} />
                                <span>Medium of drawing :</span>
                            </Flex>
                            <span>Water Color</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <FaRegClock size={25} />
                                <span>Time Limit :</span>
                            </Flex>
                            <span>10 days</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <RxDimensions size={25} />
                                <span>Dimension :</span>
                            </Flex>
                            <span>height: 30.5 width: 30.5</span>
                        </Flex>

                        <Flex align={"center"} gap={2}>
                            <Flex mr={2} gap={2} align={"center"}>
                                <TbMoneybag size={25} />
                                <span>Budget :</span>
                            </Flex>
                            <span>₹ 4000</span>
                        </Flex>
                    </Stack>
                    <p>
                        Lorem isum dolor sit amet consectetur adipisicing elit. Cumque
                        perspiciatis corrupti sint doloremque minima ea tenetur, iste ad.
                        Voluptate, porro!Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque perspiciatis Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Cumque perspiciatis
                    </p>
                </section>
                <h1 className="heading-secondary text-xl my-4">11 Accepted Request</h1>
                <Stack spacing={4}>
                    <DrawRequestCard />
                    <DrawRequestCard />
                    <DrawRequestCard />
                    <DrawRequestCard />
                </Stack>
            </div>
        </PageLayout>
    );
};

export default index;
