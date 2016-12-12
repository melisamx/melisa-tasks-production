module.exports = function(grunt) {
    
    grunt.initConfig ({
        pkg: require('./tasks/config'),
        uglify: require('./tasks/uglify/index'),
        cssmin: require('./tasks/cssmin/index'),
        gitPull: require('./tasks/gitpull/index'),
        clean: require('./tasks/clean/index')
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-gitpull');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hub');
    
    grunt.loadTasks('tasks');
    
};
