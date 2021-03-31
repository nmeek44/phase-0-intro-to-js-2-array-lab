const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendCat(Ralph) {
    cats.push(`${Ralph}`);
}
function destructivelyPrependCat(Ralph) {
    cats.unshift(`${Ralph}`);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(Ralph) {
    const appendCat = [...cats, `${Ralph}`]; 
    return appendCat;
}
function prependCat(Ralph) {
    const prependCat = [`${Ralph}`, ...cats];
    return prependCat;
}
function removeLastCat() {
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
}
function removeFirstCat() {
    const removeFirstCat = cats.slice(1, cats.length);
    return removeFirstCat;
}