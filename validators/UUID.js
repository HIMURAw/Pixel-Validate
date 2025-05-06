
const isUUID = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidPattern.test(value);
};

module.exports = isUUID;
