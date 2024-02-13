import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../database/firebase";
import IUser from "../../interfaces/userInterface";


export default async function checkUserExist(email: string) {
    try {
        const userRef = collection(db, 'users');
        const q = query(userRef, where("email", '==', email))
        const userSnapShot = await getDocs(q)
        let user: any[] = []
        userSnapShot.forEach(doc => {
            user.push({ ...doc.data(), id: doc.id })
        })
        if (userSnapShot?.size > 0) {
            return {
                success: true,
                message: 'user already exist',
                user: user[0]
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