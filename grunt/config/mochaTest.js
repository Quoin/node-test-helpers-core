module.exports = {
    options: {
        reporter: 'spec'
    },
    unit: {
        options: {
            captureFile: 'reports/unit-test-results.txt'
        },
        src: [
            'lib/**/*.spec.unit.js'
        ]
    }
};
