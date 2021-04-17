const myDate = new Date("January 01, 2021" );
const dateWith7Parameter = new Date(2021,5,12,23,12,50,0);

const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now();

    const diff_ms = today - birtday.getTime();
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
}

console.log(myAge('2000-01-22'));

const listOfContent = [1, 2, "President", {}];
console.log(Array.isArray(listOfContent));

const splitText = "12:20:00".split(':');
console.log(splitText);