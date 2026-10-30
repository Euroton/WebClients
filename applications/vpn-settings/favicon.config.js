const path = require('path');

const url = 'https://account.protonvpn.com/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    logoMaskable: path.resolve('./src/icon-maskable.svg'),
    favicons: {
        appName: 'Euroton VPN',
        appDescription:
            'Euroton VPN-Settings is the VPN configuration surface of a self-hosted, openly licensed platform forked from Proton VPN.',
    },
    url,
    ogImage: `${url}assets/proton-og-image.png`,
    locales: Object.keys(require('./locales/config/locales.json')),
};
