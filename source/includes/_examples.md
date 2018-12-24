# Examples
## Company

```typescript--example
export class Company {
    name : String;
    employee: Person[];
    manager: Person;
}

export class Person {
    name : String;
    age : Number;
    isUnemployed: boolean;
}
```

```typescript--example
import { OclEngine } from "@stekoe/ocl.js"
import { Company, Person } from "./company.js"

const oclEngine = OclEngine.create();

oclEngine.addOclExpression(`
    -- No one should work that long...
    context Company inv:
        self.employee->forAll(p : Person | p.age <= 65 )
    
    -- If a company has a manager, 
    -- the company has at least one employee.
    context Company
        inv: self.manager.isUnemployed = false
        inv: self.employee->notEmpty()
`);

let company = new Company();
company.employee.push(new Person());

const oclResult = oclEngine.evaluate(company);
```

## Person
```typescript--example
import { OclEngine } from "@stekoe/ocl.js"

class Person {
    name : String;
    age : Number;
    children : Person[];
    isMarried : Boolean;
    husband : Person;
    wife : Person;
}

const oclResult = OclEngine.create()
  .addOclExpression(`
      -- Check that underage persons are not married
      context Person inv:
          age < 18 implies isMarried = false
      
      -- Check that each and every children is younger than 18 years old
      context Person inv:
          children->select(age >= 18)->isEmpty()
      
      -- If a person is married, wife or husband has to be at least 18 years old
      context Person inv:
          self.wife->notEmpty() implies self.wife.age >= 18 and
          self.husband->notEmpty() implies self.husband.age >= 18
      
      -- If there are children, one should be named Stephan ;)
      context Person inv:
          self.children->exists(child | child.name = 'Stephan')
  `)
  .evaluate(new Person());
```
