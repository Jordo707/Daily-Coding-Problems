/*

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

*/

function rand5(){
    return Math.floor((Math.random() * 5) + 1)
}

function rand7(){
    let idx = 25;
    while (idx > 20) {
        const row = rand5() - 1;
        const col = rand5();
        idx = row * 5 + col;
    }
    return (idx % 7) + 1;

}
