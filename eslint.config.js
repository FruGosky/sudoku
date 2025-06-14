import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import importPlugin from 'eslint-plugin-import';
import a11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.strictTypeChecked,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react: react,
			'react-x': reactX,
			'react-dom': reactDom,
			import: importPlugin,
			'jsx-a11y': a11y,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: ['./tsconfig.node.json', './tsconfig.app.json'],
					noWarnOnMultipleProjects: true,
				},
			},
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...reactX.configs['recommended-typescript'].rules,
			...reactDom.configs.recommended.rules,

			// React best practices
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger': 'warn',
			'react/no-deprecated': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-find-dom-node': 'error',
			'react/no-is-mounted': 'error',
			'react/no-render-return-value': 'error',
			'react/no-string-refs': 'error',
			'react/no-unknown-property': 'error',
			'react/require-render-return': 'error',
			'react/self-closing-comp': 'error',

			// Production safety
			'react/no-array-index-key': 'warn',
			'react/jsx-pascal-case': 'error',
			'react/jsx-handler-names': [
				'error',
				{ eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' },
			],
			'react/jsx-key': 'error',
			'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

			// Development quality
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'react/jsx-curly-brace-presence': [
				'error',
				{ props: 'never', children: 'always' },
			],
			'react/jsx-sort-props': [
				'warn',
				{
					callbacksLast: true,
					shorthandFirst: true,
					ignoreCase: true,
					reservedFirst: ['key'],
				},
			],
			'react/jsx-max-props-per-line': [
				'warn',
				{ maximum: 1, when: 'multiline' },
			],
			'react/jsx-first-prop-new-line': ['warn', 'multiline'],
			'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-no-target-blank': [
				'error',
				{ enforceDynamicLinks: 'always' },
			],

			// Security
			'react/jsx-no-script-url': 'error',
			'react/jsx-no-target-blank': [
				'error',
				{ enforceDynamicLinks: 'always' },
			],
			'react/no-unescaped-entities': 'error',
			'react/no-unsafe': ['error', { checkAliases: true }],

			// TypeScript specific
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
					allowBoolean: true,
					allowNullish: false,
					allowRegExp: false,
					allowAny: false,
					allowNever: false,
					allowArray: false,
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/await-thenable': 'error',

			// Import/Export rules
			'import/no-duplicates': 'error',
			'import/no-unresolved': 'error',
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'error',
			'import/no-cycle': 'error',
			'import/no-self-import': 'error',
			'import/no-useless-path-segments': 'error',
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'type',
					],
					'newlines-between': 'never',
					alphabetize: { order: 'asc' },
					warnOnUnassignedImports: true,
				},
			],

			// Accessibility rules
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/anchor-is-valid': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-role': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error',
			'jsx-a11y/role-supports-aria-props': 'error',
			'jsx-a11y/tabindex-no-positive': 'error',

			// Performance rules
			'react/jsx-no-constructed-context-values': 'error',
			'react/no-unstable-nested-components': [
				'error',
				{ allowAsProps: true },
			],
			'react/jsx-no-useless-fragment': 'error',

			// Code quality
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-duplicate-imports': 'error',
			'no-unused-expressions': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-template': 'error',
			eqeqeq: ['error', 'always'],
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'no-trailing-spaces': 'error',
			'eol-last': 'error',
			'no-param-reassign': 'error',
			'no-return-await': 'error',
			'prefer-arrow-callback': 'error',
		},
	},
);
