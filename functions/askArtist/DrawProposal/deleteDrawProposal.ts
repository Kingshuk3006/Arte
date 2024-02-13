import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../../database/firebase"
import { IDrawProposal } from "../../../interfaces/askArtistInterface"

const createDrawRequest = async (requestId: string, proposalId: string) => {
    try {
        await deleteDoc(doc(db, 'ask-artist', requestId, 'draw-proposals', proposalId))
        console.log('Proposal deleted successfully')
        return {
            success: true,
            message: 'Proposal deleted successfully'
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