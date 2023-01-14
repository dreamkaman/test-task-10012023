export const cutText100 = (text: string): string => {
    if (text.length > 100) {

        const newText = `${text.slice(0, 99)}...`;
        return newText;
    }
    return text;
}

export const ratingTitle = (words: Array<string>, test: string) => {

    const rating = words.reduce((acc: number, word: string) => {
        const times = test.split(`${word}`).length;
        if (times) {
            return acc = acc + 1000 * (times - 1);
        }
        return acc;
    }, 0);

    return rating;

}

export const ratingSummery = (words: Array<string>, test: string) => {

    const rating = words.reduce((acc: number, word: string) => {
        const times = test.split(`${word}`).length;
        if (times) {
            return acc = acc + times - 1;
        }
        return acc;
    }, 0);

    return rating;

}