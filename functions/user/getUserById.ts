import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { z } from "zod";
import IUser from "../../interfaces/userInterface";

export default async function getUserById(userId: string) {
    try {
        const userIdSchema = z.string()
        const res = userIdSchema.safeParse(userId);
        if (!res?.success) {
            console.log(res.error)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }
        const userRef = doc(db, "users", userId);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            return {
                success: true,
                message: 'user fetched successfully',
                user: userSnapshot.data() as IUser
            }
        } else {
            console.log("no user found!");
            return {
                success: false,
                message: 'no user found'
            }
        }
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: 'there was an error'
        }
    }
}
