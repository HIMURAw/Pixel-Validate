const isFloat = (value) => {
    if (typeof value === 'number') {
        return !Number.isInteger(value);
    }
    if (typeof value === 'string') {
        return /^-?\d*\.\d+$/.test(value) && !isNaN(Number(value));
    }
    return false;
};

module.exports = isFloat;
