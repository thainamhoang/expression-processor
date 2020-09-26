<!-- markdownlint-disable MD001 MD038 -->

# Expression Processor

Expression Processor - like its name - is an evaluator (or filter) for an input string. It can parse a string of condition and return `true` or `false` depend on key value of the choosen user in the database.

## Installation

`npm i expression-processor` or `yarn add expression-processor`

## Testing

EP provides some sample cases to be run with `jest`. For testing, please install `jest` by `npm i jest --save-dev` or `yarn add jest --dev` and then `npm test` or `yarn test`.

## Usage

1. Write down a condition to check (with parentheses). For example, we want to check the type of the phone, the OS and email suffix:
   `(deviceName == iPhone && phoneOs == IOS && email <matches-regex> @yahoo.com)`
2. Import the suitable user info
3. Execute!!!

## Example

Considered the mentioned condition. This is how we use it:

```javascript
const Run = require("./index");

const condition =
  "(deviceName == iPhone && phoneOs == iOS && email <matches-regex> @yahoo.com)";
const userInfo = {
  deviceName: "iPhone",
  phoneOs: "iOS",
  email: "package_testing@gmail.com",
};

console.log(Run(userInfo, condition)); // return false
```

## Supported operators/filters

| Operator/Filter    | Description              |
| :----------------: | :----------------------: |
| `||`               | OR                       |
| `&&`               | AND                      |
| `!`                | NOT                      |
| `()`               | Parentheses              |
| `==`               | EQUAL_TO                 |
| `!=`               | NOT_EQUAL_TO             |
| `<`                | LESS_THAN                |
| `<=`               | LESS_THAN_OR_EQUAL_TO    |
| `>`                | GREATER_THAN             |
| `>=`               | GREATER_THAN_OR_EQUAL_TO |
| `<contains>`       | CONTAINS:                |
| `<array-contains>` | ARRAY_CONTAINS           |
| `<in>`             | IN                       |
| `<begins-with>`    | BEGINS_WITH              |
| `<ends-with>`      | ENDS_WITH                |
| `<matches-regex>`  | MATCHES_REGEX            |

###### tags: `expression`, `boolean`, `condition`

