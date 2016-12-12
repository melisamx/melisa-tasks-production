module.exports = function(grunt) {
    
    grunt.registerTask('production', 'Production enviroment', function() {
        
        grunt.task.run([
            'clean:test',
            'repositories:clone',
            'repositories:union',
            'production:javascript',
            'production:css'
        ]);
        
    });
    
};
