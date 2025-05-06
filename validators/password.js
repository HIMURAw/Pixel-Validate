function isStrongPassword(password) {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-])[A-Za-z\d!@#$%^&*_]{8,}$/;

    return passwordRegex.test(password);
}

module.exports = isStrongPassword;
