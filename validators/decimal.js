const isDecimal = (value) => {
    if (typeof value === 'number') {
        return true;
    }
    if (typeof value === 'string') {
        return /^-?\d*\.\d+$/.test(value) && !isNaN(Number(value));
    }
    return false;
};

module.exports = isDecimal;
