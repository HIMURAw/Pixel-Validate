const isHexadecimal = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const hexPattern = /^[0-9A-Fa-f]+$/;
    return hexPattern.test(value);
};

module.exports = isHexadecimal;
