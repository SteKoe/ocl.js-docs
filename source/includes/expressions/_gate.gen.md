## Gate

### AndExpression


```
false and true
```

| A     | B     | A and B |
| ----- | ----- | ------- |
| false | false | false   |
| false | true  | false   |
| true  | false | false   |
| true  | true  | true    |
<div class="clearboth"></div>
### ImpliesExpression


```
false implies true
```

| A     | B     | A implies B |
| ----- | ----- | ----------- |
| false | false | true        |
| false | true  | true        |
| true  | false | false       |
| true  | true  | true        |
<div class="clearboth"></div>
### NotExpression


```
not false
```

| A     | NOT A |
| ----- | ----- |
| true  | false |
| false | true  |
<div class="clearboth"></div>
### OrExpression


```
false or true
```

| A     | B     | A or B |
| ----- | ----- | ------ |
| false | false | false  |
| false | true  | true   |
| true  | false | true   |
| true  | true  | true   |
<div class="clearboth"></div>
### XorExpression


```
false xor true
```

| A     | B     | A xor B |
| ----- | ----- | ------- |
| false | false | false   |
| false | true  | true    |
| true  | false | true    |
| true  | true  | false   |
<div class="clearboth"></div>
