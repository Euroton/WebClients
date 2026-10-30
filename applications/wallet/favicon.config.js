const path = require('path');

const url = 'https://wallet.proton.me/';

module.exports = {
    logo: path.resolve('./src/favicon.svg'),
    // TODO provide real maskable icon
    logoMaskable: path.resolve('./src/favicon.svg'),
    favicons: {
        appName: 'Euroton Wallet',
        appDescription: 'Euroton Wallet is the bitcoin wallet surface of a self-hosted, openly licensed platform forked from Proton Wallet.',
    },
    url,
    // ogImage: `${url}assets/proton-og-image.png`, TODO: add og image here
    // locales: Object.keys(require('./locales/config/locales.json')), // TODO: add locales here
};
