module.exports = {
    test: {
        files: [
            {
                expand: true,
                cwd: '<%= pkg.paths.repositories %>',
                src: [
                    '**'
                ],
                dest: '<%= pkg.paths.app %>'
            }
        ]
    }
};
