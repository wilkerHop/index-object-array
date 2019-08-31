# index-object-array
> Creates an object by the given array, indexing it by an element value.

## Install
Install with npm:
```sh
$ npm install --save index-object-array
```

## Usage
```js
import indexer from 'index-object-array';
const people = [
    { name: 'arthur', age: 8 },
    { name: 'tom', age: 24 },
    { name: 'angela', age: 11 }
];

indexer(people, person => person.name);
/*
{
    arthur: {
        name: 'arthur',
        age: 8
    },
    tom: {
        name: 'tom',
        age: 24
    },
    angela: {
        name: 'angela',
        age: 11
    }
}
*/
```
