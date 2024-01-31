import { addDoc, collection } from "firebase/firestore"
import IAskArtist from "../../interfaces/askArtistInterface"
import { db } from "../../database/firebase"

const createRequest = async (data: IAskArtist) => {
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