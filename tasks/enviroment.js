module.exports = function(grunt) {
    
    grunt.registerTask('enviroment', 'Set enviroment apps', function() {
        
        var enviroment = grunt.config.get('pkg.enviroment'),
            config = {
                expand: true,
                cwd: '<%= pkg.paths.app %>/App',
                dot: true,
                nonull: true,
                src: '**/.env.' + enviroment,
                dest: '<%= pkg.paths.app %>/App',
                flatten: false,
                
                /* http://gruntjs.com/api/grunt.file */
                /* http://shermandigital.com/blog/rename-copied-files-using-grunt-plugin-grunt-contrib-copy/ */
                rename: function(dest, matchedSrcPath) {
                    
                    var app = matchedSrcPath.replace('/.env.' + enviroment, '');
                    
                    return dest + '/' + app + '/.env';
                }
            };
        
        grunt.config.set('copy.enviroment', config);
        grunt.task.run('copy:enviroment');
        
    });
    
};
