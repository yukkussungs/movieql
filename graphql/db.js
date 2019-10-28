export const people = [
    {
        id: 0,
        name: "woohee",
        age: 24,
        gender: "female",
    },
    {
        id: 1,
        name: "yeajin",
        age: 23,
        gender: "female",
    },
    {
        id: 2,
        name: "jiwon",
        age: 23,
        gender: "female",
    },
    {
        id: 3,
        name: "kanna",
        age: 20,
        gender: "female",
    },
    {
        id: 4,
        name: "fumika",
        age: 23,
        gender: "female",
    },
    {
        id: 5,
        name: "satomi",
        age: 30,
        gender: "female",
    },
];

export const getById = id => {
    const filterPeople = people.filter(person => person.id === id);
    return filterPeople[0];
}