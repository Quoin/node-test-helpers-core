module.exports = (grunt) => {
    grunt.registerTask('default', [
        'eslint',
        'jsbeautifier',
        'run:coverage-unit'
    ]);
};
