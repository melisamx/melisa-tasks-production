module.exports = {
    options: {
        report: 'min',
        banner: '/*!\n' + 
            ' * <%= pkg.proyect.name %> <%= pkg.proyect.version %>\n' +
            ' * Copyright (c) 2014-2015 <%= pkg.proyect.company %>\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %>\n' +
            ' */\n'
    },
    test: {
        files: [
            {
                expand: true,
                cwd : '<%= pkg.paths.app %>',
                src: [
                    '**/*.js',
                    '!**/node_modules/**',
                    '!**/*.min.js',
                    '!public/vendor/**'
                ],
                dest: '<%= pkg.paths.app %>'
            }
        ]
    }
};
