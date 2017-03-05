module.exports = {
    options: {},
    json: {
        options: {
            js: {
                fileTypes: [
                    '.babelrc',
                    '.eslintrc',
                    '.nycrc',
                    '.json',
                    '.<%= packageJson.name %>rc'
                ],
                indentSize: 2
            }
        },
        src: [
            '.babelrc',
            '.eslintrc',
            '.nycrc',
            '*.json',
            '.*.json',
            '.<%= packageJson.name %>rc',
            'server/**/*.json'
        ]
    }
};
