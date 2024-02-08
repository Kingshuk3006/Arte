import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../../database/firebase"

const deleteRequest = async (requestId: string) => {
    try {
        await deleteDoc(doc(db, 'ask-artist', requestId))
        console.log('Request deleted successfully')
        return {
            success: true,
            message: 'Request deleted successfully'
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error'
        }
    }
}

export default deleteRequest