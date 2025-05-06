
const isDateFormat = (value, format) => {
    if (typeof value !== 'string' || typeof format !== 'string') {
        return false;
    }
    const formatPatterns = {
        'YYYY-MM-DD': /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        'DD/MM/YYYY': /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        'MM/DD/YYYY': /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
        'YYYY/MM/DD': /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/
    };

    const pattern = formatPatterns[format];
    if (!pattern) {
        return false;
    }

    if (!pattern.test(value)) {
        return false;
    }

    const date = new Date(value);
    return date instanceof Date && !isNaN(date);
};

module.exports = isDateFormat;
