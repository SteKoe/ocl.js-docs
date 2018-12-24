# API
## create() : OclEngine
```typescript
const oclEngine = OclEngine.create();
```
Instead of using the constructor, this function can be used to create a new `OclEngine` instance.

## setTypeDeterminer(fn : Function) : void
```typescript
class MyCustomType {
  private _type: string;
}

oclEngine.setTypeDeterminer(obj => obj._type);
```
In order to let OCL.js determine the correct object instance for a context, there is a basic type detection implemented by default.
The basic implementation tries to determine the type of the given object by accessing the property `typeName`. 
If that property is not available, the name of the constructor is about to be determined.
If there is no type information available, `Object` will be returned as most abstract type.

There might be cases where the build-in type detection function is not sufficient, hence it is possible to provide a custom function for that.
Assumed that the discriminator for an object type is part of the given instance (e.g. a field called `_type`) then a custom function which determines the actual type can be provided.

Let’s say there is a class `MyCustomType` that contains the field `_type` as discriminator.

Whenever the OCL engine has to check the context, the custom function that is passed to `setTypeDeterminer` will be called.

## registerTypes(list : Map) : void
```typescript
const customTypes = {
  "Person": class Person { /* implementation */ } 
}

oclEngine.registerTypes(customTypes);
```

In order to register custom types, this function takes a map as argument.
The key of the map is used to lookup a specific type even if the code is minified.
By adding custom types, ocl functions like `oclIsTypeOf` and `oclIsKindOf` work more properly. 

## registerEnum
```typescript
const Gender = {
    FEMALE: 'female',
    MALE: 'male',
    OTHER: 'other'
}

oclEngine.registerEnum('Gender', Gender);
```
Whenever the use of enumerations is necessary, the enumeration has to be registered to the OCL Engine in order to let it parse the correct values.

Registering an enumeration is possible via the function `registerEnum(name : string, values : object)`.
Let's assume one has defined an enumeration for `Gender`, it has to be registered to the OCL Engine as follows:

## addOclExpression(oclExpression : string, labels? : Array<string>) : OclEngine
```typescript
const oclExpression = `
    context Person inv: self.name->notEmpty()
`;
oclEngine.addOclExpression(oclExpression);
```

```typescript
const oclExpression = `
    context Person inv: self.name->notEmpty()
    context Person inv: self.age > 0
`;
oclEngine.addOclExpression(oclExpression);
```
Via this function, new OCL expressions can be added to the engine.
It is possible to define one context per function call or multiple contexts at one.

The second argument `label` can be used to tag OCL expressions.
This is useful when just a subset of rules should be evaluated.
The rules that should be used during evaluation phase can be specified when calling `evaluate` function.

## addOclExpressions(oclExpressions : Array<string>, labels? : Array<string>) : OclEngine
```typescript
const oclExpressions = [
  'context Person inv: self.name->notEmpty()',
  'context Person inv: self.age > 0'
];
oclEngine.addOclExpression(oclExpressions);
```
Instead of passing a big blob of text, containing all OCL rules, it is also possible to pass in an array of OCL expressions.
For each OCL expression in the array, the function `addOclExpression` will be called.

## removeOclExpression(oclExpression : string) : OclEngine
Removes an already registered OCL rule.

## clearAllOclExpressions : OclEngine
Removes all registered OCL rules.

## evaluate(obj : any, labels? : Array<string>) : OclResult
This function runs the evaluation process for the given object `obj`.
The OCL engine tries to determine the type of the given object and then runs all context definitions / rules that match the type.
As a result an object is returned that offers three methods:

 1. `getResult() : boolean`: Returns the result of each and every OCL rule that has been run for the given object.
 1. `getNamesOfFailedInvs() : Array<string>`: Returns the names of invariants that have evaluated to `false`.
 1. `getEvaluatedContexts() : Array<ContextExpression>`: Returns all the context expressions that have been evaluated.

## createQuery(query : string) : Expression
```typescript
const expression = oclEngine.createQuery('self->any(i | i < 1)');
const result = oclEngine.evaluateQuery([1.2, 2.3, 5.2, 0.9], expression);
// result will now be [0.9]
```

Even though the OCL is created to check for constraints, a big part of it is about querying objects and object properties.
Hence, OCL.js can also be used to query objects, as well, without having the need to run an evaluation.

## evaluateQuery(obj : any, oclExpression : Expression) : any
Runs the given `oclExpression` on the object `obj`.
