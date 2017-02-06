module.exports = {
    
    proyect: {
        name: 'Melisa Tasks',
        version: '1.0.0',
        company: 'Melisa'
    },
    
    paths: {
        distribution: 'dist',
        repositories: '<%= pkg.paths.distribution %>/repositories',
        app: '<%= pkg.paths.distribution %>/app'
    },
    
    repositories: [
        {
            url: 'git@vcs.melisa.mx:melisa/melisa-app-public.git',
            tag: 'v1.0.0'
        },
        'git@vcs.melisa.mx:melisa/melisa-app-panel.git'
    ]
    
};
