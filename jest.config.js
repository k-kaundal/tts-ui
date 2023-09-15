module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    globals: {
      "ts-jest": {
        babelConfig: true
      }
    }
  };
  