import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../database/firebase";
import firebase from "firebase/compat/app";
import IDrawRequest from "../../../interfaces/askArtistInterface";
import { IFilter } from "@/pages/ask-artist";

type DocumentData = firebase.firestore.DocumentData;
type Query<DocumentData> = firebase.firestore.Query<DocumentData>;

export default async function getAllRequest(filter: IFilter) {
    try {
        const requestRef = collection(db, 'ask-artist')
        const q = query(requestRef, where('medium', '==', filter.medium), where('timeLimit', '>=', filter.timeLimit))

        const querySnapshot = await getDocs(q)

        let allDrawRequests: IDrawRequest[] = []
        querySnapshot.forEach((doc: firebase.firestore.DocumentData) => {
            allDrawRequests.push(doc.data())
        });

        return {
            success: true,
            message: 'fetched successfully',
            allDrawRequests: allDrawRequests
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'there was an error',
        }
    }
}