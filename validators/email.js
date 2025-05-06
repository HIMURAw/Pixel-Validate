function isEmail(value) {
    if (typeof value !== 'string') return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}

module.exports = isEmail;
