# Using Types


## Core Types

Javascript types:
- **numbers** - 1, 5.3, -10
- **string** - "Hi", 'Hi'
- **boolean** - true, false
- **object** - {age: 30}
- **array** - [1,2,3]

Typescript types:
- **Tuple** - [1,2] fixed length, doesnt change
- **Enum** - enum{NEW, OLD}
- **Any** - *


## Variables and Constants

Constants don't change, variales can change.
```
// create a constant
const number = 8;
// create a variable
let number = 9
```


## Type Inference
Typescript has built-in feature to do it's best to understand which type you have in a specific variable or constant. 

## Nested Objects

```
{
    id: string;
    price: number;
    tags; string[];
    details: {
        title: string;
        description; string;
    }
}
```
