const loadGruntConfig = require('load-grunt-config');
const path = require('path');
const timeGrunt = require('time-grunt');

const packageJson = require('./package.json');

module.exports = function gruntfile(grunt) {
    timeGrunt(grunt);

    loadGruntConfig(grunt, {
        configPath: path.join(__dirname, 'grunt', 'config'),
        jitGrunt: {
            customTasksDir: path.join('grunt', 'tasks'),
            staticMappings: {}
        },
        data: {
            packageJson
        }
    });
};
