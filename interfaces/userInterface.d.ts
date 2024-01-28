export default interface IUser {
    userId?: string;
    name: string;
    image: string;
    email: string;
    role: "buyer" | "buyer-seller";
    //address data
    shippingAddress?: {
        address: string;
        landmark: string;
        pincode: string;
        city: string;
        state: string;
    }
    phoneNumber?: string; //with country code
    preferences?: string;
    //cart and order
    cart?: IUserCart[];
    orderHistory?: IOrder[]
    mailHistory?: IUserMailHistory[]
    authCredentials?: IUserAuthCredentials
    created: number
}

export interface IOrder {
    orderId?: string;
    productId: string[];
    userId: string
    date: number;
    status: "Pending" | "Processing" | 'Confirmed' | "Shipped" | "Out for Delivery" | "Delivered" | "Cancelled" | "Refunded" | "Returned" | "On Hold" | "Completed";
    orderTotal: number;
    orderNotes?: string
    estimatedShippingDays : number;
}

export interface IUserCart {
    products: string[];
    cartExpiry: number;    //Time limimt of cart expiration
    timestamp: number; //Time of cart creation
}

export interface IUserMailHistory {
    type: 'requesting' | 'accepting'
    timestamp: number;
    title: string;
    description: string;
}

export interface IUserAuthCredentials {
    lastLoginTimestamp?: number;
    hashedPassword: string;
    expirationTimestamp?: number;
    sessionToken?: string;
}