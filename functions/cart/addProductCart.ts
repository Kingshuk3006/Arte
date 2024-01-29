import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";
import { z } from 'zod'
import checkUserExist from "../auth/checkUserExist";
import checkProductExist from "../product/checkProductExist";

export default async function addProductCart(productId: string, product: IProduct, userId: string) {
    try {
        const res = z.string().safeParse(productId)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }

        const prodExist = await checkProductExist(productId)
        if (!prodExist.success) {
            return prodExist
        }

        const userExist = await checkUserExist(userId)
        if (!userExist.success) {
            return userExist
        }

        await setDoc(doc(db, 'users', userId, 'cart', productId), { ...product })
        console.log('product added to cart successfully')
        return {
            success: true,
            message: 'products added to cart successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}