module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
	transformIgnorePatterns: [
		"/node_modules/(?!(module-you-need-esm-support))",
	],
	moduleNameMapper: {
		"\\.(css|less|scss)$": "identity-obj-proxy", // This will mock CSS imports
	},
};
