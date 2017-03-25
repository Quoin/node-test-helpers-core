module.exports = {
    options: {},
    'coverage-unit': {
        cmd: 'npm',
        args: [
            'run',
            'coverage:unit'
        ]
    },
    'publish': {
        cmd: 'npm',
        args: [
            'publish',
            '--access', 'public'
        ]
    }
};
