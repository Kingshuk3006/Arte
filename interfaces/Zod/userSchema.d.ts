import { z } from 'zod'

const userSchema = z.object({
    userId: z.string().optional(),
    name: z.string(),
    image: z.string(),
    email: z.string(),
    role: z
        .union([z.literal("buyer"), z.literal("buyer-seller")])
        .default("buyer"),
    //address data
    phoneNumber: z
        .string()
        .length(10)
        .refine((value) => /^\d+$/.test(value), {
            message: "Value must contain only numeric characters",
        }),
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
    cart: z.array(
        z.object({
            products: z.array(z.string()),
            cartExpiry: z.number(),
            timestamp: z.number()
        })
    ).optional(),
    orderHistory: z.array(z.object({
        orderId: z.string().length(20),
        productId: z.array(z.string()),
        date: z.string(),
        orderTotal: z.number(),
        orderNotes: z.string().optional(),
        status: z.union([z.literal("pending"), z.literal("Processing"), z.literal("Confirmed"), z.literal("Shipped"), z.literal("Out for Delivery"), z.literal("Processing"), z.literal("Delivered"), z.literal("Cancelled"), z.literal("Refunded"), z.literal("Returned"), z.literal("On Hold"), z.literal("Completed")])
    })).optional(),
    mailHistory: z.array(z.object({
        type: z.union([z.literal("requesting"), z.literal("accepting")]),
        timestamp: z.number(),
        title: z.string(),
        description: z.string(),
    })).optional(),
    authCredentials: z.array(z.object({
        lastLoginTimestamp: z.number(),
        hashedPassword: z.string(),
        expirationTimestamp: z.number().optional(),
        sessionToken: z.string().optional(),
    })).optional(),
    created: z.number()
});


export default userSchema