const isMACAddress = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const macPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macPattern.test(value);
};

module.exports = isMACAddress;
