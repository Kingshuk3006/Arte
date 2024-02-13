import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import checkUserwithCred from "../../../../functions/auth/checkUserwithCred";
import IUser from "../../../../interfaces/userInterface";
import checkUserExist from "../../../../functions/auth/checkUserExist";
import { Session } from 'next-auth';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize: async (credentials) => {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                //do verification from database
                const res = await checkUserwithCred({ email, password })
                if (res?.success) {
                    const user = {
                        id: res?.user?.id as string,
                        name: res?.user?.name,
                        email: res?.user?.email
                    }
                    return { ...user }
                } else {
                    throw new Error(res?.message)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token, user }) {
            const res = await checkUserExist(session?.user?.email as string);
            if (res.success) {
                session  = {
                    ...session,
                    user: {
                        ...session.user,
                        id: res.user.id as string
                    } as any
                }
                return session
            } else {
                return session
            }
        }
    },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin",
    },
})