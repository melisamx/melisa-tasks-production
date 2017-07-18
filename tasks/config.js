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
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-core.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-sencha.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-events.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-public.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-panel.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-security.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-people.git',
            branch: 'lheredia'
        },        
        {
            url: 'git@vcs:melisa/melisa-app-drive.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-email.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-tools.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-userdevice.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-app-forge.git',
            branch: 'lheredia'
        },
        {
            url: 'git@vcs:melisa/melisa-third-party-frontend.git',
            branch: 'lheredia'
        }
    ],
    
    server: {
        showProgress: true,
        srcBasePath: 'tmp',
        ignoreErrors: true,
        readyTimeout: 1800000
    }
    
};
