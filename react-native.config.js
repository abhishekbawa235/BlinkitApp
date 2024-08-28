module.exports = {
    project: {
        ios: {},
        android: {},
    },
    'react-native-vector-icons': {
        platforms: {
            ios: null,
        },
    },
    assets: ['./src/assets/fonts/'],
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transform');
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    },
};