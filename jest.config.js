// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest/setup-tests.js"],

  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\\\]+$",
    "C:\\\\projetos\\\\disafio-oxeanbits\\\\src\\\\__tests__\\\\__mocks__\\\\",
    "C:\\\\projetos\\\\disafio-oxeanbits\\\\src\\\\__tests__\\\\__fixtures__\\\\",
    "C:\\\\projetos\\\\disafio-oxeanbits\\\\src\\\\.*\\\\*.d\\.ts$"
  ],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // Adicione esta linha para transformar arquivos .js e .jsx com Babel
  },
};
