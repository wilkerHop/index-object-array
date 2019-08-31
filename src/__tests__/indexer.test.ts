import indexer from '../index';
test('Indexer has the same result as find', () => {
    const people = [
        { name: 'arthur', age: 8 },
        { name: 'bob', age: 7 },
        { name: 'mike', age: 10 },
        { name: 'chris', age: 8 },
        { name: 'carl', age: 9 },
        { name: 'penny', age: 6 },
        { name: 'angela', age: 11 },
        { name: 'ann', age: 7 },
        { name: 'james', age: 33 },
        { name: 'linda', age: 21 },
        { name: 'tom', age: 24 },
        { name: 'sam', age: 52 },
        { name: 'alberto', age: 35 },
        { name: 'jannet', age: 41 },
        { name: 'phoebie', age: 23 },
        { name: 'lucas', age: 24 },
        { name: 'sandra', age: 48 },
    ];

    const grownups = [
        { name: 'james' },
        { name: 'linda' },
        { name: 'tom' },
        { name: 'sam' },
        { name: 'alberto' },
        { name: 'jannet' },
        { name: 'phoebie' },
        { name: 'lucas' },
        { name: 'sandra' },
    ];

    const grownupsIndexed = indexer(grownups, adult => adult.name);
    const peopleIndexed = indexer(people, person => person.name);

    const indexerValue = people
        .reduce((acc, cur) => {
            if (grownupsIndexed[cur.name]) {
                acc.push(peopleIndexed[cur.name]);
            }
            return acc;
        }, [])
        .sort((a, b) => a.age - b.age);

    const findValue = people
        .reduce((acc, cur) => {
            if (grownups.find(adult => cur.name == adult.name)) {
                acc.push(people.find(person => person.name == cur.name));
            }
            return acc;
        }, [])
        .sort((a, b) => a.age - b.age);

    expect(indexerValue).toStrictEqual(findValue);
});
