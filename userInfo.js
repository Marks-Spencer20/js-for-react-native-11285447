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

