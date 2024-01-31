import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";
import { FaRegClock, FaRegDotCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuBrush } from "react-icons/lu";
import { RxDimensions } from "react-icons/rx";

const AskArtistCard = () => {
    return (
        <div className="border border-main_tone_primary/50 p-4 rounded-lg">
            <div className="flex justify-start items-start gap-4">
                <Avatar name="John Doe" />
                <section className="w-full flex flex-col gap-2">
                    <Flex justify={"space-between"} align={"center"} width={"100%"}>
                        <h2 className="text-xl hover:underline-offset-2 hover:underline hover:cursor-pointer hover:text-main_tone_primary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                        </h2>
                        <FiExternalLink
                            size={22}
                            cursor={"pointer"}
                            className="hover:text-main_tone_primary"
                        />
                    </Flex>
                    <Flex align={"center"} justify={"start"} gap={3}>
                        <Flex
                            justify={"start"}
                            align={"center"}
                            gap={2}
                            flexWrap={"nowrap"}
                            className="tag-primary text-sap_green border-sap_green "
                        >
                            <LuBrush />
                            <span>Oil Color</span>
                        </Flex>
                        <Flex
                            justify={"start"}
                            align={"center"}
                            gap={2}
                            flexWrap={"nowrap"}
                            className="tag-primary text-yellow border-yellow"
                        >
                            <FaRegClock />
                            <span>10 days</span>
                        </Flex>
                        <Flex
                            justify={"start"}
                            align={"center"}
                            gap={2}
                            flexWrap={"nowrap"}
                            className="tag-primary text-cyan border-cyan"
                        >
                            <RxDimensions />
                            <span>medium</span>
                        </Flex>
                    </Flex>

                    <Flex
                        justify={"start"}
                        align={"center"}
                        className="text-white/80"
                        gap={4}
                    >
                        <p>
                            <span className="underline decoration-white/80 mr-2 underline-offset-4 cursor-pointer">
                                Kingshuk Sarkar
                            </span>{" "}
                            asked 20 minutes ago
                        </p>
                        <Flex justify={"start"} align={"center"} gap={2}>
                            <FaRegDotCircle /> Unanswered
                        </Flex>
                    </Flex>
                </section>
            </div>
        </div>
    );
};

export default AskArtistCard;
