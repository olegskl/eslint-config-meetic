/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/best-practices-es5
 * @see http://eslint.org/docs/rules/#best-practices
 */

'use strict';

module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects (off by default)
    'accessor-pairs': 2,
    // Treat var statements as if they were block scoped (off by default)
    'block-scoped-var': 2,
    // Specify the maximum cyclomatic complexity allowed in a program (off by default)
    complexity: [2, 6],
    // Require return statements to either always or never specify values
    'consistent-return': 2,
    // Specify curly brace conventions for all control statements
    curly: [2, 'all'],
    // Require default case in switch statements (off by default)
    'default-case': 2,
    // Encourages use of dot notation whenever possible
    'dot-notation': [2, {allowKeywords: true}],
    // Enforces consistent newlines before or after dots (off by default)
    'dot-location': [2, 'property'],
    // Require the use of === and !==
    eqeqeq: 2,
    // Make sure for-in loops have an if statement (off by default)
    'guard-for-in': 2,
    // Disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // Disallow division operators explicitly at beginning of regular expression (off by default)
    'no-div-regex': 2,
    // Disallow else after a return in an if (off by default)
    'no-else-return': 2,
    // Disallow use of labels for anything other than loops and switches
    'no-empty-label': 2,
    // Disallow comparisons to null without a type-checking operator (off by default)
    'no-eq-null': 2,
    // Disallow use of eval()
    'no-eval': 2,
    // Disallow adding to native types
    'no-extend-native': 2,
    // Disallow unnecessary function binding
    'no-extra-bind': 2,
    // Disallow fallthrough of case statements
    'no-fallthrough': 2,
    // Disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-floating-decimal': 2,
    // Disallow use of eval()-like methods
    'no-implied-eval': 2,
    // Disallow usage of __iterator__ property
    'no-iterator': 2,
    // Disallow use of labeled statements
    'no-labels': 2,
    // Disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // Disallow creation of functions within loops
    'no-loop-func': 2,
    // Disallow use of multiple spaces
    'no-multi-spaces': 2,
    // Disallow use of multiline strings
    'no-multi-str': 2,
    // Disallow reassignments of native objects
    'no-native-reassign': 2,
    // Disallow use of new operator for Function object
    'no-new-func': 2,
    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2,
    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // Disallow use of octal escape sequences in string literals,
    // such as var foo = "Copyright \251";
    'no-octal-escape': 2,
    // Disallow use of octal literals
    'no-octal': 2,
    // Allow reassignment of function parameters (off by default)
    'no-param-reassign': 0,
    // Disallow use of process.env (off by default)
    'no-process-env': 2,
    // Disallow usage of __proto__ property
    'no-proto': 2,
    // Disallow declaring the same variable more than once
    'no-redeclare': 2,
    // Disallow use of assignment in return statement
    'no-return-assign': 2,
    // Disallow use of javascript: urls.,
    'no-script-url': 2,
    // Disallow comparisons where both sides are exactly the same (off by default)
    'no-self-compare': 2,
    // Disallow use of comma operator
    'no-sequences': 2,
    // Restrict what can be thrown as an exception (off by default)
    'no-throw-literal': 2,
    // Allow usage of expressions in statement position
    'no-unused-expressions': 2,
    // Disallow use of void operator (off by default)
    'no-void': 2,
    // Disallow usage of configurable warning terms in comments
    'no-warning-comments': 1,
    // Disallow use of the with statement
    'no-with': 2,
    // Require use of the second argument for parseInt() (off by default)
    radix: 2,
    // Requires to declare all vars on top of their containing scope (off by default)
    'vars-on-top': 2,
    // Require immediate function invocation to be wrapped in parentheses (off by default)
    'wrap-iife': [2, 'inside'],
    // Require or disallow Yoda conditions
    yoda: [2, 'never']
  }
};
