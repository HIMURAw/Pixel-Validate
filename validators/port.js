const isPort = (value) => {
    const port = Number(value);
    return Number.isInteger(port) && port >= 0 && port <= 65535;
};

module.exports = isPort;
