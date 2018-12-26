## Context

### ClassifierContextExpression


```ocl--example
context <Type> (inv|def)
```


Define invariants and definitions on a given types
<div class="clearboth"></div>
### OperationContextExpression


```ocl--example
context Person::kill() (pre|post)
```

```
context Person::setAge(age: number)
   pre: age > 0
```

The Operation Context Expression allows to define pre and or post conditions of functions.
<div class="clearboth"></div>
### PropertyContextExpression


```ocl--example
context Person::age (init|derive)
```


A PropertyContextDefinition allows to initialize or derive a value for the targeted property.
<div class="clearboth"></div>
