import React, { useState } from "react";
import PageLayout from "../../../components/Layout/pageLayout";
import { useRouter } from "next/router";
import {
    Checkbox,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";



const signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const [name, setName] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const router = useRouter();
    return (
        <PageLayout>
            <div className="md:grid-cols-2 grid grid-cols-1 justify-items-center place-items-center gap-8 min-h-[90vh]">
                <img src="/images/artist.png" />
                <div className="w-full">
                    <div className="bg-black/50 py-8 px-4 rounded-xl shadow-xl shadow-[#1c1c1c]">
                        {
                            isLogin ? <><div className="w-4/5 mx-auto 2xl:gap-8 xl:gap-5 lg:gap-4 gap-2 flex flex-col justify-center ">
                                <h1 className="font-DMSerif text-2xl text-center">Login</h1>
                                <h2 className="text-center">
                                    Enter your Email and password to continue
                                </h2>
                                <Input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    focusBorderColor="#F9DBB3"
                                />
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                        focusBorderColor="#F9DBB3"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        {show ? (
                                            <MdOutlineRemoveRedEye onClick={handleClick} />
                                        ) : (
                                            <FaRegEyeSlash onClick={handleClick} />
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <p className="text-right cursor-pointer ">Forgot Password</p>
                                <button
                                    className="btn-brown w-full"
                                    disabled={email === "" || password === "" || name === ""}
                                >
                                    Submit
                                </button>

                                <hr />
                                <div className="flex justify-between items-center gap-4">
                                    <button className="border-2 py-2 w-full flex justify-center px-4 hover:border-main_tone_primary rounded-md"><FcGoogle size={35} /></button>
                                    <button className="border-2 py-2 w-full flex justify-center px-4 hover:border-main_tone_primary rounded-md"><ImFacebook2 size={35} color="#316FF6" /></button>
                                </div>
                                <hr />
                                <p className="text-center">Don't have an account? <button className="text-main_tone_primary cursor-pointer" onClick={() => setIsLogin(false)}>Signup</button></p>
                            </div></> : <><div className="w-4/5 mx-auto 2xl:gap-8 xl:gap-5 lg:gap-4 gap-2 flex flex-col justify-center ">
                                <h1 className="font-DMSerif text-2xl text-center">SignUp</h1>
                                <h2 className="text-center">
                                    Enter your Name, Email and password to continue
                                </h2>
                                <Input
                                    type="name"
                                    value={name}
                                    placeholder="Enter your Name"
                                    onChange={(e: any) => setName(e.target.value)}
                                    focusBorderColor="#F9DBB3"
                                />
                                <Input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    focusBorderColor="#F9DBB3"
                                />
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                        focusBorderColor="#F9DBB3"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        {show ? (
                                            <MdOutlineRemoveRedEye onClick={handleClick} />
                                        ) : (
                                            <FaRegEyeSlash onClick={handleClick} />
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <button
                                    className="btn-brown w-full"
                                    disabled={email === "" || password === "" || name === ""}
                                >
                                    Submit
                                </button>
                                <hr />
                                <div className="flex justify-between items-center gap-4">
                                    <button className="border-2 py-2 w-full flex justify-center px-4 hover:border-main_tone_primary rounded-md"><FcGoogle size={35} /></button>
                                    <button className="border-2 py-2 w-full flex justify-center px-4 hover:border-main_tone_primary rounded-md"><ImFacebook2 size={35} color="#316FF6" /></button>
                                </div>
                                <hr />
                                <p className="text-center">Already have an account? <button className="text-main_tone_primary cursor-pointer" onClick={() => setIsLogin(true)}>Login</button></p>
                            </div></>
                        }

                    </div>
                </div>
            </div>
            <img
                src="/images/effect.png"
                className="absolute bottom-0 left-0 -z-30"
            />
        </PageLayout>
    );
};

export default signin;
