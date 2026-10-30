const path = require('path');

const url = 'https://account.proton.me/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    logoMaskable: path.resolve('./src/icon-maskable.svg'),
    favicons: {
        appName: 'Euroton',
        appDescription:
            'Euroton is a self-hosted, openly licensed mail + calendar + contacts platform forked from Proton.',
    },
    url,
    ogImage: `${url}assets/proton-og-image.png`,
    locales: Object.keys(require('./locales/config/locales.json')),
};
