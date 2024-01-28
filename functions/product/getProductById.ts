import { doc, getDoc } from "firebase/firestore";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";
import { z } from "zod";

export default async function getProductById(productId: string) {
    try {
        const productIdSchema = z.string().length(20);
        const res = productIdSchema.safeParse(productId);
        if (!res?.success) {
            console.log(res.error)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }
        const productRef = doc(db, "products", productId);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
            return {
                success: true,
                message: 'products fetched successfully',
                product: productSnapshot.data() as IProduct
            }
        } else {
            console.log("no product found!");
            return {
                success: false,
                message: 'no product found'
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
