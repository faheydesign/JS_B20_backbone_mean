'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },
    copy: {
      dev: {
        expand: true, // lets you use cwd
        cwd: 'app/',
        src: ['*.html', '*.css'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    browserify: {
      dev: {
        options: {
          transform: ['debowerify', 'hbsfy'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      test: {
        options: {
          transform: ['hbsfy', 'debowerify'],
          debug: true
        },
        src: ['test/mocha/backbone/**/*.js'],
        dest: 'test/testbundle.js'
      }
    },
    mocha: {
      backbonetest: {
        src: ['test/test.html'],
        options: {
          run: true
        }
      }
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('backbone:test', ['browserify:test', 'mocha:backbonetest']);
  grunt.registerTask('test', ['backbone:test']);
};
