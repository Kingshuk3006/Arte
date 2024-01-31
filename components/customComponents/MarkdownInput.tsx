import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Textarea,
    HStack,
    Box,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownInput = () => {
    const [markdownText, setMarkdownText] = useState<string>("");
    const [boldToggle, setBoldToggle] = useState<boolean>(false);
    const [italicToggle, setItalicToggle] = useState<boolean>(false);

    const handleBoldClick = () => {
        setMarkdownText(markdownText + "**");
    };

    const handleBoldToggle = () => {
        setBoldToggle(!boldToggle);
    };

    const handleItalicClick = () => {
        setMarkdownText(markdownText + "_");
    };

    const handleItalicToggle = () => {
        setItalicToggle(!italicToggle);
    };

    const handleTextareaChange = (e: any) => {
        const newText = e.target.value.replace(/\n/g, "  \n");
        setMarkdownText(newText);
    };

    return (
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab
                    _selected={{ color: "#F9DBB3", border: "1px solid white" }}
                    _active={{ border: "1px solid white" }}
                >
                    Write
                </Tab>
                <Tab
                    _selected={{ color: "#F9DBB3", border: "1px solid white" }}
                    _active={{ border: "1px solid white" }}
                >
                    Preview
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel p={0}>
                    <HStack
                        align={"center"}
                        justify={"end"}
                        spacing={3}
                        border={"1px"}
                        borderBottom={0}
                        px={2}
                        py={1}
                        rounded={"md"}
                        roundedBottom={0}
                    >
                        <Box
                            className={`btn-secondary px-2 py-1 ${boldToggle && 'bg-main_tone_primary text-black'}`}
                            onClick={() => {
                                handleBoldToggle();
                                handleBoldClick();
                            }}
                        >
                            {" "}
                            <b>B</b>
                        </Box>
                        <Box
                            className={`btn-secondary px-3 py-1 ${italicToggle && 'bg-main_tone_primary text-black'}`}
                            onClick={() => {
                                handleItalicToggle()
                                handleItalicClick()
                            }}
                        >
                            {" "}
                            <b>
                                <i>I</i>
                            </b>
                        </Box>
                    </HStack>
                    <Textarea
                        value={markdownText}
                        focusBorderColor="#F9DBB3"
                        onChange={handleTextareaChange}
                        placeholder="Write something..."
                        rows={6}
                        roundedTop={0}
                    />
                </TabPanel>
                <TabPanel p={0}>
                    <div className="border rounded-md px-4 py-4 min-h-40">
                        <ReactMarkdown>{markdownText}</ReactMarkdown>
                    </div>

                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default MarkdownInput;
