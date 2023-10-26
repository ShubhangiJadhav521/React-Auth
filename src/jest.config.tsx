import axios from 'axios';

  export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest', // You may need to use Babel to handle imports
    },
    moduleFileExtensions: ['ts', 'tsx', 'node'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Optional: to configure custom setup
    transformIgnorePatterns: [
        '/node_modules/(?!axios)/', // Add axios to the exceptions
      ],
  };
  