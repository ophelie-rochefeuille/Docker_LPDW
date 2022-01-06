const crypto = require('crypto');

const hashPassword = (password, key = null) => {
    let shasum = crypto.createHash('sha256');
    key = key ? key : crypto.randomBytes(48).toString('hex');

    shasum.update(password + key + password + password + key);
    return { password: shasum.digest('hex'), key };
};

module.exports = {
    hashPassword,
};
