import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import productSchema from "../../interfaces/Zod/productSchema";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";
import IUser from "../../interfaces/userInterface";


import { z } from 'zod'

const userSchema = z.object({
    userId: z.string().optional(),
    name: z.string().optional(),
    image: z.string().optional(),
    email: z.string().optional(),
    role: z
        .union([z.literal("buyer"), z.literal("buyer-seller")])
        .default("buyer").optional(),
    //address data
    phoneNumber: z
        .string()
        .length(10)
        .refine((value) => /^\d+$/.test(value), {
            message: "Value must contain only numeric characters",
        }).optional(),
    preferences: z.string().optional(),
    shippingAddress: z
        .object({
            address: z.string().min(3),
            landmark: z.string(),
            pincode: z
                .string()
                .length(6)
                .refine((value) => /^\d+$/.test(value), {
                    message: "Value must contain only numeric characters",
                }),
            city: z.string().max(20),
            state: z.string().max(20),
        })
        .optional(),
    created: z.number().optional()
});


export default async function updateUroduct(user: IUser) {
    try {
        const res = userSchema.safeParse(user);
        if (!res.success) {
            console.log(res.error.errors);
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }
        await updateDoc(doc(db, "users"), {
            ...user,
        });
        console.log("user added successfully");
        return {
            success: true,
            message: 'user updated successfully'
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "there was an error",
        };
    }
}
