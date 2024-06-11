module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        "requireConfigFile": false,
    },
    plugins: ['react', 'react-native'],
    env: {
        'react-native/react-native': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
    ],
    rules: {
        "no-undef": "off",
    }
};