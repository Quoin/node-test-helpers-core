module.exports = {
    options: {},
    json: {
        options: {
            js: {
                fileTypes: [
                    '.babelrc',
                    '.eslintrc',
                    '.json',
                    '.<%= packageJson.name %>rc',
                ],
                indentSize: 2,
            },
        },
        src: [
            '.babelrc',
            '.eslintrc',
            '*.json',
            '.<%= packageJson.name %>rc',
            'server/**/*.json',
        ],
    },
};
