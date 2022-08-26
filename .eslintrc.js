module.exports = {
	extends: '@antfu',
	ignorePatterns: ['node_modules', 'lib'],
	rules: {
		'indent': ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'jsonc/indent': ['error',
			'tab',
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'@typescript-eslint/brace-style': [
			'error',
			'1tbs',
			{ allowSingleLine: true },
		],
		'curly': ['error', 'multi-line'],
		'no-console': 'warn',
	},
}
