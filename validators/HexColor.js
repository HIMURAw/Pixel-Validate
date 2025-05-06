
const isHexColor = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const hexColorPattern = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
    return hexColorPattern.test(value);
};

module.exports = isHexColor;
