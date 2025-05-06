
const isBase64 = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    if (!base64Regex.test(value)) {
        return false;
    }

    try {
        const decoded = atob(value);
        return btoa(decoded) === value;
    } catch (e) {
        return false;
    }
};

module.exports = isBase64;
