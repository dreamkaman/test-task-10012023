type customDayMonth = number | string;

export const convertDate = (inputDate: string): string => {
    const dateObj = new Date(inputDate);

    let month: customDayMonth = dateObj.getMonth();
    let day: customDayMonth = dateObj.getDate();
    let year: number = dateObj.getFullYear();

    switch (month) {
        case 0: month = 'January'; break;
        case 1: month = 'February'; break;
        case 2: month = 'March'; break;
        case 3: month = 'April'; break;
        case 4: month = 'May'; break;
        case 5: month = 'June'; break;
        case 6: month = 'July'; break;
        case 7: month = 'August'; break;
        case 8: month = 'September'; break;
        case 9: month = 'October'; break;
        case 10: month = 'November'; break;
        case 11: month = 'December'; break;
    }

    switch (day) {
        case 1: day = '1st'; break;
        case 2: day = '2nd'; break;
        case 3: day = '3rd'; break;
        case 21: day = '21st'; break;
        case 22: day = '22nd'; break;
        case 23: day = '23rd'; break;
        case 31: day = '31st'; break;
        default: day = `${day}th`;
    }

    const convertedDate: string = `${month} ${day}, ${year}`

    return convertedDate;
}