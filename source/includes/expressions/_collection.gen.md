## Collection

### AnyExpression


```
self.collection->any(i < 2)
```

Returns the first element that validates the given expression.
<div class="clearboth"></div>
### AppendExpression


```
self.collection->append("string")
```

Appends the given element to the given collection and returns the extended collection.
<div class="clearboth"></div>
### AsSetExpression


```
self.collection->asSet()
```

Returns the given collection as set, containing unique entries.
<div class="clearboth"></div>
### AtExpression


```
self.collection->at(2)
```

Returns the element of the collection at index index.
<div class="clearboth"></div>
### CollectExpression
> When we want to specify a collection that is derived from some other collection, but which contains different
> objects from the original collection (i.e., it is not a sub-collection), we can use a collect operation.
> The collect operation uses the same syntax as the select and reject.

```
self.children->collect(age)
```


<div class="clearboth"></div>
### ExistsExpression


```
self.collection->exists(i | i < 2)
```

Operation which checks whether a collection contains an element specified by expr.
<div class="clearboth"></div>
### FirstExpression


```
self.collection->first()
```

Returns the first element of the collection.
<div class="clearboth"></div>
### ForAllExpression
> Many times a constraint is needed on all elements of a collection.
> The forAll operation in OCL allows specifying a Boolean expression, which must hold for all objects in a collection.



<div class="clearboth"></div>
### IsEmptyExpression


```
self.cars->isEmpty()
```

Returns true if self is empty, false otherwise.
<div class="clearboth"></div>
### IsUniqueExpression


```
self.collection->isUnique(self > 3)
```

Returns true if the given expr evaluated on the body returns only different values.
<div class="clearboth"></div>
### LastExpression


```
self.collection->last()
```

Returns the last element of the collection.
<div class="clearboth"></div>
### NotEmptyExpression


```
self.cars->notEmpty()
```

Returns true if self is not empty, false otherwise.
<div class="clearboth"></div>
### OneExpression


```
self.collection->one(age < 18)
```

Returns true of there is exactly one element matching the given expression, false otherwise.
<div class="clearboth"></div>
### RejectExpression
> The reject operation specifies a subset of a collection.
> A reject is an operation on a collection and is specified using the arrow-syntax.
> This results in a collection that removes all the elements from collection for which the boolean-expression evaluates to true.
> To find the result of this expression, for each element in collection the expression boolean-expression is evaluated.
> If this evaluates to true, the element is excluded in the result collection, otherwise not.

```
self.customer->reject(underage)
```


<div class="clearboth"></div>
### SelectExpression
> The select operation specifies a subset of a collection.
> A select is an operation on a collection and is specified using the arrow-syntax.
> This results in a collection that contains all the elements from collection for which the boolean-expression evaluates to true.
> To find the result of this expression, for each element in collection the expression boolean-expression is evaluated.
> If this evaluates to true, the element is included in the result collection, otherwise not.

```
self.collection->select(item | item.name = "random")
```


<div class="clearboth"></div>
### SizeExpression


```
self.collection->size()
```

Returns the size of the given collection.
<div class="clearboth"></div>
### SumExpression


```
self.jobs.salary->sum()
```

Returns the sum of all elements contained in self if they support the &#x27;+&#x27; operation.
<div class="clearboth"></div>
### UnionExpression


```
self.collection->union(self.anotherCollection)
```

Returns a collection containing all elements of self and all elements of the passed in collection.
<div class="clearboth"></div>