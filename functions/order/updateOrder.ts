
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { IOrder } from "../../interfaces/userInterface";
import { db } from "../../database/firebase";
import { z } from "zod";

const orderSchema = z.object({
    productId: z.array(z.string()).optional(),
    userId: z.string().optional(),
    date: z.number().min(Date.now() - 1).optional(),
    status: z.string().optional(),
    orderTotal: z.number().nonnegative().optional(),
    orderNotes: z.string().optional(),
    estimatedShippingDays: z.number().max(100).optional(),
})

export default async function updateOrder(userId: string, order: Partial<IOrder>, orderId: string) {
    try {
        const res = orderSchema.safeParse(order)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }

        await updateDoc(doc(db, 'users', userId as string, 'orders', orderId as string), order as Partial<IOrder>)
        console.log('order updated successfully')
        return {
            success: true,
            message: 'order updated successfully'
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'there was an error'
        }
    }
}