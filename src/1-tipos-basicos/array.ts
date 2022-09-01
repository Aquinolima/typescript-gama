const dogs: string[] = [
    'Léia',
    'Snow',
    'Pipoca',
    'Hulk'
];

function exibeDogs(dogs: string[]) {
    return `Os dogs são: ${dogs.join(', ')}`
}

console.log(exibeDogs(dogs));