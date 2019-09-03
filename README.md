# index-object-array [![NPM version](https://img.shields.io/npm/v/index-object-array.svg?style=flat)](https://www.npmjs.com/package/index-object-array) [![NPM monthly downloads](https://img.shields.io/npm/dm/index-object-array.svg?style=flat)](https://npmjs.org/package/index-object-array) [![NPM total downloads](https://img.shields.io/npm/dt/index-object-array.svg?style=flat)](https://npmjs.org/package/index-object-array)
> Creates an object by the given array, indexing it by an element value.

## Install
Install with npm:
```sh
$ npm install --save index-object-array
```

## Usage
```ts
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

## Use case
Having to iterate over an array may cost too much performance when you are nested in loops
```js
people.reduce((acc, cur) => {
    if (grownups.find(adult => cur.name == adult.name)) {
        acc.push(people.find(person => person.name == cur.name));
    }
    return acc;
}, []);
```

So, with an object indexed by the value you would have used in the find function, you can access the element only by its key
```js
const grownupsIndexed = indexer(grownups, adult => adult.name);
const peopleIndexed = indexer(people, person => person.name);

 people.reduce((acc, cur) => {
    if (grownupsIndexed[cur.name]) {
        acc.push(peopleIndexed[cur.name]);
    }
    return acc;
}, []);
```
