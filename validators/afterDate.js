
const afterDate = (value, targetDate) => {
    if (!value || !targetDate) {
        return false;
    }

    const date = new Date(value);
    const compareDate = new Date(targetDate);

    if (isNaN(date.getTime()) || isNaN(compareDate.getTime())) {
        return false;
    }

    return date > compareDate;
};

module.exports = afterDate;
