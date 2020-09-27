const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  globals: {
    $Diff: true,
    __PATH_PREFIX__: true,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 6,
    sourceType: 'module',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      alias: [
        ['@constants', './src/constants'],
        ['@components', './src/components'],
        ['@containers', './src/containers'],
        ['@pages', './src/pages'],
        ['@store', './src/store'],
        ['@models', './src/models'],
        ['@hooks', './src/hooks'],
        ['@utils', './src/utils/*'],
      ],
    },
  },
  rules: {
    //- typescript
    '@typescript-eslint/array-type': [error, { 'array-simple': true }],
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/explicit-module-boundary-types': off,
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-explicit-any': error,
    '@typescript-eslint/no-non-null-assertion': error,
    '@typescript-eslint/no-object-literal-type-assertion': off,
    '@typescript-eslint/no-use-before-define': error,
    '@typescript-eslint/member-ordering': [
      error,
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [error, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-parameter-properties': [
      warn,
      { allows: ['readonly'] },
    ],
    '@typescript-eslint/no-empty-interface': error,
    //- import
    'import/no-cycle': off,
    'import/extensions': off,
    'import/newline-after-import': [error, { count: 1 }],
    'import/no-deprecated': warn,
    'import/no-duplicates': error,
    'import/no-unresolved': warn,
    'import/order': off,
    'import/prefer-default-export': off,
    //- jsx a11y
    'jsx-a11y/anchor-is-valid': [error, {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/label-has-associated-control': [error, { assert: 'htmlFor' }],
    'jsx-a11y/no-onchange': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    //- react
    'react/destructuring-assignment': off,
    'react/jsx-curly-brace-presence': [
      error,
      { props: 'never', children: 'ignore' },
    ],
    'react/jsx-filename-extension': [error, { extensions: ['.tsx'] }],
    'react/jsx-indent': off,
    'react/jsx-no-target-blank': error,
    'react/jsx-one-expression-per-line': error,
    'react/jsx-props-no-spreading': off,
    'react/jsx-wrap-multilines': error,
    'react/no-unused-prop-types': error,
    'react/no-typos': error,
    'react/no-unescaped-entities': error,
    'react/prop-types': off,
    'react/react-in-jsx-scope': off,
    'react/require-default-props': off,
    //- react hooks
    'react-hooks/exhaustive-deps': error,
    'react-hooks/rules-of-hooks': error,
    //- eslint rules
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    curly: [error, 'all'],
    eqeqeq: [error, 'always', { null: 'ignore' }],
    'eol-last': [error, 'always'],
    'global-require': off,
    indent: off,
    'jsx-quotes': [error, 'prefer-double'],
    'max-len': [error, { code: 150 }],
    'newline-after-var': warn,
    'newline-per-chained-call': error,
    'newline-before-return': error,
    'no-console': off,
    'no-else-return': error,
    'no-empty': [error, { allowEmptyCatch: true }],
    'no-empty-pattern': off,
    'no-multi-spaces': error,
    'no-multiple-empty-lines': [error, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-implicit-coercion': error,
    'no-trailing-spaces': error,
    'no-undef': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [
      error,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-var': error,
    'no-warning-comments': [
      warn,
      {
        terms: ['todo', 'fixme', 'xxx', 'but'],
        location: 'anywhere',
      },
    ],
    'object-curly-newline': [error, { consistent: true }],
    'object-curly-spacing': [error, 'always'],
    'keyword-spacing': error,
    'prefer-spread': off,
    'prefer-const': error,
    quotes: [error, 'single', { allowTemplateLiterals: true }],
    semi: error,
  },
  overrides: [
    {
      files: ['./src/pages/**/*.tsx'],
      rules: {
        'import/no-extraneous-dependencies': off,
        'react/no-danger': off,
        'react/prefer-stateless-function': off,
      },
    },
  ],
};
