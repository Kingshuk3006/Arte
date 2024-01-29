import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";
import { z } from 'zod'
import checkUserExist from "../auth/checkUserExist";


export default async function removeProductCart(productId: string, userId: string) {
    try {
        const res = z.string().safeParse(productId)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }

        const userExist = await checkUserExist(userId)

        if (!userExist.success) {
            return userExist
        }

        await deleteDoc(doc(db, 'users', userId, 'cart', productId))
        console.log('product removed from cart successfully')
        return {
            success: true,
            message: 'products removed from cart successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}