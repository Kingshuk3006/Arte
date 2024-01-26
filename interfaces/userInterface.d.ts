export default interface IUser {
    userId?: string;
    name: string;
    image: string;
    email: string;
    role: "buyer" | "artist-buyer";
    //address data
    shippingAddress: {
        address?: string;
        landmark?: string;
        pincode?: string;
        city?: string;
        state?: string;
        country?: string;
    }
    phoneNumber: string; //with country code
    preferences?: string;
    lastLoginTimestamp: number;
    //cart and order
    cart?: IUserCart[];
    orderHistory?: IUserOrder[]
    mailHistory?: IUserMailHistory[]
}

export default interface IUserOrder {
    orderId?: string;
    productId: string;
    date: number;
    status: "Pending" | "Processing" | 'Confirmed' | "Shipped" | "Out for Delivery" | "Delivered" | "Cancelled" | "Refunded" | "Returned" | "On Hold" | "Completed";
    orderTotal: number;
    orderNotes?: string
}

export default interface IUserCart {
    products: string[];
    cartExpiry: number;    //Time limimt of cart expiration
    timestamp: number; //Time of cart creation
}

export default interface IUserMailHistory {
    type: 'requesting' | 'accepting'
    timestamp: number;
    title: string;
    description: string;
}