import antfu from "@antfu/eslint-config"

export default antfu(
	{
		formatters: true,
		ignores: ["**/tsconfig.json"],
		solid: true,

		stylistic: {
			indent: "tab",
			quotes: "double",
			semi: false
		},

		typescript: true
	},
	{
		rules: {
			"antfu/consistent-chaining": [
				"error",
				{ allowLeadingPropertyAccess: true }
			],
			"antfu/no-top-level-await": "off",
			"jsonc/sort-keys": "off",
			"no-console": "warn",
			"node/no-process-env": "error",
			"node/prefer-global/process": "off",
			"perfectionist/sort-array-includes": "error",
			"perfectionist/sort-named-exports": "error",
			"perfectionist/sort-named-imports": "error",
			"perfectionist/sort-objects": "error",
			"perfectionist/sort-union-types": "error",
			"solid/no-innerhtml": "off",
			"style/comma-dangle": ["error", { functions: "never" }],
			"ts/consistent-type-definitions": ["error", "type"],
			"ts/no-redeclare": "off",
			"unicorn/filename-case": [
				"error",
				{
					case: "kebabCase",
					ignore: ["README.md"]
				}
			]
		}
	}
)
