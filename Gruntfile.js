module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc',
        format: (grunt.option('o') === undefined) ? 'stylish' : 'html',
        outputFile: (grunt.option('o') === undefined) ? '' : 'report.html'
      },
      target: ['stars-particle-network.js', 'Gruntfile.js']
    },
    uglify: {
      options: {
        ecma: 6, // set the ECMAScript version to 6 or higher
        compress: true,
        mangle: true,
        output: {
          beautify: true
        },
        mangleProperties: true,
        reserveDOMProperties: true,
        exceptionsFiles: ['mangleExceptions.json']
      },
      dist: {
        files: {
          'stars-particle-network.min.js': ['stars-particle-network.js']
        }
      }
    }
  });
};
