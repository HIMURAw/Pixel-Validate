const isPostalCode = (value, locale = 'any') => {
    if (typeof value !== 'string') {
        return false;
    }

    const patterns = {
        'TR': /^[0-9]{5}$/,
        'US': /^[0-9]{5}(-[0-9]{4})?$/,
        'UK': /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
        'any': /^[0-9A-Z]{3,10}$/i
    };

    const pattern = patterns[locale] || patterns['any'];
    return pattern.test(value);
};

module.exports = isPostalCode;
