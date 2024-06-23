const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? 'https://sergio.v1-22.proyectosdwa.es/' : '',
  images: {
    loader: 'default',
  },
  output: 'export',
};