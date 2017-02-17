const OFF    = 'off'
const WARN   = 'warn'
const ERROR  = 'error'
const ALWAYS = 'always'

module.exports = {
  extends: 'metrological',
  parserOptions: {
    ecmaVersion: 6
  }
, rules: {
  // ECMAScript 6 TODO': decide later, once supported in apps and or override in node projects
  , 'arrow-body-style': OFF // TBD
  , 'arrow-parens': OFF // TBD
  , 'arrow-spacing': OFF // TBD
  , 'constructor-super': OFF // TBD
  , 'generator-star-spacing': OFF // TBD
  , 'no-class-assign': OFF // TBD
  , 'no-confusing-arrow': OFF // TBD
  , 'no-const-assign': OFF // TBD
  , 'no-dupe-class-members': OFF // TBD
  , 'no-duplicate-imports': OFF // TBD
  , 'no-new-symbol': OFF // TBD
  , 'no-restricted-imports': OFF // TBD
  , 'no-this-before-super': OFF // TBD
  , 'no-useless-computed-key': OFF // TBD
  , 'no-useless-constructor': OFF // TBD
  , 'no-useless-rename': OFF // TBD
  , 'no-var': OFF // TBD
  , 'object-shorthand': OFF // TBD
  , 'prefer-arrow-callback': OFF // TBD
  , 'prefer-const': OFF // TBD
  , 'prefer-destructuring': OFF // TBD
  , 'prefer-numeric-literals': OFF // TBD
  , 'prefer-reflect': OFF // TBD
  , 'prefer-rest-params': OFF // TBD
  , 'prefer-spread': OFF // TBD
  , 'prefer-template': OFF // TBD
  , 'require-yield': OFF // TBD
  , 'rest-spread-spacing': OFF // TBD
  , 'sort-imports': OFF // TBD
  , 'symbol-description': OFF // TBD
  , 'template-curly-spacing': OFF // TBD
  , 'yield-star-spacing': OFF // TBD
  }
}
