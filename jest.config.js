module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    'src/(.*)': '<rootDir>/src/$1',
  },
};
