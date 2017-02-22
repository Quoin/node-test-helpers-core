module.exports = {
    options: {
        fix: true,
    },

    dev: {
        options: {
            rules: {
                'import/no-extraneous-dependencies': 0,
                indent: [2, 4],
            },
        },
        src: [
            '*.js',
            'grunt/**/*.js',
        ],
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
                indent: [2, 4],
            },
        },
        src: [
            'lib/**/*.js',
            '!lib/**/*.spec.*.js',
        ],
    },

    nodeTest: {
        options: {
            envs: [
                'mocha',
            ],
            rules: {
                'import/no-extraneous-dependencies': 0,
                indent: [2, 4],
            },
        },
        src: [
            'lib/**/*.spec.*.js',
        ],
    },
};
