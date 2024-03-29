module.exports = {
	extends: '@antfu',
	ignorePatterns: ['node_modules'],
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
		'operator-linebreak': ['error', 'after'],
		'no-console': 'warn',
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
			},
		],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					normal: 'never',
					void: 'always',
					component: 'any',
				},
			},
		],
	},
}
