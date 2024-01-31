export default interface IAskArtist {
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