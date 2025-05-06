module.exports = {
    isEmail: require('./validators/email'),
    isURL: require('./validators/url'),
    isIP: require('./validators/ip'),
    isEmpty: require('./validators/empty'),
    isLength: require('./validators/length'),
    isNumeric: require('./validators/numeric'),
    isStrongPassword: require('./validators/password'),
};
