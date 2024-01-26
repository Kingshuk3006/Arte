import React, { useState } from 'react'
import PageLayout from '../../../components/Layout/pageLayout'
import { useRouter } from 'next/router';
import { Checkbox, Input } from '@chakra-ui/react';
import Link from 'next/link';

const signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const [name, setName] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();
    return (
        <PageLayout>
            <div className="md:grid-cols-2 grid grid-cols-1 justify-items-center place-items-center gap-8 h-[90vh]">
                <img src="/images/artist.png" />
                <div className='w-full'>
                    <div className='bg-black/50 py-8 px-4 rounded-xl shadow-xl shadow-[#1c1c1c]'>
                        <div className='w-3/5 mx-auto gap-8 flex flex-col'>
                            <h1>Enter your Name, username and password</h1>

                            <Input
                                type="name"
                                value={name}
                                placeholder='Enter your Name'
                                onChange={(e: any) => setName(e.target.value)}
                            />
                            <Input
                                type="email"
                                value={email}
                                placeholder='Enter your Name'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                value={password}
                                placeholder='Enter your Name'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div >
                                <p onClick={() => setIsLogin(true)}>Login</p>
                                <Link href={"/"}>Forgot Password?</Link>
                            </div>
                            <div>
                                <Checkbox
                                    checked={isRemember}
                                    onChange={(e: any) => setIsRemember(e.checked)}
                                ></Checkbox>
                                <label>Remember Me</label>
                            </div>
                            <button
                                className='btn-brown w-fit'
                                disabled={email === "" || password === "" || name === ""}
                            >Submit</button>
                        </div>

                    </div>


                </div>
            </div>
            <img src="/images/effect.png" className='absolute bottom-0 left-0 -z-30' />
        </PageLayout>
    )
}

export default signin