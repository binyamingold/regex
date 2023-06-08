// שאלה 1
// write a regular expression with flags and a pattern

const str = `The Naming of Cats is a difficult matter,
It isn't just one of your holiday games;
You may think at first I'm as mad as a hatter
When I tell you, a cat must have THREE DIFFERENT NAMES.
First of all, there's the name that the family use daily,
Such as Peter, Augustus, Alonzo or James,
Such as Victor or Jonathan, George or Bill Bailey—
All of them sensible everyday names.
There are fancier names if you think they sound sweeter,
Some for the gentlemen, some for the dames:
Such as Plato, Admetus, Electra, Demeter—
But all of them sensible everyday names.
But I tell you, a cat needs a name that's particular,
A name that's peculiar, and more dignified,
Else how can he keep up his tail perpendicular,
Or spread out his whiskers, or cherish his pride?`;



const regex = /\b\w+\b(?=[^\n]*$)/gm;
console.log(str.match(regex));



// // שאלה 2
// const usernameRegex = /^[a-z0-9_-]{3,16}$/i;

// // דוגמה לבדיקה
// const username = "myUsername123";
// if (usernameRegex.test(username)) {
//   console.log("שם המשתמש תקין");
// } else {
//   console.log("שם המשתמש לא תקין");
// }


// // שאלה 3
// const lettersRegex = /^[aeiou]+$/i;

// // דוגמה לבדיקה
// const valuo = "aEIOU";
// if (lettersRegex.test(valuo)) {
//   console.log("המחרוזת מכילה רק אותיות תנועה באנגלית");
// } else {
//   console.log("המחרוזת מכילה תווים שאינם אותיות תנועה באנגלית");
// }