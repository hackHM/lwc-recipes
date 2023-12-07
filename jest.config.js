const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        /* CSS library import fix in test context. See:
        https://github.com/salesforce/sfdx-lwc-jest/issues/288) */
        '^c/cssLibrary$':
            '/force-app/main/default/lwc/cssLibrary/cssLibrary.css',
        // Jest mocks
        '^@salesforce/apex$': '/force-app/test/jest-mocks/apex',
        '^@salesforce/schema$': '/force-app/test/jest-mocks/schema',
        '^lightning/navigation$':
            '/force-app/test/jest-mocks/lightning/navigation',
        '^lightning/platformShowToastEvent$':
            '/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        '^lightning/uiRecordApi$':
            '/force-app/test/jest-mocks/lightning/uiRecordApi',
        '^lightning/messageService$':
            '/force-app/test/jest-mocks/lightning/messageService',
        '^lightning/actions$':
            '/force-app/test/jest-mocks/lightning/actions',
        '^lightning/alert$':
            '/force-app/test/jest-mocks/lightning/alert',
        '^lightning/confirm$':
            '/force-app/test/jest-mocks/lightning/confirm',
        '^lightning/prompt$':
            '/force-app/test/jest-mocks/lightning/prompt',
        '^lightning/modal*':
            '/force-app/test/jest-mocks/lightning/modal'
      },
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv,
    testTimeout: 10000
};
