module.exports = {
  env: {},
  webpack: (config) => ({
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /.css$/,
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext].js',
          },
        },
        {
          test: /.css$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader'],
        },
      ],
    },
  }),
};
