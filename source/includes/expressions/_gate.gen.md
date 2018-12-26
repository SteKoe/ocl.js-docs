## Gate

### AndExpression
```
false and true
```

&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
A        B       A and B
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
false    false   false
false    true    false
true     false   false
true     true    true
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
<div class="clearboth"></div>
### ImpliesExpression
```
false implies true
```

&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
A        B       A implies B
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
false    false   true
false    true    true
true     false   false
true     true    true
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
<div class="clearboth"></div>
### NotExpression
```
not false
```

&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
A        NOT A
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
true     false
false    true
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
<div class="clearboth"></div>
### OrExpression
```
false or true
```

&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
A        B       A or B
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
false    false   false
false    true    true
true     false   true
true     true    true
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
<div class="clearboth"></div>
### XorExpression
```
false xor true
```

&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
A        B       A xor B
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
false    false   false
false    true    true
true     false   true
true     true    false
&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;    &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;   &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
<div class="clearboth"></div>
