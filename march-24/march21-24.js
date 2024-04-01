// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

const scheduler = (func, n) => {
    setTimeout(func, n);
}

const exampleFunc = () => console.log('Hello World!');

scheduler(exampleFunc, 2000)
