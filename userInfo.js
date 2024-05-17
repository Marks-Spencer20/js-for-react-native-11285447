// Task 3 , original and modified names with userInfo.js

let id;
id = 1;

function createUserProfiles(names, modifiedNames) {
    return names.map(( name, index) => {
        return {
            originalName: name,
            modifiedNames: modifiedNames[index],
            id: id++,
        };
    });
}

// for example
// Using the names and modified names in Task 2
const number = [1, 2, 3, 4];
const processedNumber = processArray(number);
const names = ['King', 'fred', 'sheep', 'cat']
const modifiedNames = formatArrayStrings(names, processedNumber)
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);


// The User profile prints out like this 
// [
//   { originalName: 'King', modifiedNames: 'king', id: 1 },
//   { originalName: 'fred', modifiedNames: 'FRED', id: 2 },
//   { originalName: 'sheep', modifiedNames: 'sheep', id: 3 },
//   { originalName: 'cat', modifiedNames: 'CAT', id: 4 }
// ]