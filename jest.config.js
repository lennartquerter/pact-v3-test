/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },

  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    'lodash-es/.*': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '.*\\.(test|spec).(ts|tsx|js)$',

  moduleDirectories: ['node_modules', 'src'],

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js'],

}
