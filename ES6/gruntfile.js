'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    traceur: {
      options: {
        experimental: true,
        moduleNames: false
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'lib/es6',
          src: ['*.js'],
          dest: 'lib/es5'
        }]
      }
    },
    watch: {
      files: ['lib/es6/*.js'],
      task: ['traceur'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['traceur']);
  grunt.registerTask('default', ['build', 'watch']);

};