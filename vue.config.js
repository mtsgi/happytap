module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/happytap/'
        : '/',
    outputDir: 'docs',
};
