const sass = require('node-sass');
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            build: {
                options: {
                    implementation: sass,
                    outputStyle: 'compressed'
                },
                files: [{
                    src: ['scss/*.scss'],
                    dest: 'css/main.css'
                }]
            }
        },  

        watch: {
            sassWatch: {
                files: ['scss/*.scss'],
                tasks: ['build']
            },

        }
    })

    // /** Task Load */
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    /** Register Task */
    // grunt.registerTask('test', function () {
    //     console.log('test task running');
    // });
    grunt.registerTask('build', ['sass', 'watch']);

}