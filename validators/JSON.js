const isJSON = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
};

module.exports = isJSON;
