module.exports = {
  presets: [
    "@babel/preset-env",
    { targets: { node: "current" } }, // Transpile modern JavaScript
    "@babel/preset-react", // Transpile JSX
    "@babel/preset-typescript", // Transpile TypeScript
  ],
};
