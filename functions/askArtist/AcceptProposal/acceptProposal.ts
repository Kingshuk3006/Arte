import { doc, updateDoc } from "firebase/firestore";
import { IDrawProposal } from "../../../interfaces/askArtistInterface";
import { db } from "../../../database/firebase";
import { z } from "zod";

export default async function acceptProposal(requestId: string, proposal: IDrawProposal) {
    try {
        const stringSchema = z.string();
        const res = stringSchema.safeParse(requestId)
        if (!res.success) {
            console.log(res.error.errors)
            return {
                success: false,
                message: res.error.errors[0].message || 'There was an type error'
            }
        }
        await updateDoc(doc(db, 'ask-artist', requestId), {
            ...proposal,
            accepted: true,
            finalPrice: proposal.offerPrice || proposal.budget
        })

        return {
            success: true,
            message: 'Proposal Accepted!'
        }
    } catch (error) {
        console.log(error)
    }
}