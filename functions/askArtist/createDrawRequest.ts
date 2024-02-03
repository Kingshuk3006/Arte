import { addDoc, collection } from "firebase/firestore"
import { IDrawRequest } from "../../interfaces/askArtistInterface"
import { db } from "../../database/firebase"

const createDrawRequest = async (data: IDrawRequest, requestId: string) => {
    try {
        await addDoc(collection(db, 'ask-artist', requestId, 'draw-requests'), { ...data })
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