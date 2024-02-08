import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../database/firebase"
import IDrawRequest from "../../../interfaces/askArtistInterface"

const createRequest = async (data: IDrawRequest) => {
    try {
        await addDoc(collection(db, 'ask-artist'), { ...data })
        console.log('Request added successfully')
        return {
            success: true,
            message: 'Request added successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}

export default createRequest