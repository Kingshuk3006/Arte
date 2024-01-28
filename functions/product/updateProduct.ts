import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";
import { z } from "zod";

const productSchema = z.object({
  productId: z.string().length(20).optional(),
  description: z.string().min(10).optional(),
  yearOfCompletion: z.string().length(4).optional(),
  certificateOfAuthenticity: z.string().optional(),
  price: z.number().min(50).max(9999999).optional(),
  customerReview: z.array(z.string()).optional(),
  rating: z.number().min(0).optional(),
  timestamp: z.number().min(Date.now() - 1).optional(),
  productAttributes: z.object({
      artworkType: z.string().min(2),
      artistName: z.string().min(2),
      title: z.string().min(2),
      medium: z.string().optional(),
      dimensions: z.object({
          height: z.number().optional(),
          width: z.number().optional(),
          deepth: z.number().optional(),
      }).optional()
  }).optional(),
  discount: z.number().max(99).min(1).optional(),
})


export default async function updateProduct(product: Partial<IProduct>, productId: string) {
  try {
    const res = productSchema.safeParse(product);
    if (!res.success) {
      console.log(res.error.errors);
      return {
        success: false,
        message: res.error.errors[0].message
      }
    }
    await updateDoc(doc(db, "products", productId), {
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
