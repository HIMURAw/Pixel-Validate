
const isMobilePhone = (value, locale = 'any') => {
    if (typeof value !== 'string') {
        return false;
    }

    const digits = value.replace(/\D/g, '');

    const patterns = {
        'tr-TR': /^5[0-9]{9}$/,
        'en-US': /^[2-9]\d{9}$/,
        'any': /^\+?[1-9]\d{1,14}$/
    };

    const pattern = patterns[locale] || patterns['any'];
    return pattern.test(digits);
};

module.exports = isMobilePhone;
