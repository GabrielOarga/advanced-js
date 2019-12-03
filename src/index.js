console.log(name);
console.log(handle);
console.log(getUser);
console.log(arrowFunc);

const name = 'Tyler';
const handle = '@tyler';

function getUser() {
    return {name: name, handle: handle}
}

const arrowFunc = () => {
    return ({
        name,
        handle
    })
}