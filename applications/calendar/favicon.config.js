const path = require('path');

const url = 'https://calendar.proton.me/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    logoMaskable: path.resolve('./src/icon-maskable.svg'),
    favicons: {
        appName: 'Euroton Calendar',
        appDescription:
            'Euroton Calendar is the calendar surface of a self-hosted, openly licensed mail + calendar platform forked from Proton.',
    },
    url,
    ogImage: `${url}assets/proton-og-image.png`,
    locales: Object.keys(require('./locales/config/locales.json')),
};
