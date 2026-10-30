const path = require('path');

const url = 'https://mail.proton.me/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    logoMaskable: path.resolve('./src/icon-maskable.svg'),
    favicons: {
        appName: 'Euroton Mail',
        appDescription:
            'Euroton Mail is a self-hosted, openly licensed mail platform forked from Proton Mail. Encrypted by default.',
    },
    url,
    ogImage: `${url}assets/proton-og-image.png`,
    locales: Object.keys(require('./locales/config/locales.json')),
};
