const isDivisibleBy = (value, divisor) => {
    const num = Number(value);
    const div = Number(divisor);
    return !isNaN(num) && !isNaN(div) && div !== 0 && num % div === 0;
};

module.exports = isDivisibleBy;
