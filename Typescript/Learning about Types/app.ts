enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

let favoriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}