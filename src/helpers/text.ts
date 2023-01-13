export const cutText100 = (text: string): string => {
    if (text.length > 100) {

        const newText = `${text.slice(0, 99)}...`;
        return newText;
    }
    return text;
}