module.exports = function(grunt) {
    
    grunt.registerTask('production', 'Production enviroment', function(application, enviroment) {
        
        if( application) {
            var config = require('../applications/' + application),
                repositories = grunt.config('pkg.repositories');
            
            if( config.addRepositories) {
                for(var i in config.addRepositories) {
                    repositories.push(config.addRepositories[i]);
                }
            }
            
            grunt.config.set('pkg.repositories', repositories);
            
        }
        
        if( enviroment === 'p') {
            grunt.config.set('pkg.enviroment', 'production');
        }
        
        grunt.task.run([
            'clean:test',
            'repositories:clone',
            'repositories:union',
            'production:javascript',
            'production:css',
            'enviroment'
        ]);
        
    });
    
};
