export const generateProjectCode = (category) => {
    const prefix = 'DFC';
    const categoryCode = category[0].toUpperCase();
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();

    return `${prefix}${categoryCode}${month}${year}${randomDigits}`;
};
