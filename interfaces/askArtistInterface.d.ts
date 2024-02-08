export default interface IDrawRequest {
    id?: string;
    askedBy: {
        userId: string;
        name: string;
    };
    title: string;
    description: string;
    budget: number;
    medium: string;
    timeLimit: number;
    dimension: {
        height?: number;
        width?: number;
    }
    isAnswered: boolean;
    timestamp: number;
}

export interface IDrawProposal {
    id?: string;
    userId: string;
    message: string;
    name: string;
    timestamp: number;
    email: string;
    budget: number;
    offerPrice: number;
    finalPrice?: number;
    accepted: boolean
}