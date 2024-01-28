import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/firebase";


export default async function checkUserExist(userId: string) {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return {
                success: true,
                message: 'user already exists'
            }
        } else {
            return {
                success: false,
                message: 'user doesnot exist'
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}