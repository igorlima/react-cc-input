import babel from 'rollup-plugin-babel';

export default {
  input: `${__dirname}/src/index.js`,
  output: {
    name: 'CreditCardInput',
    file: `${__dirname}/lib/index.js`,
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-credit-card-input': 'CreditCardUtilities'
    }
  },
  external: [
    'react',
    'react-dom',
    'react-credit-card-input'
  ],
  plugins: [
    babel({
      presets: [['env', { modules: false }], 'react', 'flow'],
      plugins: [
        'external-helpers',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    })
  ]
};
