function isURL(url) {
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-\.]*)*(\?[\w\-=&]*)?$/i;

    return urlRegex.test(url);
}


module.exports = isURL;
