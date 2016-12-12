module.exports = function(grunt) {
    
    grunt.registerTask('production', 'Production enviroment', function() {
        
        grunt.task.run([
            'clean:test',
            'respositories:clone',
            'respositories:union',
            'production:javascript',
            'production:css'
        ]);
        
    });
    
};
