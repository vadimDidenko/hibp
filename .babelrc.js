const test = process.env.NODE_ENV === 'test';

module.exports = {
  plugins: ['babel-plugin-annotate-pure-calls'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: test ? 'commonjs' : false,
        targets: {
          browsers: ['> 1%', 'last 2 versions'],
          node: 8,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
