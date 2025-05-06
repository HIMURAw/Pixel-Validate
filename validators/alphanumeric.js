const isAlphanumeric = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const alphanumericPattern = /^[A-Za-z0-9]+$/;
    return alphanumericPattern.test(value);
};

module.exports = isAlphanumeric;
