/*
Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

const random7 = () => {
    return Math.floor((Math.random() * 7) + 1);
}


