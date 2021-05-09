// https://jestjs.io/zh-Hans/docs/configuration
import type {Config} from '@jest/types';
import {defaults} from 'jest-config';
console.log('tets.config');

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions,'ts', 'tsx', 'js', 'jsx'],
    // testMatch: ['<rootDir>/test/'],
    // setupFilesAfterEnv: ['./jest.setup.js']
  };
  
  export default config
