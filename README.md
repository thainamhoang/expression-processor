<!-- markdownlint-disable MD001 MD038 -->

# Expression Processor

Expression Processor - like its name - is an evaluator (or filter) for an input string. It can parse a string of condition and return `true` or `false` depend on key value of the choosen user in the database.

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

## Usage

1. Write down a condition to check (with parentheses). For example, we want to check the type of the phone, the OS and email suffix:
   `(deviceName == iPhone && phoneOs == IOS && email <matches-regex> @yahoo.com)`
2. Import the suitable user
3. Execute!!!

## Example

Considered the mentioned condition. This is how we use it

```javascript
const Run = require("./index");

const condition =
  "(deviceName == iPhone && phoneOs == IOS && email <matches-regex> @yahoo.com)";
const UserInfo = {
  deviceName: "iPhone",
  phoneOs: "IOS",
  email: "package_testing@gmail.com",
};

console.log(Run(UserInfo, condition)); // return false
```

## Installation

`npm install expression-processor` or `yarn add expression-processor`
