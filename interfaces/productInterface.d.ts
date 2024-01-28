export default interface IProduct {
    productId?: string;
    productAttributes: IProductAttributes
    description: string;
    yearOfCompletion: string
    certificateOfAuthenticity?: string;
    price: number;
    customerReview?: string[];
    rating?: number;
    timestamp: number;
    discount?: number;
}

export default interface IProductAttributes {
    artworkType: string;
    artistName: string;
    title: string;
    medium: string; //material used to create the artwork
    dimensions: {
        height?: number;
        width?: number;
        deepth?: number;
    }
}