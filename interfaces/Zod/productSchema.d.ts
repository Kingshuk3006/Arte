import { z } from 'zod'

export default productSchema = z.object({
    productId: z.string().length(20).optional(),
    description: z.string().min(10),
    yearOfCompletion: z.string().length(4),
    certificateOfAuthenticity: z.string().optional(),
    price: z.number().min(50).max(9999999),
    customerReview: z.array(z.string()).optional(),
    rating: z.number().min(0).optional(),
    timestamp: z.number().min(Date.now() - 1),
    productAttributes: z.object({
        artworkType: z.string().min(2),
        artistName: z.string().min(2),
        title: z.string().min(2),
        medium: z.string(),
        dimensions: z.object({
            height: z.number().optional(),
            width: z.number().optional(),
            deepth: z.number().optional(),
        })
    }),
    discount: z.number().max(99).min(1).optional(),
})

