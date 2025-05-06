const isLowerCase = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    return value === value.toLowerCase() && value.length > 0;
};

module.exports = isLowerCase;
