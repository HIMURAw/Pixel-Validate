const isAlpha = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const alphaPattern = /^[A-Za-z]+$/;
    return alphaPattern.test(value);
};

module.exports = isAlpha;
