import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../database/firebase";
import { IDrawRequest } from "../../interfaces/askArtistInterface";

export default async function getAllDrawRequests(requestId: string) {
  try {
    let fetchedDrawRequests: IDrawRequest[] = [];
    const q = query(collection(db, "ask-artist", requestId, 'draw-requests'));
    const drawRequestSnapshot = await getDocs(q);
    drawRequestSnapshot.forEach((req) => {
      const id = req.id;
      const drawRequest = { id: id, ...req.data() };
      fetchedDrawRequests.push(drawRequest as IDrawRequest);
    });

    return {
      success: true,
      message: "DrawRequests fetched successfully",
      drawRequests: fetchedDrawRequests as IDrawRequest[],
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "there was an error",
    };
  }
}
