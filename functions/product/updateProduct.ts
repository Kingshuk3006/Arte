import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import productSchema from "../../interfaces/Zod/productSchema";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";

export default async function updateProduct(product: IProduct) {
  try {
    const res = productSchema.safeParse(product);
    if (!res.success) {
      console.log(res.error.errors);
      return {
        success: false,
        message: res.error.errors[0].message
      }
    }
    await updateDoc(doc(db, "products"), {
      ...product,
    });
    console.log("product added successfully");
    return {
      success: true,
      message: 'product updated successfully'
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "there was an error",
    };
  }
}
