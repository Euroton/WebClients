const path = require('path');

const url = 'https://pass.proton.me/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    // TODO provide real maskable icon
    logoMaskable: path.resolve('./src/favicon.svg'),
    favicons: {
        appName: 'Euroton Pass',
        appDescription:
            'Euroton Pass is the end-to-end encrypted password manager surface of a self-hosted, openly licensed platform forked from Proton Pass.',
    },
    url,
    ogImage: `${url}assets/proton-og-image.png`,
    // locales: Object.keys(require('./locales/config/locales.json')),
};
