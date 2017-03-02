const DEFAULT_ERROR = 'Unexpected flow';

module.exports = (message, data) => {
    throw new Error(data ? (message || DEFAULT_ERROR) : DEFAULT_ERROR);
};
