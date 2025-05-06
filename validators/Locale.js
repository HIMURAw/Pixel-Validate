const isLocale = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const localePattern = /^[a-z]{2}(-[A-Z]{2})?$/;
    return localePattern.test(value);
};

module.exports = isLocale;
