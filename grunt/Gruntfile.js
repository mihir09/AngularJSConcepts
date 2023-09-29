 var sass = require('node-sass')

module.exports = function (grunt) {
    //Configuration
    grunt.initConfig({
        concat: {
            js: {
                // src:['js/JQuery.js', 'js/script.js','js/rslides.js']
                // src: ['js/jquery.js', 'js/*.js'],
                src:['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src:['css/*.css'],
                dest: 'build/style.css'
            }
        },
        sass:{
            options:{
                implementation:sass,
            },
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'build/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }

    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')


    //Register Tasks
    grunt.registerTask('default', ['concat:js']);
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    grunt.registerTask('build-sass', ["sass"]);
    grunt.registerTask('build-uglify', ["uglify"]);
}