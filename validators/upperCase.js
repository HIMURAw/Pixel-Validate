const isUpperCase = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    return value === value.toUpperCase() && value.length > 0;
};

module.exports = isUpperCase;
