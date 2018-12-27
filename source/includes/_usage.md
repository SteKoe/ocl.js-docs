# Usage

## Installation 
```bash
$ npm install @stekoe/ocl.js --save
```
OCL.js is entirely written in JavaScript and is [published to npm](https://www.npmjs.com/package/@stekoe/ocl.js) so you can either install it with npm or [yarn](https://yarnpkg.com). 
It is designed to run either in an node environment or in the browser.

As alternative, you can also download the ocl.min.js file from GitHub and include that to your code.

## Example: Basic usage
```typescript
import { OclEngine } from '@stekoe/ocl.js';

class Person {
  private parents = [];
}

// Define OCL rule
const myOclExpression = `
    context Person
        inv: self.parents->forAll(p | p <> self)
`;

// Instantiate the OclEngine here
const oclEngine = OclEngine.create();

// Add your first OCL expression here
oclEngine.addOclExpression(myOclExpression);

// Evaluate an object obj against all know OCL expressions
const oclResult = oclEngine.evaluate(new Person());

// Prints 'true' to console!
console.log(oclResult.getResult());

```

```javascript
const OclEngine = require("@stekoe/ocl.js").OclEngine;

// A simple class that represents a person
class Person {
  constructor() {
    this.parents = [];
  }
}

// Define OCL rule
const myOclExpression = `
    context Person
        inv: self.parents->forAll(p | p <> self)
`;

// Instantiate the OclEngine here
const oclEngine = OclEngine.create();

// Add your first OCL expression here
oclEngine.addOclExpression(myOclExpression);

// Evaluate an object obj against all know OCL expressions
const oclResult = oclEngine.evaluate(new Person());

// Prints 'true' to console!
console.log(oclResult.getResult());
```

When adding OCL.js via npm, you can start using it via importing the OCLEngine that is provided by “@stekoe/ocl.js”.


The resulting `oclResult` object contains three fields: 

 1. `result` contains the actual result of the evaluation run as a boolean value 
 1. `namesOfFailedInvs` contains the names of failed invariants or `anonymous` if none has been provided
 1. `evaluatedContexts` contains all `ContextExpressions` that have been evaluated 
