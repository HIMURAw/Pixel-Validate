const isAscii = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    return /^[\x00-\x7F]+$/.test(value);
};

module.exports = isAscii;
