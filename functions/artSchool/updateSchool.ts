import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { z } from 'zod'
import IArtSchool from "../../interfaces/artSchoolInterface";

const schoolSchema = z.object({
    name: z.string().min(2).max(50),
    instructorName: z.string().max(50).min(1),
    instructorCertificate: z.string().refine((value) => {
        try {
            new URL(value);
            return true;
        } catch (error) {
            return false;
        }
    }, {
        message: 'Invalid URL format'
    }).optional(),
    phoneNumber: z.string().length(10).refine(value => {
        const numericPattern = /^\d+$/;
        return numericPattern.test(value);
    }, {
        message: 'Phone number must contain only numeric characters'
    }),
    emailId: z.string().email().optional(),
    description: z.string().max(250).min(10),
    location: z.object({
        address: z.string(),
        state: z.string().max(50),
        landmark: z.string().max(50),
        pincode: z
            .string()
            .length(6)
            .refine((value) => /^\d+$/.test(value), {
                message: "Value must contain only numeric characters",
            }),
        city: z.string().max(30),
        longitude: z.number().optional(),
        latitude: z.number().optional(),
        gmapLink: z.string().refine(value => {
            const googleMapsPattern1 = /^https?:\/\/(www\.)?google\.com\/maps\/.*$/;
            const googleMapsPattern2 = /^https:\/\/maps\.app\.goo\.gl\/.*/;
            if (googleMapsPattern1.test(value) || googleMapsPattern2.test(value)) {
                return true;
            } else {
                return false;
            }
        }, {
            message: 'Invalid Google Maps link format'
        })
    })
})

export default async function updateSchool(schoolId: string, school: IArtSchool) {
    console.log(school);

    try {
        const res = schoolSchema.safeParse(school)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }

        await updateDoc(doc(db, 'art-schools', schoolId), {
            ...school
        })
        console.log('school updated successfully')
        return {
            success: true,
            message: 'school updated successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}