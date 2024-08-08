// const username = "John";

// // 𝟭. 𝗠𝗲𝘁𝗵𝗼𝗱 𝗼𝗳 𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗟𝗲𝗻𝗴𝘁𝗵 𝗼𝗳 𝘀𝘁𝗿𝗶𝗻𝗴

// const firstLetter = username[0];
// const lastLetter = username[username.length - 1];

// console.log(firstLetter, lastLetter);

// // 𝟮. 𝗠𝗲𝘁𝗵𝗼𝗱 𝗼𝗳 𝗖𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗖𝗮𝘀𝗲 𝗼𝗳 𝘀𝘁𝗿𝗶𝗻𝗴

// // both methods (toUpperCase and toLowerCase) are immutable means they can't change the existing data but instead creates a new data, which we've to store in a new variable.
// const upperCase = username.toUpperCase();
// const lowerCase = username.toLowerCase();
// console.log(upperCase);
// console.log(lowerCase);

// // 𝟯. 𝗦𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿 𝗦𝘂𝗯𝗦𝘁𝗿𝗶𝗻𝗴

// const hobbies = "I love HTML, CSS and JavaScript";

// // i) indexOf() =>
// const subString = hobbies.indexOf("HTML"); // if result is "-1" that means no matching substring found in that string.

// console.log(subString);

// // ii) includes() => Most used and Best one
// const isIncluded = hobbies.includes("JavaScript");
// console.log(isIncluded);

// //  𝟰. 𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗮 𝗦𝘂𝗯𝗦𝘁𝗿𝗶𝗻𝗴

// const exampleString = "hotdog";

// // Method slice()
// const slicedString = exampleString.slice(3);
// console.log(slicedString);

// // 𝟱. 𝗦𝗽𝗹𝗶𝘁 𝗮 𝗦𝘁𝗿𝗶𝗻𝗴

// const string = "The quick brown fox jumps over the lazy dog.";

// // split()
// const eachCharactersSplit = string.split(""); // giving nothing for separtor
// console.log(eachCharactersSplit);
// /* Result :->
// (44) ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.']
// */

// const eachWordsSplit = string.split(" "); // giving 'space' as a separtor
// console.log(eachWordsSplit);
// /* Result :->
// (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
// */

// const specificWordSplit = string.split("fox");
// console.log(specificWordSplit);
// /* Result :->
// (2) ['The quick brown ', ' jumps over the lazy dog.']
// */

// // 𝟲. 𝗥𝗲𝘃𝗲𝗿𝘀𝗲 𝗮 𝗦𝘁𝗿𝗶𝗻𝗴

// const originalString = "test";
// const splitString = originalString.split("");
// console.log(splitString);
// const reverseArrayString = splitString.reverse();
// console.log(reverseArrayString);
// const joinArrayString = reverseArrayString.join("");
// console.log(joinArrayString);

// //  OR    it's shorthand

// const reverseString = originalString.split("").reverse().join("");
// console.log(reverseString);

// // 𝟳. 𝗥𝗲𝗽𝗲𝗮𝘁 𝗮 𝘀𝘁𝗿𝗶𝗻𝗴 '𝗻' 𝗻𝘂𝗺𝗯𝗲𝗿 𝗼𝗳 𝘁𝗶𝗺𝗲𝘀

// const dogSays = "woof";
// console.log(dogSays.repeat(6));

// // 𝟴. 𝗥𝗲𝗽𝗹𝗮𝗰𝗲 𝗮 𝘀𝘂𝗯𝗦𝘁𝗿𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗦𝘁𝗿𝗶𝗻𝗴

// const personSays = "Hello, I am a joker";
// console.log(personSays.replace("joker", "Officer"));

// // 𝟵. 𝗧𝗿𝗶𝗺, to remove trailing and ending white or empty spaces not the in-between character whitespace

// const emptySpaceString = "    HE  l  l o,  J  ok  er";
// console.log(emptySpaceString.replace(/\s+/g, "")); // regular expression searching for all the white spaces "\s" => 'spaces', 'tabs', 'line breaker' etc., "+" for matching one or more whitespaces, "/g" 'g' flag for global search.
// console.log(emptySpaceString.trim());

// String Exercie =>
// We have a guest string,
const guestList = "Our guests are: emma, jacob, isabella, don";

// 1. Get a length of the string.
const length = guestList.length;
console.log(length);

// 2. UpperCase the entire string.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

// 3. Check wheter 'DON' is on the uppercasedGuestList.
const isDonOnTheList = uppercasedGuestList.includes("DON");
console.log(isDonOnTheList);

// 4. Create a substring that only contains the following: 'EMMA, JACOB, ISABELLA, DON'.
const substringGuests = uppercasedGuestList.slice(16);
console.log(substringGuests);

// 5. Out of the substring you just created, Create an array of names of people that are on the list.
const guests = substringGuests.split(",");
console.log(guests);
