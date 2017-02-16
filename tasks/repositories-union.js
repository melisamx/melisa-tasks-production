module.exports = function(grunt) {
    
    grunt.registerTask('repositories:union', 'Union repositories to diretory app', function() {
        
        var repositories = grunt.config.get('pkg.repositories'),
            copy = grunt.config.get('copy') || {},
            dirName,
            urlRepository;
        
        for(var i in repositories) {
            
            if(typeof repositories[i] === 'string') {
                urlRepository = repositories[i];
            } else {
                urlRepository = repositories[i].url;
            }
            dirName = urlRepository.substr(urlRepository.lastIndexOf('/') + 1).replace('.git', '');
            
            copy [dirName]= {
                files: [
                    {
                        expand: true,
                        cwd: '<%= pkg.paths.repositories %>/' + dirName,
                        dot: true,
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
