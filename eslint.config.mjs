import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		"next/core-web-vitals",
		"next/typescript",
		"plugin:prettier/recommended",
	),
	{
		rules: {
			"@typescript-eslint/interface-name-prefix": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"react/no-unescaped-entities": "warn",
			indent: "off",
			"prettier/prettier": [
				"error",
				{
					tabWidth: 2,
					useTabs: true,
					singleQuote: false,
					trailingComma: "all",
				},
			],
		},
	},
];

export default eslintConfig;
