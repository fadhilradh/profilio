module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/app/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
  },
  collectCoverageFrom: [
    'app/**/*.(ts|tsx)',
    'components/**/*.(ts|tsx)',
    'utils/**/*.(ts|tsx)',
    '!**/*.stories.tsx',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/configs/test/fileMock.js',
  },
  modulePaths: ['<rootDir>'],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'cobertura'],
  reporters: ['default', 'jest-junit'],
}
