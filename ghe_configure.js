Template.configureLoginServiceDialogForGhe.helpers({
    siteUrl: function() {
        return Meteor.absoluteUrl();
    }
});

Template.configureLoginServiceDialogForGhe.fields = function() {
    return [{
        property: 'gheURL',
        label: 'Github Enterprise URL'
    }, {
        property: 'gheAPI',
        label: 'Github Enterprise API'
    }, {
        property: 'clientId',
        label: 'Client ID'
    }, {
        property: 'secret',
        label: 'Client Secret'
    }];
};
