module.exports = {
    
    proyect: {
        name: 'Melisa Tasks',
        version: '1.0.0',
        company: 'Melisa'
    },
    
    enviroment: 'local',
    
    paths: {
        distribution: 'dist',
        repositories: '<%= pkg.paths.distribution %>/repositories',
        app: '<%= pkg.paths.distribution %>/app'
    },
    
    repositories: [
        {
            url: 'git@vcs:melisa/melisa-kernel.git',
            tag: 'v1.0.2'
        },
        {
            url: 'git@vcs:melisa/melisa-app-core.git',
            tag: 'v1.0.2'
        },
        {
            url: 'git@vcs:melisa/melisa-app-sencha.git',
            tag: 'v1.2.1'
        },
        {
            url: 'git@vcs:melisa/melisa-app-events.git',
            tag: 'v1.1.0'
        },
        {
            url: 'git@vcs:melisa/melisa-app-public.git',
            tag: 'v1.1.4'
        },
        {
            url: 'git@vcs:melisa/melisa-app-panel.git',
            tag: 'v1.1.0'
        },
        {
            url: 'git@vcs:melisa/melisa-app-security.git',
            tag: 'v1.0.4'
        },
        {
            url: 'git@vcs:melisa/melisa-app-people.git',
            tag: 'v1.0.3'
        },        
        {
            url: 'git@vcs:melisa/melisa-app-drive.git',
            tag: 'v1.0.2'
        },
        {
            url: 'git@vcs:melisa/melisa-app-email.git',
            tag: 'v1.0.0'
        },
        {
            url: 'git@vcs:melisa/melisa-app-tools.git',
            tag: 'v1.0.0'
        },
        {
            url: 'git@vcs:melisa/melisa-app-userdevice.git',
            tag: 'v1.0.0'
        }
    ],
    
    server: {
        showProgress: true,
        srcBasePath: 'tmp',
        ignoreErrors: true,
        readyTimeout: 1800000
    }
    
};
