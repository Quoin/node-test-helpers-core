module.exports = (grunt) => {
    grunt.registerTask('default', [
        'eslint',
        'jsbeautifier',
        'run:istanbul-unit',
    ]);
};
