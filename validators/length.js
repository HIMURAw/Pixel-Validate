function isLength(value, min = 0, max = Infinity) {
    if (typeof value === 'string' || Array.isArray(value)) {
        const length = value.length;
        return length >= min && length <= max;
    }
    return false;
}


module.exports = isLength;