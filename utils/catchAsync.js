/* eslint-disable prettier/prettier */
/* eslint-disable prefer-object-spread */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
// /* eslint-disable import/newline-after-import */
// /* eslint-disable no-console */
/* eslint-disable prettier/prettier */
module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};