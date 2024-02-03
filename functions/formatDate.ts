import { format } from 'date-fns';

export const formatDate = (milliseconds: number) => {
    if (!milliseconds) {
        return ''
    }
    const date = new Date(milliseconds);
    const day = format(date, 'do');
    const monthYear = format(date, 'MMM yyyy');

    return `${day} ${monthYear}`;
};
