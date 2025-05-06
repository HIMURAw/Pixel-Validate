const isHash = (value, algorithm = 'md5') => {
    if (typeof value !== 'string') {
        return false;
    }

    const patterns = {
        md5: /^[a-f0-9]{32}$/i,
        sha1: /^[a-f0-9]{40}$/i,
        sha256: /^[a-f0-9]{64}$/i,
        sha512: /^[a-f0-9]{128}$/i
    };

    const pattern = patterns[algorithm.toLowerCase()];
    return pattern ? pattern.test(value) : false;
};

module.exports = isHash;
