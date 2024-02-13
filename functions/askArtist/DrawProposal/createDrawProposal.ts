import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../database/firebase"
import { IDrawProposal } from "../../../interfaces/askArtistInterface"

const createDrawRequest = async (data: IDrawProposal, requestId: string) => {
    try {
        await addDoc(collection(db, 'ask-artist', requestId, 'draw-proposals'), { ...data })
        console.log('Proposal added successfully')
        return {
            success: true,
            message: 'Proposal added successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}

export default createDrawRequest