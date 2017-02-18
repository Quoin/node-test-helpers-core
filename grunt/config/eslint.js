module.exports = {
    options: {
        fix: true,
    },
    node: {
        options: {
            envs: [
                'es6',
            ],
            ecmaFeatures: {
                modules: false,
            },
            rules: {
                'import/no-extraneous-dependencies': 0,
                indent: [2, 4],
            },
        },
        src: [
            '*.js',
            'grunt/**/*.js',
            'lib/**/*.js',
            '!lib/**/*.spec.*.js',
        ],
    },
    nodeTest: {
        options: {
            envs: [
                'mocha',
            ],
        },
        src: [
            'lib/**/*.spec.*.js',
        ],
    },
};
