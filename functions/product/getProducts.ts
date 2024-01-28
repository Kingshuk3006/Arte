import { collection, getDocs, limit, query } from "firebase/firestore";
import IProduct from "../../interfaces/productInterface";
import { db } from "../../database/firebase";

export default async function getProduct() {
  try {
    let fetchedProducts: IProduct[] = [];
    const q = query(collection(db, "products"), limit(20));
    const productSnapshot = await getDocs(q);
    productSnapshot.forEach((prod) => {
      const id = prod.id;
      const product = { productId: id, ...prod.data() };
      fetchedProducts.push(product as IProduct);
    });

    return {
      success: true,
      message: "products fetched successfully",
      products: fetchedProducts as IProduct[],
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "there was an error",
    };
  }
}
