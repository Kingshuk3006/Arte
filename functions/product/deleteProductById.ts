import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { z } from "zod";

export default async function deleteProduct(productId: string) {
    try {
        const productIdSchema = z.string().length(20);
        const res = productIdSchema.safeParse(productId);
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }
        const productRef = doc(db, "products", productId);
        await deleteDoc(productRef);
        console.log('deleted successfully')

        return {
            success: true,
            message: 'product deleted successfully'
        }

    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: 'there was an error'
        }
    }
}
