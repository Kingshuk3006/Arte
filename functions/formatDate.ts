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

// Example usage
const milliseconds = 1671513600000; // Example milliseconds representing 2023-10-23
const formattedDate = formatDate(milliseconds);
console.log(formattedDate); // Output: 23rd Oct 2023