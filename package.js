Package.describe({
    summary: 'Github Enterprise OAuth flow',
    version: '2.0.5',
    name: 'ibmcloud:accounts-ghe',
    documentation: null
});

Package.onUse(function(api) {
    api.use('accounts-base@1.0.0', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth@1.0.0', ['client', 'server']);
    api.use('oauth2@1.0.0', ['client', 'server']);
    api.use('oauth@1.0.0', ['client', 'server']);
    api.use('http@1.0.0', ['server']);
    api.use('underscore@1.0.0', 'client');
    api.use('templating@1.0.0', 'client');
    api.use('random@1.0.0', 'client');
    api.use('service-configuration@1.0.0', ['client', 'server']);

    api.addFiles('ghe_login_button.css', 'client');

    api.addFiles('ghe.js');

    api.export('Ghe');

    api.addFiles(
        ['ghe_configure.html', 'ghe_configure.js'],
        'client');

    api.addFiles('ghe_server.js', 'server');
    api.addFiles('ghe_client.js', 'client');
});
