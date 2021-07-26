export default {
  clearMocks: true,
  moduleFileExtensions: ["js"],
  setupFiles: ["dotenv/config"],
  roots: ["./src"],
  testEnvironment: "node",
  transform: {},
  coveragePathIgnorePatterns: ["/node_modules/"],
};
