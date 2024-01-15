module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel', {tailwindConfig: './tailwind.config.js'}],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
