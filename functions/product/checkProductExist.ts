import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/firebase";


export default async function checkProductExist(productId: string) {
    try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            return {
                success: true,
                message: 'product already exist'
            }
        } else {
            return {
                success: false,
                message: 'product doesnot exist'
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