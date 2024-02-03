import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IDrawRequest } from "../../interfaces/askArtistInterface";

const DrawRequestCard = ({request}: IDrawRequest) => {
  return (
    <div className="border rounded-md border-main_tone_primary/80 flex flex-col gap-3 p-4 bg-black_primary/90">
      <Flex align={"center"} gap={2}>
        <Avatar name="K S" size={'sm'}/>
        <b>Rajdeep Sengupta</b>
        <span className="text-white/80 text-sm"> on 21st Jan, 2023</span>
      </Flex>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        dignissimos odio pariatur tempore enim natus, ipsa placeat esse nostrum
        nesciunt quasi nulla. Ex sit inventore in perferendis fugit tenetur
        doloremque!
      </p>
      <button className="flex items-center gap-2 text-sm btn-brown w-fit text-nowrap">
        <MdOutlineMarkEmailRead size={23} />
        Send Confirmation
      </button>
    </div>
  );
};

export default DrawRequestCard;
