const isInt = (value) => {
    if (typeof value === 'number') {
        return Number.isInteger(value);
    }
    if (typeof value === 'string') {
        return /^-?\d+$/.test(value) && Number.isInteger(Number(value));
    }
    return false;
};

module.exports = isInt;
