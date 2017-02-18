module.exports = {
    options: {},
    'istanbul-unit': {
        cmd: './node_modules/.bin/istanbul',
        args: [
            'cover',
            '--dir', 'reports/coverage/unit',
            'node_modules/.bin/_mocha',
            '--',
            'lib/**/*.spec.unit.js',
        ],
    },
};
