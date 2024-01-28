/*
things that will happen when  order placed
buyer end: 
    1. place order, order added in a new collction of the user doc
    2. order have all the details
seller end: 
    1. inventory update
    2. change order state -> process, confirm, cancel
 */

import { addDoc, collection } from "firebase/firestore";
import { IOrder } from "../../interfaces/userInterface";
import { db } from "../../database/firebase";
import { z } from "zod";
import checkUserExist from "../auth/checkUserExist";

const orderSchema = z.object({
    productId: z.array(z.string()),
    userId: z.string(),
    date: z.number().min(Date.now() - 1),
    status: z.string(),
    orderTotal: z.number().nonnegative(),
    orderNotes: z.string().optional(),
    estimatedShippingDays: z.number().max(100).optional(),
})

export default async function createOrder(order: IOrder) {
    try {
        const res = orderSchema.safeParse(order)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }

        const userExist = await checkUserExist(order?.userId)
        if (userExist.success === false && userExist.message === 'user doesnot exist') {
            return {
                success: false,
                message: 'Invalid userId'
            }
        }

        await addDoc(collection(db, 'users', order?.userId as string, 'orders'), order as IOrder)
        console.log('order placed successfully')
        return {
            success: true,
            message: 'order placed successfully'
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'there was an error'
        }
    }
}