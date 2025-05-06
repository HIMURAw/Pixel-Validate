function isNumeric(value) {
    const numericRegex = /^-?\d+(\.\d+)?$/;

    return numericRegex.test(value);
}

module.exports = isNumeric;