import { doc, setDoc } from "firebase/firestore";
import IUser from "../../interfaces/userInterface";
import { z } from "zod";
import { db } from "../../database/firebase";
import checkUserExist from "./checkUserExist";

const userSchema = z.object({
    name: z.string(),
    image: z.string(),
    email: z.string().email(),
    role: z
        .union([z.literal("buyer"), z.literal("buyer-seller")])
        .default("buyer"),
    //address data
    authCredentials: z.array(z.object({
        lastLoginTimestamp: z.number(),
        hashedPassword: z.string(),
        expirationTimestamp: z.number().optional(),
        sessionToken: z.string().optional(),
    })).optional(),
    created: z.number()
});

export default async function createNewUser(user: IUser, userId: string) {
    try {
        const res = userSchema.safeParse(user)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message || 'There was an type error'
            }
        }

        const userExists = await checkUserExist(userId)

        if (userExists.success === false && userExists.message === 'there was an error') {
            return userExists
        } else if (userExists.success === false && userExists.message === 'user doesnot exist') {
            const ref = doc(db, "users", userId);
            await setDoc(ref, user);

            console.log('new user added successfully')
            return {
                success: true,
                message: 'user added successfully'
            }
        }

        return {
            success: false,
            message: 'user already exists'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'There was an error'
        }
    }
}
