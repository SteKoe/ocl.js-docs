## String

### ConcatExpression


```ocl--example
String::concat (s : String) : String
```

```
self.name.concat("string")
```

Returns a string that is concatenated using source and body
<div class="clearboth"></div>
### IndexOfExpression


```ocl--example
String::indexOf (s : String) : Number
```

```
self.name.indexOf("string")
```

Returns the index of the given string in self or 0 if it is not condained.
<div class="clearboth"></div>
### SubstringExpression


```ocl--example
String::substring (start : Number, end : Number) : String
```

```
self.name.substring(0,2)
```

Returns a string containing all characters from self starting from index *start* up to index *end* included.
Both *start* and *end* parameters should be contained between *1* and *self.size()* included.
*start* cannot be greater than *end*.
<div class="clearboth"></div>
### ToIntegerExpression


```ocl--example
String::toInteger () : Number
```

```
"3.414".toInteger()
```

Tries to convert a string to a number.
<div class="clearboth"></div>
### ToLowerCaseExpression


```ocl--example
String:: toLowerCase () : String
```

```
self.name.toLowerCase()
```

Returns *self* as lower case string.
<div class="clearboth"></div>
### ToRealExpression


```ocl--example
String:: toReal () : Number
```

```
"3.414".toReal()
```

Tries to convert a string to a number.
<div class="clearboth"></div>
### ToUpperCaseExpression


```ocl--example
String:: toUpperCase () : String
```

```
self.name.toUpperCase()
```

Returns *self* into upper case string.
<div class="clearboth"></div>
