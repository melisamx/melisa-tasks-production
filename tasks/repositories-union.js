module.exports = function(grunt) {
    
    grunt.registerTask('respositories:union', 'Union repositories to diretory app', function() {
        
        var repositories = grunt.config.get('pkg.repositories'),
            copy = grunt.config.get('copy') || {},
            dirName;
        
        for(var i in repositories) {
            
            dirName = repositories[i].substr(repositories[i].lastIndexOf('/') + 1).replace('.git', '');
            
            copy [dirName]= {
                files: [
                    {
                        expand: true,
                        cwd: '<%= pkg.paths.repositories %>/' + dirName,
                        src: [
                            '**'
                        ],
                        dest: '<%= pkg.paths.app %>'
                    }
                ]
            };
            
            grunt.config.set('copy', copy);
            
        }
        
        grunt.task.run('copy');
        
    });
    
};
