import React from 'react';

function MultipleList() {
    const persons = [
        {
            id: 1,
            name: "NTR",
            age: 36,
            skill: 'ACTING'
        },
        {
            id: 2,
            name: "KOHLI",
            age: 34,
            skill: 'PLAYING CRICKET'
        },
        {
            id: 3,
            name: "PRABHU DEVA",
            age: 54,
            skill: 'DANCING'
        },
        {
            id: 4,
            name: "RAMCHARAN",
            age: 33,
            skill: 'ACTING & DANCING'
        },
        {
            id: 5,
            name: "AMBANI",
            age: 58,
            skill: 'BUSINESS'
        }
    ];

    // Render the list using map
    const multipleList = persons.map(person => (
        <h1 key={person.id}>
            I am {person.name}. I am {person.age} years old and I know {person.skill}.
        </h1>
    ));

    return (
        <div>
            {multipleList}
        </div>
    );
}

export default MultipleList;