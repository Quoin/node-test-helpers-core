const DEFAULT_ERROR = 'Unexpected flow';

function unexpectedFlow(message, data) {
    throw new Error(data ? (message || DEFAULT_ERROR) : DEFAULT_ERROR);
}

unexpectedFlow.DEFAULT_ERROR = DEFAULT_ERROR;

module.exports = unexpectedFlow;
