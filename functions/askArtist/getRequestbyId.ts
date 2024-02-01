import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { z } from "zod";
import IAskArtist from "../../interfaces/askArtistInterface";

export default async function getRequestbyId(requestId: string) {
    try {
        const requestIdSchema = z.string()
        const res = requestIdSchema.safeParse(requestId);
        if (!res?.success) {
            console.log(res.error)
            return {
                success: false,
                message: res.error.errors[0].message
            }
        }
        const requestRef = doc(db, "ask-artist", requestId);
        const requestSnapshot = await getDoc(requestRef);
        if (requestSnapshot.exists()) {
            return {
                success: true,
                message: 'request fetched successfully',
                data: requestSnapshot.data() as IAskArtist
            }
        } else {
            console.log("no request found!");
            return {
                success: false,
                message: 'no request found'
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
