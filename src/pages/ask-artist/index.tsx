import React from "react";
import PageLayout from "../../../components/Layout/pageLayout";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { GoSignOut } from "react-icons/go";
import { PiFlagBanner } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import artMediums from "../../../database/artMedium";
import { LuBrush } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";
import AskArtistCard from "../../../components/ask-artist/askArtist.card";
import { RiQuestionAnswerLine } from "react-icons/ri";


const index = () => {
    return (
        <PageLayout>
            <div className="grid grid-cols-5 gap-8">
                <div className="lg:col-span-1 md:col-span-2 hidden md:block">
                    <h3 className="mb-4 lg:text-xl text-lg">Filter</h3>
                    <Accordion allowToggle>
                        <AccordionItem border={"none"}>
                            <AccordionButton paddingLeft={0}>
                                <Flex gap={2} alignItems={"center"} justifyContent={"start"}>
                                    <AccordionIcon as={IoIosArrowForward}>
                                    </AccordionIcon>
                                    <span className="font-medium flex justify-start items-center gap-2 ">Medium <LuBrush /></span>
                                </Flex>
                            </AccordionButton>

                            <AccordionPanel pb={4}>
                                {
                                    artMediums.map((med, i) => (
                                        <Checkbox mb={2} colorScheme='#F9DBB3' key={i} width={'100%'}>
                                            {med}
                                        </Checkbox>
                                    ))
                                }
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={"none"}>
                            <AccordionButton paddingLeft={0}>
                                <Flex gap={2} alignItems={"center"} justifyContent={"start"}>
                                    <AccordionIcon as={IoIosArrowForward}>
                                    </AccordionIcon>
                                    <span className="font-medium flex justify-normal items-center gap-2">Timeline <FaRegClock />
                                    </span>
                                </Flex>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    5 days
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    15 days
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    30 days
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    45 days
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    60 days
                                </Checkbox>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={"none"}>
                            <AccordionButton paddingLeft={0}>
                                <Flex gap={2} alignItems={"center"} justifyContent={"start"}>
                                    <AccordionIcon as={IoIosArrowForward}>
                                    </AccordionIcon>
                                    <span className="font-medium flex justify-normal items-center gap-2">Size <RxDimensions /></span>
                                </Flex>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    small
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    medium
                                </Checkbox>
                                <Checkbox mb={2} colorScheme='#F9DBB3' width={'100%'}>
                                    large
                                </Checkbox>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="lg:col-span-4 md:col-span-3 col-span-5">
                    <Flex
                        justify={"space-between"}
                        align={"start"}
                        gap={10}
                        mb={4}

                    >
                        <h1 className="heading-secondary w-fit">All Requests</h1>
                        <div className="flex justify-end items-center gap-4">
                            <button className="btn-brown w-full">
                                Create New
                            </button>
                            <Menu>
                                <MenuButton>
                                    <BsThreeDotsVertical size={25} cursor={"pointer"} color="white" />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem color={"black"}>
                                        <Flex gap={2} alignItems={"center"} justifyContent={"start"} >
                                            <PiFlagBanner size={20} />
                                            <span className="font-medium">Your Requests</span>
                                        </Flex>
                                    </MenuItem>
                                    <MenuItem color={"black"}>
                                        <Flex gap={2} alignItems={"center"} justifyContent={"start"} >
                                            <RiQuestionAnswerLine size={20} />
                                            <span className="font-medium">Unanswered</span>
                                        </Flex>
                                    </MenuItem>

                                </MenuList>
                            </Menu>
                        </div>
                    </Flex>
                    <div className="flex flex-col gap-4">
                        <AskArtistCard />
                        <AskArtistCard />
                        <AskArtistCard />
                        <AskArtistCard />
                        <AskArtistCard />
                        <AskArtistCard />
                    </div>
                </div>

            </div>
        </PageLayout>
    );
};

export default index;
