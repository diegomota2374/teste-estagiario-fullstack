module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Handle TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // Handle JavaScript/JSX files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Ensure jest-dom is loaded
};
